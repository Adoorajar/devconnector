const mongoose = require('mongoose');

const connectDB = async () => {
  console.log(`In DB, MongoURI is: ${process.env.MONGO_URI}`);
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });

    console.log('MongoDB connected...');
  } catch (err) {
    console.error(err.message);
    // exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
