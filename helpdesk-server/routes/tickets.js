const express = require('express');
const router = express.Router();
const { getTickets, createTicket } = require('../controllers/ticketsController');

router.get('/', getTickets);
router.post('/', createTicket);

module.exports = router;
