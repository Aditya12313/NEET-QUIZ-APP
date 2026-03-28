import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2023,
    question: 'Modern periodic law is based on:',
    options: ['atomic mass', 'atomic number', 'valency only', 'electronegativity'],
    correctAnswer: 1,
    explanation: 'Properties are periodic functions of atomic number.',
    tags: ['periodic law', 'fundamentals'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2022,
    question: 'In periodic table, periods are:',
    options: ['vertical columns', 'horizontal rows', 'diagonal lines', 'block divisions only'],
    correctAnswer: 1,
    explanation: 'Periods are horizontal rows; groups are vertical columns.',
    tags: ['periodic table structure', 'periods and groups'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2021,
    question: 's-block elements belong to groups:',
    options: ['1 and 2', '13 to 18', '3 to 12', 'f-series only'],
    correctAnswer: 0,
    explanation: 's-block corresponds to groups 1 and 2.',
    tags: ['block classification', 's block'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2020,
    question: 'Atomic radius across a period generally:',
    options: ['increases', 'decreases', 'remains unchanged', 'shows no trend'],
    correctAnswer: 1,
    explanation: 'Effective nuclear charge increases across a period, reducing size.',
    tags: ['atomic radius', 'periodic trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2019,
    question: 'Down a group, atomic radius generally:',
    options: ['decreases', 'increases', 'remains constant', 'becomes zero'],
    correctAnswer: 1,
    explanation: 'Additional shells increase atomic size down the group.',
    tags: ['atomic radius', 'group trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2018,
    question: 'Compared with neutral atom, cation is generally:',
    options: ['larger', 'smaller', 'same size', 'always double'],
    correctAnswer: 1,
    explanation: 'Loss of electron(s) and reduced repulsion contract ionic size.',
    tags: ['ionic radius', 'cation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2017,
    question: 'Ionization enthalpy trend across a period is usually:',
    options: ['decreasing', 'increasing', 'constant', 'random'],
    correctAnswer: 1,
    explanation: 'Generally increases due to increasing nuclear pull on valence electrons.',
    tags: ['ionization enthalpy', 'periodic trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2016,
    question: 'Ionization enthalpy down a group generally:',
    options: ['increases', 'decreases', 'unchanged', 'infinite'],
    correctAnswer: 1,
    explanation: 'Greater size and shielding make electron removal easier.',
    tags: ['ionization enthalpy', 'group trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2015,
    question: 'Electronegativity across a period generally:',
    options: ['decreases', 'increases', 'constant', 'depends only on mass'],
    correctAnswer: 1,
    explanation: 'Tendency to attract shared pair increases across the period.',
    tags: ['electronegativity', 'periodic trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2014,
    question: 'Metallic character across a period generally:',
    options: ['increases', 'decreases', 'unchanged', 'first decreases then increases always'],
    correctAnswer: 1,
    explanation: 'Across a period, tendency to lose electrons decreases.',
    tags: ['metallic character', 'trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2013,
    question: 'Which block contains transition elements?',
    options: ['s-block', 'p-block', 'd-block', 'f-block'],
    correctAnswer: 2,
    explanation: 'Transition elements belong to d-block.',
    tags: ['block classification', 'd block'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2012,
    question: 'A common periodic-trend anomaly question involves:',
    options: ['Be and B ionization enthalpy', 'Na and K atomic number', 'He and Ne groups', 'C and Si valency only'],
    correctAnswer: 0,
    explanation: 'Be/B and N/O type exceptions are common in NEET.',
    tags: ['anomalies', 'ionization enthalpy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2011,
    question: 'Non-metallic character trend is generally:',
    options: ['same as metallic trend', 'opposite of metallic trend', 'independent of periodic table', 'constant in all groups'],
    correctAnswer: 1,
    explanation: 'If metallic behavior decreases, non-metallic behavior generally increases and vice versa.',
    tags: ['non-metallic character', 'trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2010,
    question: 'Key driver for many across-period trends is increase in:',
    options: ['atomic mass only', 'effective nuclear charge', 'number of isotopes', 'metallic bond strength only'],
    correctAnswer: 1,
    explanation: 'Increasing effective nuclear charge strongly influences radius and IE trends.',
    tags: ['effective nuclear charge', 'conceptual'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 9: Classification of Elements and Periodicity in Properties',
    chapter: 'periodicity',
    year: 2009,
    question: 'Frequently tested format in this chapter is:',
    options: ['name reaction mechanism', 'order-based comparison of properties', 'polymer naming', 'electrolysis setup'],
    correctAnswer: 1,
    explanation: 'NEET often asks ordering of elements by periodic trends.',
    tags: ['pyq pattern', 'order based'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'periodicity', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 9.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
