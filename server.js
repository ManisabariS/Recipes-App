const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');
const cors = require('cors');
// const { default: mongoose } = require('mongoose');
// const mongoose = require('mongoose');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRoutes);

// app.use('/api/recipes', recipeRoutes);

// mongoose.connect(process.env.MONGO_URI)
//   .then(() =>{ console.log('MongoDB Connected')
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// })
//   .catch((err) => console.error('MongoDB connection error:', err));
  
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
