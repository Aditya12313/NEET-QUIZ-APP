import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2023,
    question: 'For electromagnetic radiation, correct relation is:',
    options: ['c = lambda + nu', 'c = lambda x nu', 'c = nu/lambda', 'lambda = c x nu'],
    correctAnswer: 1,
    explanation: 'Speed of light equals product of wavelength and frequency.',
    tags: ['electromagnetic radiation', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2022,
    question: 'Planck equation for energy of a photon is:',
    options: ['E = mc^2', 'E = h x nu', 'E = h/nu', 'E = nu/h'],
    correctAnswer: 1,
    explanation: 'Energy is quantized in photons and equals h times frequency.',
    tags: ['planck theory', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2021,
    question: 'Photoelectric emission depends primarily on:',
    options: ['intensity only', 'frequency of incident light', 'metal mass', 'surface area only'],
    correctAnswer: 1,
    explanation: 'Emission starts only above threshold frequency.',
    tags: ['photoelectric effect', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2020,
    question: 'Lyman series of hydrogen lies in:',
    options: ['Visible region', 'UV region', 'IR region', 'Microwave region'],
    correctAnswer: 1,
    explanation: 'Lyman transitions terminate at n=1 and appear in UV.',
    tags: ['hydrogen spectrum', 'series'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2019,
    question: 'Bohr energy of hydrogen atom in n=3 state is:',
    options: ['-13.6 eV', '-3.4 eV', '-1.51 eV', '+1.51 eV'],
    correctAnswer: 2,
    explanation: 'En = -13.6/n^2 = -13.6/9 = -1.51 eV (approx).',
    tags: ['bohr model', 'energy levels'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2018,
    question: 'de Broglie relation for matter waves is:',
    options: ['lambda = h/mv', 'lambda = mv/h', 'lambda = h x mv', 'lambda = v/hm'],
    correctAnswer: 0,
    explanation: 'Matter wavelength is inversely proportional to momentum.',
    tags: ['de broglie', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2017,
    question: 'Heisenberg uncertainty principle is represented as:',
    options: ['Delta x x Delta p = 0', 'Delta x x Delta p >= h/4pi', 'Delta x = Delta p', 'Delta x x Delta p <= h/4pi'],
    correctAnswer: 1,
    explanation: 'Position and momentum cannot both be measured exactly at the same time.',
    tags: ['uncertainty principle', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2016,
    question: 'Maximum value of l for n=4 is:',
    options: ['2', '3', '4', '1'],
    correctAnswer: 1,
    explanation: 'For principal quantum number n, l ranges from 0 to n-1.',
    tags: ['quantum numbers', 'rules'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2015,
    question: 'For l = 2, possible m values are:',
    options: ['0 to +2 only', '-2 to +2', '-1, 0, +1', 'only +2'],
    correctAnswer: 1,
    explanation: 'Magnetic quantum number m ranges from -l to +l.',
    tags: ['quantum numbers', 'magnetic quantum number'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2014,
    question: 'Shape of p-orbital is:',
    options: ['spherical', 'dumbbell', 'planar triangle', 'cubic'],
    correctAnswer: 1,
    explanation: 'p orbitals have dumbbell shape.',
    tags: ['atomic orbitals', 'shape'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2013,
    question: 'Pauli exclusion principle states that an orbital can have maximum:',
    options: ['1 electron', '2 electrons with opposite spins', '3 electrons', '4 electrons'],
    correctAnswer: 1,
    explanation: 'No two electrons can have identical set of quantum numbers.',
    tags: ['electronic configuration', 'pauli'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2012,
    question: 'Hund rule favors:',
    options: ['pairing first in one orbital', 'maximum number of unpaired electrons in degenerate orbitals', 'minimum spin multiplicity', 'filling highest energy orbital first'],
    correctAnswer: 1,
    explanation: 'Electrons occupy degenerate orbitals singly before pairing.',
    tags: ['electronic configuration', 'hund rule'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2011,
    question: 'Which statement is correct?',
    options: ['Orbit and orbital are same', 'Orbit is path in Bohr model, orbital is probability region', 'Orbital has fixed circular path', 'Orbitals exist only for hydrogen'],
    correctAnswer: 1,
    explanation: 'Orbit is classical Bohr concept; orbital is quantum mechanical region of high probability.',
    tags: ['orbit vs orbital', 'conceptual'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2010,
    question: 'Balmer series corresponds to transitions ending at n =',
    options: ['1', '2', '3', '4'],
    correctAnswer: 1,
    explanation: 'Balmer series has final state n=2.',
    tags: ['hydrogen spectrum', 'balmer'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 2: Atomic Structure',
    chapter: 'atomic-structure-chem',
    year: 2009,
    question: 'Half-filled and fully-filled orbitals are relatively more stable due to:',
    options: ['higher mass', 'symmetry and exchange energy', 'higher temperature', 'nuclear instability'],
    correctAnswer: 1,
    explanation: 'Extra stability is due to symmetric distribution and exchange energy.',
    tags: ['stability', 'electronic configuration'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'atomic-structure-chem', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 2.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
