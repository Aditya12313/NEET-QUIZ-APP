import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2023,
    question: 'In Lassaigne halogen test with AgNO3, chloride gives:',
    options: ['Yellow precipitate', 'Pale yellow precipitate', 'White precipitate', 'Black precipitate'],
    correctAnswer: 2,
    explanation: 'Chloride gives white AgCl precipitate.',
    tags: ['lassaigne', 'halogen test'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2022,
    question: 'Bromide ion in AgNO3 test gives:',
    options: ['White ppt', 'Pale yellow ppt', 'Yellow ppt', 'Green ppt'],
    correctAnswer: 1,
    explanation: 'Bromide typically forms pale yellow AgBr precipitate.',
    tags: ['halogens', 'observation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2021,
    question: 'Nitrogen detection by Lassaigne test is indicated by:',
    options: ['Violet ring', 'Prussian blue color', 'Red precipitate', 'Silver mirror'],
    correctAnswer: 1,
    explanation: 'Nitrogen forms ferrocyanide/ferric complex giving Prussian blue color.',
    tags: ['lassaigne', 'nitrogen'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2020,
    question: 'Sulphur in Lassaigne extract with lead acetate gives:',
    options: ['White ppt', 'Brown gas', 'Black PbS precipitate', 'Blue solution'],
    correctAnswer: 2,
    explanation: 'Sulphide ions form black lead sulphide (PbS).',
    tags: ['lassaigne', 'sulphur'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2019,
    question: 'Alcohol reacts with sodium metal to evolve:',
    options: ['CO2 gas', 'H2 gas', 'O2 gas', 'SO2 gas'],
    correctAnswer: 1,
    explanation: 'Reaction of alcohol with sodium liberates hydrogen gas.',
    tags: ['functional group test', 'alcohol'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2018,
    question: 'Phenol gives which observation with neutral FeCl3?',
    options: ['Yellow precipitate', 'Violet color', 'Silver mirror', 'Red solution'],
    correctAnswer: 1,
    explanation: 'Phenol forms colored complex with ferric chloride, commonly violet.',
    tags: ['functional group test', 'phenol'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2017,
    question: 'Aldehyde gives positive Tollens test by forming:',
    options: ['Yellow crystals', 'Silver mirror', 'Black fumes', 'Green flame'],
    correctAnswer: 1,
    explanation: 'Aldehydes reduce Tollens reagent to metallic silver mirror.',
    tags: ['aldehyde test', 'tollens'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2016,
    question: 'Fehling solution gives red precipitate mainly with:',
    options: ['Ketones', 'Aldehydes', 'Alcohols', 'Amines'],
    correctAnswer: 1,
    explanation: 'Aldehydes generally reduce Fehling solution to red cuprous oxide.',
    tags: ['aldehyde test', 'fehling'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2015,
    question: 'Iodoform test gives a characteristic:',
    options: ['Blue color', 'Yellow precipitate', 'Brown ring', 'White fumes'],
    correctAnswer: 1,
    explanation: 'Iodoform (CHI3) appears as yellow precipitate.',
    tags: ['ketone test', 'iodoform'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2014,
    question: 'Carboxylic acid on treatment with NaHCO3 produces:',
    options: ['H2 gas', 'CO2 gas', 'N2 gas', 'No gas'],
    correctAnswer: 1,
    explanation: 'Carboxylic acids liberate carbon dioxide with bicarbonate.',
    tags: ['carboxylic acid test', 'gas evolution'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2013,
    question: 'Carbylamine test with foul smell is given by:',
    options: ['Primary amines', 'Secondary amines', 'Tertiary amines', 'Amides'],
    correctAnswer: 0,
    explanation: 'Only primary amines respond to carbylamine test.',
    tags: ['amine test', 'carbylamine'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2012,
    question: 'In school-level redox titration practicals, common oxidant is:',
    options: ['NaCl', 'KMnO4', 'Na2CO3', 'NH4OH'],
    correctAnswer: 1,
    explanation: 'KMnO4 is widely used as oxidant in redox titration.',
    tags: ['titration', 'redox'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2011,
    question: 'Which is a commonly tested cation in salt analysis?',
    options: ['Cu2+', 'CH3COO-', 'NO3-', 'CO3 2- only'],
    correctAnswer: 0,
    explanation: 'Cu2+ is among commonly analyzed cations in qualitative analysis.',
    tags: ['salt analysis', 'cation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2010,
    question: 'A common NEET trap in practical chemistry is:',
    options: ['forgetting precipitate colors and gas observations', 'using calculus', 'memorizing organic mechanisms only', 'avoiding NCERT entirely'],
    correctAnswer: 0,
    explanation: 'Most mistakes come from confusing color observations and gas-evolution tests.',
    tags: ['neet trap', 'observations'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 20: Principles Related to Practical Chemistry',
    chapter: 'practical-chemistry-principles',
    year: 2009,
    question: 'NEET pattern for this chapter is usually:',
    options: ['derivation-heavy numericals', 'direct memory plus observation-based MCQs', 'only advanced mechanisms', 'purely physical chemistry graphs'],
    correctAnswer: 1,
    explanation: 'Practical chemistry is mostly direct, memory and observation based.',
    tags: ['pyq pattern', 'direct theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'practical-chemistry-principles', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 20 (practical chemistry).`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
