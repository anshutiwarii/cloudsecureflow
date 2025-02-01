import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import speakeasy from 'speakeasy';

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      // If MFA is enabled, don't send token yet
      if (user.mfaEnabled) {
        res.json({
          mfaEnabled: true,
          message: "MFA verification required"
        });
      } else {
        // If MFA is not enabled, send token immediately
        res.json({
          _id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
          token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: '30d',
          }),
        });
      }
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Verify MFA code
router.post('/verify-mfa', async (req, res) => {
  try {
    const { email, code } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const verified = speakeasy.totp.verify({
      secret: user.mfaSecret,
      encoding: 'base32',
      token: code,
      window: 1
    });

    if (verified) {
      user.lastLogin = new Date();
      await user.save();

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
          expiresIn: '30d',
        }),
      });
    } else {
      res.status(401).json({ message: 'Invalid MFA code' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Register route
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password,
      role
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      }),
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Setup MFA
router.post('/setup-mfa', async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const secret = speakeasy.generateSecret({ length: 20 });
    user.mfaSecret = secret.base32;
    user.mfaEnabled = true;
    await user.save();

    res.json({
      secret: secret.base32,
      otpauth_url: secret.otpauth_url
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;