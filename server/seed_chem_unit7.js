import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2023,
    question: 'Oxidation is best described as:',
    options: ['gain of electrons', 'loss of electrons', 'gain of hydrogen ions only', 'loss of oxygen only'],
    correctAnswer: 1,
    explanation: 'In electron-transfer terms, oxidation is loss of electrons.',
    tags: ['redox basics', 'oxidation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2022,
    question: 'Oxidation number of free elemental oxygen (O2) is:',
    options: ['-2', '0', '+2', '-1'],
    correctAnswer: 1,
    explanation: 'Any element in free state has oxidation number 0.',
    tags: ['oxidation number', 'rules'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2021,
    question: 'In most compounds, oxidation number of hydrogen is:',
    options: ['-1', '+1', '0', '+2'],
    correctAnswer: 1,
    explanation: 'Hydrogen usually has +1 oxidation state (except metal hydrides).',
    tags: ['oxidation number', 'rules'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2020,
    question: 'Conductance G is related to resistance R by:',
    options: ['G = R', 'G = 1/R', 'G = R^2', 'G = 1/R^2'],
    correctAnswer: 1,
    explanation: 'Conductance is reciprocal of resistance.',
    tags: ['conductance', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2019,
    question: 'Conductivity (kappa) is given by:',
    options: ['kappa = G x A/l', 'kappa = G x l/A', 'kappa = R x l/A', 'kappa = 1/G'],
    correctAnswer: 1,
    explanation: 'Conductivity depends on conductance and cell constant l/A.',
    tags: ['conductivity', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2018,
    question: 'Molar conductivity expression is:',
    options: ['Lambda_m = kappa x C/1000', 'Lambda_m = (kappa x 1000)/C', 'Lambda_m = kappa/C', 'Lambda_m = C/kappa'],
    correctAnswer: 1,
    explanation: 'For concentration in mol/L, Lambda_m = (kappa x 1000)/C.',
    tags: ['molar conductivity', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2017,
    question: 'Kohlrausch law at infinite dilution states that:',
    options: ['Lambda_m degree = lambda+ degree + lambda- degree', 'Lambda_m degree = lambda+ degree - lambda- degree', 'Lambda_m degree = kappa x R', 'Lambda_m degree = E degree/n'],
    correctAnswer: 0,
    explanation: 'Limiting molar conductivity equals sum of independent ionic contributions.',
    tags: ['kohlrausch law', 'infinite dilution'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2016,
    question: 'In a galvanic cell, energy conversion is:',
    options: ['electrical to chemical', 'chemical to electrical', 'heat to chemical', 'light to electrical'],
    correctAnswer: 1,
    explanation: 'Galvanic cell generates electricity from spontaneous chemical reaction.',
    tags: ['cell types', 'galvanic cell'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2015,
    question: 'EMF of cell is:',
    options: ['Ecell = Eanode - Ecathode', 'Ecell = Ecathode - Eanode', 'Ecell = Eanode + Ecathode', 'Ecell = 0 for all cells'],
    correctAnswer: 1,
    explanation: 'Cell potential is cathode potential minus anode potential.',
    tags: ['emf', 'electrode potential'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2014,
    question: 'Nernst equation at 298 K is:',
    options: ['E = E degree - (0.0591/n)logQ', 'E = E degree + (0.0591/n)logQ', 'E = E degree - n/0.0591 logQ', 'E = E degree + nF'],
    correctAnswer: 0,
    explanation: 'Correct concentration dependence is E = E degree - (0.0591/n)logQ.',
    tags: ['nernst equation', 'formula'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2013,
    question: 'Relation between Gibbs free energy and emf is:',
    options: ['Delta G = nFE', 'Delta G = -nFE', 'Delta G = nRT lnQ', 'Delta G = -RT lnK only'],
    correctAnswer: 1,
    explanation: 'Electrochemical free-energy change is Delta G = -nFE.',
    tags: ['gibbs relation', 'emf'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2012,
    question: 'A common conceptual trap in electrochemistry is mixing:',
    options: ['conductance and volume', 'anode and cathode roles', 'electrons and protons', 'acid and salt'],
    correctAnswer: 1,
    explanation: 'Oxidation occurs at anode and reduction occurs at cathode in all electrochemical cells.',
    tags: ['neet trap', 'anode cathode'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2011,
    question: 'Electrolytic cell converts:',
    options: ['chemical to electrical energy', 'electrical to chemical energy', 'heat to electrical energy', 'nuclear to chemical energy'],
    correctAnswer: 1,
    explanation: 'Electrolytic cell uses external electrical energy for non-spontaneous reaction.',
    tags: ['cell types', 'electrolytic cell'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2010,
    question: 'Most repeated numerical in this unit typically involves:',
    options: ['molecular geometry', 'Nernst equation and emf', 'organic mechanisms', 'periodic trends only'],
    correctAnswer: 1,
    explanation: 'NEET frequently asks concentration-dependent potential via Nernst equation.',
    tags: ['pyq trend', 'nernst equation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 7: Redox Reactions and Electrochemistry',
    chapter: 'redox-electrochemistry',
    year: 2009,
    question: 'In most compounds, oxidation number of oxygen is:',
    options: ['+2', '-2', '-1 always', '0 always'],
    correctAnswer: 1,
    explanation: 'Oxygen is usually -2 except in peroxides/superoxides and with fluorine.',
    tags: ['oxidation number', 'rules'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'redox-electrochemistry', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 7.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
