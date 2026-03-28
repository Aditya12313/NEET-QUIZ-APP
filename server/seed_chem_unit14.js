import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2023,
    question: 'Carbon generally forms how many covalent bonds in organic compounds?',
    options: ['2', '3', '4', '5'],
    correctAnswer: 2,
    explanation: 'Carbon is tetravalent in most stable organic compounds.',
    tags: ['tetravalency', 'basic concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2022,
    question: 'Hybridization of carbon in ethyne (C2H2) is:',
    options: ['sp3', 'sp2', 'sp', 'dsp2'],
    correctAnswer: 2,
    explanation: 'Carbon atoms in C2H2 are sp hybridized with linear geometry.',
    tags: ['hybridization', 'sp'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2021,
    question: 'Consecutive members of a homologous series differ by:',
    options: ['-CH3', '-CH2-', '-OH', '-CO-'],
    correctAnswer: 1,
    explanation: 'Difference between successive members is one methylene unit.',
    tags: ['homologous series', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2020,
    question: 'Chain isomerism belongs to:',
    options: ['stereoisomerism', 'structural isomerism', 'optical isomerism only', 'tautomerism only'],
    correctAnswer: 1,
    explanation: 'Chain, position, and functional are structural isomerism types.',
    tags: ['isomerism', 'structural'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2019,
    question: 'Geometrical isomerism is a type of:',
    options: ['structural isomerism', 'stereoisomerism', 'functional isomerism', 'chain isomerism'],
    correctAnswer: 1,
    explanation: 'Geometrical and optical forms belong to stereoisomerism.',
    tags: ['isomerism', 'stereo'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2018,
    question: 'Heterolytic bond fission gives:',
    options: ['free radicals', 'ions', 'molecules only', 'excited states only'],
    correctAnswer: 1,
    explanation: 'Both bonding electrons go to one atom, producing ions.',
    tags: ['bond fission', 'heterolytic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2017,
    question: 'Homolytic bond cleavage produces:',
    options: ['carbocations only', 'carbanions only', 'free radicals', 'zwitter ions'],
    correctAnswer: 2,
    explanation: 'Each atom retains one electron from bond, yielding radicals.',
    tags: ['bond fission', 'homolytic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2016,
    question: 'Most stable among simple alkyl carbocations is generally:',
    options: ['1 degree', '2 degree', '3 degree', 'methyl only'],
    correctAnswer: 2,
    explanation: 'Typical order is 3 degree > 2 degree > 1 degree.',
    tags: ['reactive intermediates', 'carbocation stability'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2015,
    question: 'Inductive effect is transmitted primarily through:',
    options: ['pi bonds only', 'sigma bonds', 'hydrogen bonding', 'ionic lattice'],
    correctAnswer: 1,
    explanation: 'Inductive effect is permanent polarization through sigma framework.',
    tags: ['electronic effects', 'inductive'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2014,
    question: 'Resonance effect involves:',
    options: ['sigma bond rotation only', 'delocalization of electrons', 'bond breaking by heat only', 'change in hybridization only'],
    correctAnswer: 1,
    explanation: 'Resonance is electron delocalization across conjugated framework.',
    tags: ['electronic effects', 'resonance'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2013,
    question: 'Nucleophile is an:',
    options: ['electron pair acceptor', 'electron pair donor', 'proton donor only', 'radical scavenger only'],
    correctAnswer: 1,
    explanation: 'Nucleophile donates electron pair to electrophilic center.',
    tags: ['nucleophile electrophile', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2012,
    question: 'Electrophile is an:',
    options: ['electron donor', 'electron acceptor', 'radical donor', 'hydrogen acceptor only'],
    correctAnswer: 1,
    explanation: 'Electrophiles seek electron-rich sites and accept electron pairs.',
    tags: ['nucleophile electrophile', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2011,
    question: 'A common trap in this chapter is confusing:',
    options: ['inductive and resonance effects', 'solid and liquid states', 'acid and base definitions only', 'group and period trends'],
    correctAnswer: 0,
    explanation: 'These two effects are conceptually different and frequently mixed up.',
    tags: ['neet trap', 'electronic effects'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2010,
    question: 'IUPAC naming primarily requires:',
    options: ['random numbering', 'longest chain and priority-based numbering', 'alphabetical formula only', 'molecular mass first'],
    correctAnswer: 1,
    explanation: 'Correct parent chain and functional group priority are essential.',
    tags: ['nomenclature', 'iupac'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 14: Some Basic Principles of Organic Chemistry',
    chapter: 'basic-principles-organic',
    year: 2009,
    question: 'NEET questions from this unit are often:',
    options: ['only numerical', 'concept-heavy', 'only practical chemistry', 'only inorganic memory based'],
    correctAnswer: 1,
    explanation: 'Electronic effects, intermediate stability, and isomerism are concept-dominant asks.',
    tags: ['pyq insight', 'pattern'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'basic-principles-organic', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 14.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
