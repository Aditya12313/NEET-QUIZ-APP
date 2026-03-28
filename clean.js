import 'dotenv/config';
import mongoose from 'mongoose';
import Question from './server/models/Question.js';

async function clean() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';
    await mongoose.connect(uri);
    const res = await Question.deleteMany({ source: 'external' });
    console.log(`Deleted ${res.deletedCount} old mock questions.`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}
clean();
