const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config({ path: './data.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connection successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
};

// Connect to the database
connectDB();

module.exports = mongoose;
