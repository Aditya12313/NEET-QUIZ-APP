import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2023,
    question: 'Avogadro number is:',
    options: ['6.022 x 10^20', '6.022 x 10^23', '3.011 x 10^23', '6.022 x 10^26'],
    correctAnswer: 1,
    explanation: '1 mole contains 6.022 x 10^23 particles.',
    tags: ['mole concept', 'avogadro number'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2022,
    question: 'Moles in 18 g of water (molar mass 18 g/mol) are:',
    options: ['0.5', '1', '2', '18'],
    correctAnswer: 1,
    explanation: 'n = m/M = 18/18 = 1 mol.',
    tags: ['mole concept', 'n=m/M'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2021,
    question: 'Law of conservation of mass states:',
    options: ['mass can be created', 'mass can be destroyed', 'mass is neither created nor destroyed', 'mass depends on pressure'],
    correctAnswer: 2,
    explanation: 'In ordinary chemical reactions, total mass remains constant.',
    tags: ['law based', 'conservation of mass'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2020,
    question: 'Mass percent of oxygen in H2O is approximately:',
    options: ['11.1%', '88.9%', '16%', '66.7%'],
    correctAnswer: 1,
    explanation: 'Mass percent O = 16/18 x 100 = 88.9%.',
    tags: ['percentage composition', 'numerical'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2019,
    question: 'Empirical formula of glucose (C6H12O6) is:',
    options: ['CH2O', 'C2H4O2', 'C3H6O3', 'CHO'],
    correctAnswer: 0,
    explanation: 'Divide subscripts by 6: C1H2O1 gives CH2O.',
    tags: ['empirical formula', 'formula simplification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2018,
    question: 'If empirical formula is CH2O and molecular mass is 180, molecular formula is:',
    options: ['CH2O', 'C2H4O2', 'C6H12O6', 'C3H6O3'],
    correctAnswer: 2,
    explanation: 'Empirical formula mass = 30, n = 180/30 = 6, so molecular formula = (CH2O)6 = C6H12O6.',
    tags: ['molecular formula', 'empirical formula'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2017,
    question: 'In balanced equation 2H2 + O2 -> 2H2O, mole ratio H2:O2 is:',
    options: ['1:1', '2:1', '1:2', '2:2'],
    correctAnswer: 1,
    explanation: 'Coefficients directly give mole ratio as 2:1.',
    tags: ['stoichiometry', 'balanced equation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2016,
    question: 'What is molar mass of CO2?',
    options: ['28 g/mol', '44 g/mol', '32 g/mol', '12 g/mol'],
    correctAnswer: 1,
    explanation: 'Molar mass = 12 + 2x16 = 44 g/mol.',
    tags: ['molar mass', 'basic calculation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2015,
    question: 'The limiting reagent in a reaction is the reactant that:',
    options: ['is always in excess', 'gets consumed first', 'has highest molar mass', 'has lowest density'],
    correctAnswer: 1,
    explanation: 'Product formation stops when limiting reagent is completely consumed.',
    tags: ['limiting reagent', 'stoichiometry'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2014,
    question: 'Number of molecules in 0.5 mol of O2 is:',
    options: ['3.011 x 10^23', '6.022 x 10^23', '1.204 x 10^24', '3.011 x 10^22'],
    correctAnswer: 0,
    explanation: 'Molecules = n x NA = 0.5 x 6.022 x 10^23 = 3.011 x 10^23.',
    tags: ['particle calculation', 'mole concept'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2013,
    question: 'Dalton atomic theory (classical) considered atoms as:',
    options: ['divisible into quarks', 'indivisible particles', 'waves', 'ions only'],
    correctAnswer: 1,
    explanation: 'Classical Dalton model treated atoms as indivisible.',
    tags: ['dalton theory', 'theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2012,
    question: 'An element is a substance composed of:',
    options: ['different atoms chemically combined', 'same type of atoms', 'molecules only', 'ions only'],
    correctAnswer: 1,
    explanation: 'Element contains only one kind of atom.',
    tags: ['definitions', 'element'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2011,
    question: 'A compound is formed when:',
    options: ['same atoms mix physically', 'different atoms combine chemically in fixed ratio', 'atoms ionize in plasma', 'molecules evaporate'],
    correctAnswer: 1,
    explanation: 'Compound has chemically combined different elements in definite ratio.',
    tags: ['definitions', 'compound'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2010,
    question: 'Most common NEET error in Unit 1 numericals is:',
    options: ['using periodic table', 'wrong gram-mole conversion', 'writing equations', 'using Avogadro number'],
    correctAnswer: 1,
    explanation: 'Unit conversion mistakes between mass and moles are very frequent.',
    tags: ['neet trap', 'unit conversion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 1: Some Basic Concepts in Chemistry',
    chapter: 'basic-concepts',
    year: 2009,
    question: 'Law of multiple proportions applies when two elements form:',
    options: ['only one compound', 'more than one compound', 'only ionic compounds', 'only gases'],
    correctAnswer: 1,
    explanation: 'Mass ratios in different compounds of same two elements are small whole-number multiples.',
    tags: ['law based', 'multiple proportions'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'basic-concepts', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 1.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
