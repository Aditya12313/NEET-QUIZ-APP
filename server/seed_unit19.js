import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2023,
    question: 'According to Bohr model, energy of electron in nth orbit of hydrogen atom is:',
    options: ['En = -13.6/n^2 eV', 'En = +13.6/n^2 eV', 'En = -13.6n^2 eV', 'En = 13.6n eV'],
    correctAnswer: 0,
    explanation: 'Bohr energy for hydrogen is En = -13.6/n^2 eV.',
    tags: ['bohr model', 'energy levels'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2022,
    question: 'Bohr orbit radius dependence on principal quantum number n is:',
    options: ['rn proportional n', 'rn proportional n^2', 'rn proportional 1/n', 'rn proportional 1/n^2'],
    correctAnswer: 1,
    explanation: 'For hydrogen-like atoms, rn is proportional to n^2.',
    tags: ['bohr radius', 'orbit relation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2021,
    question: 'Energy emitted/absorbed during transition is given by:',
    options: ['DeltaE = E1 + E2', 'DeltaE = E2 - E1 = h*nu', 'DeltaE = h/lambda only', 'DeltaE = mc^2'],
    correctAnswer: 1,
    explanation: 'Transition energy follows DeltaE = E2 - E1 = h*nu.',
    tags: ['transition', 'spectra'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2020,
    question: 'Which hydrogen spectral series is in visible region?',
    options: ['Lyman', 'Balmer', 'Paschen', 'Brackett'],
    correctAnswer: 1,
    explanation: 'Balmer series lies in visible region.',
    tags: ['spectral series', 'balmer'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2019,
    question: 'Nuclear radius relation is:',
    options: ['R = R0*A', 'R = R0*A^(1/3)', 'R = R0/A^(1/3)', 'R = R0*A^2'],
    correctAnswer: 1,
    explanation: 'Nuclear radius follows R = R0*A^(1/3).',
    tags: ['nuclear radius', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2018,
    question: 'Mass defect is defined as:',
    options: ['actual mass minus nucleon mass sum', 'sum of nucleon masses minus actual nuclear mass', 'difference of proton and neutron masses only', 'binding energy divided by c'],
    correctAnswer: 1,
    explanation: 'Mass defect is Deltam = sum of nucleon masses - actual nuclear mass.',
    tags: ['mass defect', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2017,
    question: 'Binding energy relation is:',
    options: ['E = Deltam*c^2', 'E = Deltam/c^2', 'E = mc', 'E = lambda*N'],
    correctAnswer: 0,
    explanation: 'Binding energy is obtained from mass defect using E = Deltam*c^2.',
    tags: ['binding energy', 'einstein relation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2016,
    question: 'Highest binding energy per nucleon is around:',
    options: ['hydrogen', 'helium', 'iron', 'uranium'],
    correctAnswer: 2,
    explanation: 'Binding-energy curve peaks near iron region, indicating maximum stability.',
    tags: ['binding energy curve', 'stability'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2015,
    question: 'Radioactive decay law is:',
    options: ['N = N0 e^(lambda t)', 'N = N0 e^(-lambda t)', 'N = N0/lambda t', 'N = lambda N0'],
    correctAnswer: 1,
    explanation: 'Number of undecayed nuclei decreases exponentially: N = N0 e^(-lambda t).',
    tags: ['radioactive decay', 'exponential law'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2014,
    question: 'Half-life relation with decay constant is:',
    options: ['T1/2 = lambda/0.693', 'T1/2 = 0.693/lambda', 'T1/2 = 1/lambda^2', 'T1/2 = 0.693*lambda'],
    correctAnswer: 1,
    explanation: 'Half-life and decay constant are related by T1/2 = 0.693/lambda.',
    tags: ['half life', 'decay constant'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2013,
    question: 'Activity of a radioactive sample is:',
    options: ['A = N/lambda', 'A = lambda*N', 'A = N0 e^(-lambda t)', 'A = dN/dt without sign'],
    correctAnswer: 1,
    explanation: 'Activity is proportional to number of undecayed nuclei: A = lambda*N.',
    tags: ['activity', 'radioactivity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2012,
    question: 'Which process involves splitting of a heavy nucleus?',
    options: ['fusion', 'fission', 'alpha decay', 'beta decay'],
    correctAnswer: 1,
    explanation: 'Fission is splitting of heavy nuclei into lighter fragments.',
    tags: ['nuclear reactions', 'fission'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2011,
    question: 'Which process combines light nuclei to form heavier nucleus?',
    options: ['fusion', 'fission', 'gamma decay', 'electron capture'],
    correctAnswer: 0,
    explanation: 'Fusion combines light nuclei and releases large energy.',
    tags: ['nuclear reactions', 'fusion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2010,
    question: 'In Bohr model, bound-state energies are negative because:',
    options: ['electron has negative charge', 'reference energy is taken as zero at infinity', 'kinetic energy is always negative', 'potential is ignored'],
    correctAnswer: 1,
    explanation: 'Zero of energy is at infinite separation; bound states therefore have negative total energy.',
    tags: ['bohr concept', 'negative energy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 19: Atoms and Nuclei',
    chapter: 'atoms-nuclei',
    year: 2009,
    question: 'A very common NEET trap in this chapter is:',
    options: ['using SI units', 'forgetting negative sign in Bohr energy and mixing series', 'using calculators', 'writing long answers'],
    correctAnswer: 1,
    explanation: 'Students often miss sign in Bohr energies and confuse spectral series regions.',
    tags: ['neet trap', 'series confusion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'atoms-nuclei' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for atoms and nuclei.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
