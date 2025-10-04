const Ticket = require('../models/Ticket');

exports.getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().populate('createdBy', 'username email');
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createTicket = async (req, res) => {
  try {
    const ticket = new Ticket(req.body);
    await ticket.save();
    res.status(201).json(ticket);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
