require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// DB connect
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Routes
const userRoutes = require('./routes/users');
const ticketRoutes = require('./routes/tickets');

app.use('/users', userRoutes);
app.use('/tickets', ticketRoutes);

// Home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Ticket form submit
app.post("/ticket", async (req, res) => {
  const { title, description } = req.body;

  //error checking
  if (!title || !description) {
    return res.send(`
      <h2>Error</h2>
      <p>All fields are required.</p>
      <a href="/">Go back</a>
    `);
  }

  //user input
  res.send(`
    <h1>Ticket Created</h1>
    <p><strong>Title:</strong> ${title}</p>
    <p><strong>Description:</strong> ${description}</p>
    <a href="/">Submit another</a>
  `);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));