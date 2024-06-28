require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const data = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
module.exports= connectDB;