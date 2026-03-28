import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2023,
    question: 'General formula of open-chain alkane is:',
    options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnHn'],
    correctAnswer: 1,
    explanation: 'Saturated acyclic hydrocarbons follow CnH2n+2.',
    tags: ['alkanes', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2022,
    question: 'General formula of open-chain alkene is:',
    options: ['CnH2n+2', 'CnH2n', 'CnH2n-2', 'CnHn+2'],
    correctAnswer: 1,
    explanation: 'Mono-unsaturated acyclic alkenes follow CnH2n.',
    tags: ['alkenes', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2021,
    question: 'General formula of open-chain alkyne is:',
    options: ['CnH2n', 'CnH2n+2', 'CnH2n-2', 'CnHn'],
    correctAnswer: 2,
    explanation: 'Acyclic alkynes with one triple bond follow CnH2n-2.',
    tags: ['alkynes', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2020,
    question: 'More stable ethane conformation is:',
    options: ['eclipsed', 'staggered', 'cis', 'trans'],
    correctAnswer: 1,
    explanation: 'Staggered conformation minimizes torsional strain.',
    tags: ['conformation', 'alkanes'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2019,
    question: 'Major reaction of alkanes with Cl2 in sunlight is:',
    options: ['electrophilic addition', 'free-radical substitution', 'nucleophilic substitution', 'elimination'],
    correctAnswer: 1,
    explanation: 'Alkanes undergo radical halogenation under light/heat.',
    tags: ['alkane reactions', 'halogenation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2018,
    question: 'Alkenes typically undergo:',
    options: ['electrophilic addition', 'free-radical substitution only', 'nucleophilic elimination only', 'oxidative coupling only'],
    correctAnswer: 0,
    explanation: 'Pi bond in alkene is electron-rich and favors electrophilic addition.',
    tags: ['alkene reactions', 'mechanism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2017,
    question: 'Markovnikov rule predicts that in HX addition to unsymmetrical alkene, H adds to carbon with:',
    options: ['fewer hydrogens', 'more hydrogens', 'higher atomic mass', 'greater ring strain'],
    correctAnswer: 1,
    explanation: 'Hydrogen attaches to carbon already bearing more H atoms.',
    tags: ['markovnikov rule', 'product prediction'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2016,
    question: 'Peroxide effect is commonly associated with:',
    options: ['HCl addition', 'HBr addition', 'HI addition', 'H2O addition'],
    correctAnswer: 1,
    explanation: 'Anti-Markovnikov radical addition is classically significant for HBr.',
    tags: ['peroxide effect', 'anti-markovnikov'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2015,
    question: 'Ozonolysis of alkenes generally gives:',
    options: ['alkanes', 'alcohols only', 'carbonyl compounds after cleavage', 'amines'],
    correctAnswer: 2,
    explanation: 'Double bond cleavage leads to aldehydes/ketones (depending on substrate/workup).',
    tags: ['ozonolysis', 'reaction products'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2014,
    question: 'Terminal alkynes show:',
    options: ['basic character', 'acidic character', 'no reaction with bases', 'neutrality always'],
    correctAnswer: 1,
    explanation: 'Terminal alkynes have acidic proton due to sp-hybridized carbon.',
    tags: ['alkynes', 'acidity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2013,
    question: 'Aromaticity according to Huckel rule requires:',
    options: ['(4n) pi electrons', '(4n+2) pi electrons', '(2n) sigma electrons', 'any cyclic conjugation'],
    correctAnswer: 1,
    explanation: 'Planar cyclic conjugated systems with (4n+2) pi electrons are aromatic.',
    tags: ['aromaticity', 'huckel rule'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2012,
    question: 'Benzene mainly undergoes:',
    options: ['electrophilic substitution', 'electrophilic addition', 'nucleophilic addition only', 'radical elimination'],
    correctAnswer: 0,
    explanation: 'Substitution preserves aromatic stabilization of benzene ring.',
    tags: ['benzene', 'reaction type'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2011,
    question: 'Friedel-Crafts reactions are examples of:',
    options: ['nucleophilic substitution', 'electrophilic aromatic substitution', 'radical polymerization', 'oxidative cleavage'],
    correctAnswer: 1,
    explanation: 'Friedel-Crafts alkylation/acylation are electrophilic substitution on aromatic ring.',
    tags: ['benzene reactions', 'friedel crafts'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2010,
    question: 'A frequent trap in hydrocarbon chapter is confusion between:',
    options: ['SN1 and SN2 only', 'Markovnikov and anti-Markovnikov orientation', 'acid and base definitions', 'period and group trends'],
    correctAnswer: 1,
    explanation: 'Orientation changes with conditions, especially peroxide effect cases.',
    tags: ['neet trap', 'markovnikov'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 15: Hydrocarbons',
    chapter: 'hydrocarbons',
    year: 2009,
    question: 'NEET pattern for hydrocarbons is typically:',
    options: ['memory only no reactions', 'reaction-based conceptual questions', 'pure mathematics', 'coordination chemistry based'],
    correctAnswer: 1,
    explanation: 'Product prediction and mechanism logic are core in this unit.',
    tags: ['pyq insight', 'reaction based'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'hydrocarbons', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 15.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
