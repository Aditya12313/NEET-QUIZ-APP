import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2023,
    question: 'Rate of reaction is defined as change in concentration per:',
    options: ['unit temperature', 'unit time', 'unit pressure', 'unit volume only'],
    correctAnswer: 1,
    explanation: 'Rate is concentration change with respect to time.',
    tags: ['rate of reaction', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2022,
    question: 'If rate law is Rate = k[A]^2[B], overall order is:',
    options: ['1', '2', '3', '4'],
    correctAnswer: 2,
    explanation: 'Overall order = 2 + 1 = 3.',
    tags: ['rate law', 'order'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2021,
    question: 'Molecularity is always:',
    options: ['fractional', 'negative', 'whole number', 'zero only'],
    correctAnswer: 2,
    explanation: 'Molecularity counts molecules in an elementary step, so it is an integer.',
    tags: ['molecularity', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2020,
    question: 'Integrated law for zero-order reaction is:',
    options: ['ln[A] = ln[A]0 - kt', '[A] = [A]0 - kt', '1/[A] = 1/[A]0 + kt', '[A] = [A]0 e^-kt'],
    correctAnswer: 1,
    explanation: 'For zero-order reaction, concentration decreases linearly with time.',
    tags: ['zero order', 'integrated rate law'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2019,
    question: 'Half-life for first-order reaction is:',
    options: ['[A]0/(2k)', '0.693/k', '2.303/k', 'k/0.693'],
    correctAnswer: 1,
    explanation: 'First-order half-life is independent of initial concentration.',
    tags: ['first order', 'half life'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2018,
    question: 'Expression for first-order rate constant is:',
    options: ['k = (2.303/t)log([A]0/[A])', 'k = [A]0/[A]t', 'k = (1/t)([A]-[A]0)', 'k = t/2.303 log([A]/[A]0)'],
    correctAnswer: 0,
    explanation: 'Standard first-order integrated form gives this expression.',
    tags: ['first order', 'rate constant'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2017,
    question: 'Arrhenius equation is:',
    options: ['k = A e^(-Ea/RT)', 'k = A e^(Ea/RT)', 'k = Ea/RT', 'k = A + Ea/RT'],
    correctAnswer: 0,
    explanation: 'Rate constant increases exponentially with temperature and decreases with higher activation energy.',
    tags: ['arrhenius equation', 'activation energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2016,
    question: 'Catalyst increases reaction rate primarily by:',
    options: ['increasing Delta G', 'lowering activation energy', 'changing equilibrium constant always', 'raising reactant concentration'],
    correctAnswer: 1,
    explanation: 'Catalyst provides alternative path with lower activation energy.',
    tags: ['catalyst', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2015,
    question: 'A key distinction is that order of reaction is:',
    options: ['always whole number', 'always equal to molecularity', 'experimentally determined', 'always zero for complex reactions'],
    correctAnswer: 2,
    explanation: 'Order is obtained from experimental rate data.',
    tags: ['order vs molecularity', 'conceptual'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2014,
    question: 'For first-order reaction, plot of ln[A] versus time is:',
    options: ['horizontal line', 'straight line with negative slope', 'parabola', 'straight line with positive slope'],
    correctAnswer: 1,
    explanation: 'From ln[A] = ln[A]0 - kt, slope is -k.',
    tags: ['graph based', 'first order'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2013,
    question: 'In zero-order reaction, half-life depends on:',
    options: ['only k', 'initial concentration [A]0', 'temperature only', 'pressure only'],
    correctAnswer: 1,
    explanation: 't1/2 = [A]0/(2k), so it depends on initial concentration.',
    tags: ['zero order', 'half life'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2012,
    question: 'Increase in temperature usually causes reaction rate to:',
    options: ['decrease', 'remain same', 'increase', 'become zero'],
    correctAnswer: 2,
    explanation: 'Higher temperature increases fraction of effective collisions.',
    tags: ['temperature effect', 'collision theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2011,
    question: 'A common error in kinetics numericals is:',
    options: ['using logarithm', 'mixing zero and first-order formulas', 'using concentration units', 'drawing graphs'],
    correctAnswer: 1,
    explanation: 'Each order has distinct integrated law and half-life expression.',
    tags: ['neet trap', 'formula mix-up'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2010,
    question: 'For first-order reaction, half-life with changing [A]0 is:',
    options: ['increases', 'decreases', 'remains constant', 'becomes zero'],
    correctAnswer: 2,
    explanation: 't1/2 = 0.693/k does not include [A]0.',
    tags: ['first order', 'half life'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 8: Chemical Kinetics',
    chapter: 'chemical-kinetics-chem',
    year: 2009,
    question: 'Collision theory says a reaction occurs when molecules collide with:',
    options: ['any speed', 'sufficient energy and proper orientation', 'low temperature only', 'high pressure only'],
    correctAnswer: 1,
    explanation: 'Only effective collisions lead to product formation.',
    tags: ['collision theory', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'chemical-kinetics-chem', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 8.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
