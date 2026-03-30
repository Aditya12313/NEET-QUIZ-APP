import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2023,
    question: 'Tap root system is typically found in:',
    options: ['Monocots', 'Dicots', 'Pteridophytes only', 'Fungi'],
    correctAnswer: 1,
    explanation: 'Tap root system is characteristic of dicot plants.',
    tags: ['root', 'dicot'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2022,
    question: 'Parallel venation is generally seen in:',
    options: ['Dicots', 'Monocots', 'Gymnosperms only', 'Algae'],
    correctAnswer: 1,
    explanation: 'Parallel venation is a common monocot feature.',
    tags: ['leaf', 'venation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2021,
    question: 'Racemose inflorescence is identified by:',
    options: ['Definite growth of main axis', 'Indefinite growth of main axis', 'Only unisexual flowers', 'Only axile placentation'],
    correctAnswer: 1,
    explanation: 'In racemose inflorescence, main axis keeps growing.',
    tags: ['inflorescence', 'racemose'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2020,
    question: 'Which tissue provides flexibility in plants?',
    options: ['Parenchyma', 'Collenchyma', 'Sclerenchyma', 'Xylem'],
    correctAnswer: 1,
    explanation: 'Collenchyma provides mechanical support with flexibility.',
    tags: ['tissue', 'collenchyma'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2019,
    question: 'Xylem mainly transports:',
    options: ['Food', 'Water and minerals', 'Hormones only', 'Amino acids only'],
    correctAnswer: 1,
    explanation: 'Xylem is responsible for conduction of water and minerals.',
    tags: ['xylem', 'transport'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2018,
    question: 'Phloem function is:',
    options: ['Water transport', 'Food transport', 'Reproduction', 'Photosynthesis'],
    correctAnswer: 1,
    explanation: 'Phloem translocates food materials (photosynthates).',
    tags: ['phloem', 'transport'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2017,
    question: 'Fabaceae is associated with:',
    options: ['Parallel venation only', 'Nitrogen-fixing root nodules', 'Pneumatophores', 'No floral formula'],
    correctAnswer: 1,
    explanation: 'Fabaceae plants commonly have symbiotic nitrogen-fixing root nodules.',
    tags: ['plant family', 'fabaceae'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2016,
    question: 'Potato belongs to which family?',
    options: ['Fabaceae', 'Liliaceae', 'Solanaceae', 'Poaceae'],
    correctAnswer: 2,
    explanation: 'Potato is a member of Solanaceae.',
    tags: ['plant family', 'solanaceae'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2015,
    question: 'Liliaceae is generally characterized as:',
    options: ['Dicot family with tap root', 'Monocot family with parallel venation', 'Non-flowering family', 'Gymnosperm family'],
    correctAnswer: 1,
    explanation: 'Liliaceae is a monocot family with typical parallel venation.',
    tags: ['plant family', 'liliaceae'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2014,
    question: 'A flower with radial symmetry is called:',
    options: ['Zygomorphic', 'Actinomorphic', 'Unisexual', 'Hypogynous only'],
    correctAnswer: 1,
    explanation: 'Actinomorphic flowers can be divided into two equal halves in multiple planes.',
    tags: ['flower', 'symmetry'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2013,
    question: 'Fruit develops from:',
    options: ['Ovule', 'Ovary', 'Anther', 'Sepal'],
    correctAnswer: 1,
    explanation: 'After fertilization, ovary develops into fruit.',
    tags: ['flower', 'fruit'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2012,
    question: 'Seed develops from:',
    options: ['Ovary', 'Ovule', 'Petal', 'Stamen'],
    correctAnswer: 1,
    explanation: 'Ovule develops into seed after fertilization.',
    tags: ['flower', 'seed'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2011,
    question: 'Frog has which type of heart?',
    options: ['Two-chambered', 'Three-chambered', 'Four-chambered', 'Single-chambered'],
    correctAnswer: 1,
    explanation: 'Frog heart is three-chambered.',
    tags: ['frog', 'circulation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2010,
    question: 'Respiration in frog occurs through:',
    options: ['Only lungs', 'Only skin', 'Skin and lungs', 'Gills only'],
    correctAnswer: 2,
    explanation: 'Frog can respire through skin and lungs.',
    tags: ['frog', 'respiration'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 2: Structural Organisation in Plants and Animals',
    chapter: 'structural-organisation-animals-plants',
    year: 2009,
    question: 'Increase in girth of stem in many dicots is due to:',
    options: ['Secondary growth', 'Primary growth only', 'Apical dominance only', 'Respiration only'],
    correctAnswer: 0,
    explanation: 'Secondary growth increases girth due to activity of lateral meristems.',
    tags: ['secondary growth', 'plant anatomy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'structural-organisation-animals-plants', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 2.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
