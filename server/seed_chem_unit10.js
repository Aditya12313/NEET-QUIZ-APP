import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2023,
    question: 'p-Block elements belong to which groups?',
    options: ['1 to 2', '3 to 12', '13 to 18', 'f-series only'],
    correctAnswer: 2,
    explanation: 'Groups 13 to 18 constitute p-block.',
    tags: ['p-block basics', 'groups'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2022,
    question: 'General valence-shell configuration of p-block is:',
    options: ['ns1', 'ns2 np1-6', 'ns2', 'ns2 (n-1)d1-10'],
    correctAnswer: 1,
    explanation: 'Valence orbitals include ns and np electrons.',
    tags: ['electronic configuration', 'p-block'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2021,
    question: 'Across a period in p-block, non-metallic character generally:',
    options: ['decreases', 'increases', 'constant', 'becomes zero'],
    correctAnswer: 1,
    explanation: 'Across period, tendency to gain/share electrons as non-metals increases.',
    tags: ['trend', 'non-metallic character'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2020,
    question: 'Down a group in p-block, metallic character generally:',
    options: ['decreases', 'increases', 'unchanged', 'random'],
    correctAnswer: 1,
    explanation: 'Larger size and lower IE increase metallic behavior down a group.',
    tags: ['trend', 'metallic character'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2019,
    question: 'Inert pair effect refers to tendency of:',
    options: ['np electrons to stay non-bonding', 'ns2 electrons to stay non-bonding', 'all valence electrons to ionize', 'd-electrons to pair up'],
    correctAnswer: 1,
    explanation: 'In heavier p-block elements, ns2 pair resists bonding.',
    tags: ['inert pair effect', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2018,
    question: 'Inert pair effect generally stabilizes which states down group?',
    options: ['higher oxidation states', 'lower oxidation states', 'only zero oxidation state', 'no oxidation states'],
    correctAnswer: 1,
    explanation: 'Lower oxidation states become relatively more stable down group.',
    tags: ['oxidation states', 'inert pair effect'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2017,
    question: 'Which pair is a classic anomaly comparison in p-block?',
    options: ['B and Al', 'Si and Ge', 'Br and I', 'Kr and Xe'],
    correctAnswer: 0,
    explanation: 'First element boron shows distinct behavior from aluminium.',
    tags: ['anomalous behavior', 'group 13'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2016,
    question: 'Aluminium oxide is:',
    options: ['strongly acidic', 'strongly basic', 'amphoteric', 'neutral'],
    correctAnswer: 2,
    explanation: 'Al2O3 reacts with both acids and bases.',
    tags: ['group 13', 'amphoteric behavior'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2015,
    question: 'Maximum catenation is shown by:',
    options: ['Si', 'Ge', 'C', 'Sn'],
    correctAnswer: 2,
    explanation: 'Strong C-C bonding gives maximum catenation in carbon.',
    tags: ['group 14', 'catenation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2014,
    question: 'NH3 is generally:',
    options: ['strong acid', 'basic', 'neutral', 'oxidizing acid'],
    correctAnswer: 1,
    explanation: 'Ammonia behaves as a Lewis/Bronsted base.',
    tags: ['important compounds', 'nh3'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2013,
    question: 'Which is a strong acid among the following?',
    options: ['NH3', 'H2SO4', 'CH4', 'PH3'],
    correctAnswer: 1,
    explanation: 'Sulfuric acid is a strong mineral acid.',
    tags: ['important compounds', 'acids'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2012,
    question: 'Halogens are generally:',
    options: ['least reactive non-metals', 'highly reactive non-metals', 'noble gases', 'alkaline metals'],
    correctAnswer: 1,
    explanation: 'Halogens are highly reactive due to high electron affinity.',
    tags: ['group 17', 'reactivity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2011,
    question: 'Which noble gas is known to form compounds?',
    options: ['He', 'Ne', 'Ar', 'Xe'],
    correctAnswer: 3,
    explanation: 'Xenon forms stable compounds such as XeF2, XeF4, XeF6.',
    tags: ['group 18', 'noble gases'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2010,
    question: 'A common trap in this chapter is neglecting:',
    options: ['Le Chatelier principle', 'inert pair effect', 'hybridization rules only', 'electrolysis law'],
    correctAnswer: 1,
    explanation: 'Inert pair effect frequently controls oxidation-state stability questions.',
    tags: ['neet trap', 'inert pair effect'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 10: p-Block Elements',
    chapter: 'p-block-elements',
    year: 2009,
    question: 'NEET questions from p-block are often:',
    options: ['purely derivation based', 'direct NCERT line and memory based', 'only numerical', 'only graph based'],
    correctAnswer: 1,
    explanation: 'Direct factual recall is very common in this unit.',
    tags: ['pyq insight', 'ncert based'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'p-block-elements', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 10.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
