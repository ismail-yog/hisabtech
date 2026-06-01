const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Lead = require('../models/Lead');

router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, city, service, message } = req.body;

    // Save to DB
    const newLead = new Lead({ name, email, phone, company, city, service, message });
    await newLead.save();

    // Send email (optional, fail gracefully if credentials missing)
    if (process.env.SMTP_HOST) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from: process.env.SMTP_USER,
        to: process.env.NOTIFY_EMAIL,
        subject: `New Lead from Website: ${name}`,
        text: `
          You have received a new lead from the website:
          
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Company: ${company}
          City: ${city}
          Service of Interest: ${service}
          
          Message:
          ${message}
        `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (mailErr) {
        console.error('Error sending email notification:', mailErr);
      }
    }

    res.status(201).json({ message: 'Lead submitted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
