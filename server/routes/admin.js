const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { Parser } = require('json2csv');
const Lead = require('../models/Lead');
const auth = require('../middleware/auth');

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Get all leads
router.get('/leads', auth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete lead
router.delete('/leads/:id', auth, async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ message: 'Lead deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Mark as read
router.patch('/leads/:id', auth, async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, { status: 'read' }, { new: true });
    res.json(lead);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Export CSV
router.get('/export', auth, async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 }).lean();
    const fields = ['createdAt', 'name', 'email', 'phone', 'company', 'city', 'service', 'message', 'status'];
    const opts = { fields };
    const parser = new Parser(opts);
    const csv = parser.parse(leads);

    res.header('Content-Type', 'text/csv');
    res.attachment('leads.csv');
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
