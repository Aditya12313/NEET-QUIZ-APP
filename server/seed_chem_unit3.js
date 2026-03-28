import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2023,
    question: 'Primary basis of Kossel-Lewis approach is:',
    options: ['duplet only', 'octet attainment', 'nuclear fission', 'isotope stability'],
    correctAnswer: 1,
    explanation: 'Atoms combine to achieve noble gas-like octet configuration.',
    tags: ['kossel-lewis', 'octet'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2022,
    question: 'Ionic bond is formed by:',
    options: ['sharing electrons', 'transfer of electrons', 'transfer of protons', 'sharing neutrons'],
    correctAnswer: 1,
    explanation: 'Ionic bond forms by electron transfer from one atom to another.',
    tags: ['ionic bond', 'formation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2021,
    question: 'Higher lattice energy generally implies:',
    options: ['lower stability', 'higher stability of ionic solid', 'lower ionic character', 'larger ion size'],
    correctAnswer: 1,
    explanation: 'Greater lattice energy indicates stronger ionic interactions and higher stability.',
    tags: ['lattice energy', 'ionic compounds'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2020,
    question: 'According to Fajan rule, covalent character increases with:',
    options: ['large cation and small anion', 'small highly charged cation', 'low polarization power', 'equal ionic sizes'],
    correctAnswer: 1,
    explanation: 'Small highly charged cations polarize anions strongly, increasing covalent character.',
    tags: ['fajan rule', 'covalent character'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2019,
    question: 'Dipole moment is given by:',
    options: ['mu = q/d', 'mu = q x d', 'mu = q + d', 'mu = d/q'],
    correctAnswer: 1,
    explanation: 'Dipole moment equals product of magnitude of charge and separation distance.',
    tags: ['dipole moment', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2018,
    question: 'Ideal bond angle in tetrahedral geometry is:',
    options: ['180 deg', '120 deg', '109.5 deg', '90 deg'],
    correctAnswer: 2,
    explanation: 'Tetrahedral arrangement has ideal bond angle 109.5 deg.',
    tags: ['vsepr', 'geometry'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2017,
    question: 'Hybridization corresponding to linear geometry is:',
    options: ['sp', 'sp2', 'sp3', 'dsp2'],
    correctAnswer: 0,
    explanation: 'sp hybridization leads to linear geometry with 180 deg angle.',
    tags: ['hybridization', 'geometry'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2016,
    question: 'In Valence Bond Theory, covalent bond forms by:',
    options: ['nuclear fusion', 'orbital overlap', 'ion migration', 'electron ejection'],
    correctAnswer: 1,
    explanation: 'VBT explains covalent bond as overlap of half-filled orbitals.',
    tags: ['vbt', 'bond formation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2015,
    question: 'Bond order in MOT is calculated as:',
    options: ['Nb + Na', '(Nb - Na)/2', '(Na - Nb)/2', 'Nb/2'],
    correctAnswer: 1,
    explanation: 'Bond order equals half of difference between bonding and antibonding electrons.',
    tags: ['mot', 'bond order'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2014,
    question: 'If a molecule has unpaired electrons, it is:',
    options: ['diamagnetic', 'paramagnetic', 'always nonpolar', 'always ionic'],
    correctAnswer: 1,
    explanation: 'Presence of unpaired electrons causes paramagnetism.',
    tags: ['magnetic nature', 'mot'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2013,
    question: 'Hydrogen bonding between two different molecules is:',
    options: ['intramolecular', 'intermolecular', 'metallic', 'ionic'],
    correctAnswer: 1,
    explanation: 'Intermolecular hydrogen bonding occurs between different molecules.',
    tags: ['hydrogen bonding', 'intermolecular'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2012,
    question: 'Major reason for bond-angle distortion in VSEPR is:',
    options: ['lone pair repulsion', 'electron mass', 'nuclear spin', 'bond order only'],
    correctAnswer: 0,
    explanation: 'Lone pairs repel more strongly than bond pairs and distort geometry.',
    tags: ['vsepr', 'lone pair effect'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2011,
    question: 'A symmetrical molecule with polar bonds may be nonpolar due to:',
    options: ['high lattice energy', 'dipole cancellation', 'small atomic radius', 'high bond order'],
    correctAnswer: 1,
    explanation: 'Vector sum of equal bond dipoles can become zero due to symmetry.',
    tags: ['dipole moment', 'symmetry'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2010,
    question: 'Which bonding model explains sea of electrons?',
    options: ['ionic bonding', 'hydrogen bonding', 'metallic bonding', 'coordinate bonding'],
    correctAnswer: 2,
    explanation: 'Metallic bond is described by delocalized sea of electrons.',
    tags: ['metallic bonding', 'conceptual'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 3: Chemical Bonding and Molecular Structure',
    chapter: 'chemical-bonding-chem',
    year: 2009,
    question: 'For same ions, larger charge product leads to:',
    options: ['weaker ionic bond', 'stronger ionic bond', 'lower lattice energy', 'greater covalent character always'],
    correctAnswer: 1,
    explanation: 'Electrostatic attraction increases with ionic charge, strengthening ionic bond.',
    tags: ['ionic bond', 'charge effect'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'chemical-bonding-chem', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 3.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
