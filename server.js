const express = require('express');
const connectDB = require('./config/db');
const mongoose = require('mongoose');
const app = express();

connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API running');
});

const userRouter = require('./routes/api/users');
const postsRouter = require('./routes/api/posts');
const authRouter = require('./routes/api/auth');
const profileRouter = require('./routes/api/profile');

app.use('/api/users', userRouter);
app.use('/api/posts', postsRouter);
app.use('/api/auth', authRouter);
app.use('/api/profile', profileRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}...`);
});
