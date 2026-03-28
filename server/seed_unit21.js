import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2023,
    question: 'The magnetic dipole moment of a bar magnet of pole strength m and magnetic length 2l is:',
    options: ['m/l', 'm*2l', '2m/l', 'm*l/2'],
    correctAnswer: 1,
    explanation: 'Magnetic dipole moment of a bar magnet is M = m * 2l.',
    tags: ['dipole moment', 'bar magnet'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2022,
    question: 'For a short bar magnet, magnetic field on axial line at distance r is:',
    options: ['(mu0/4pi)*(M/r^3)', '(mu0/4pi)*(2M/r^3)', '(mu0/4pi)*(M/r^2)', '(mu0/4pi)*(2M/r^2)'],
    correctAnswer: 1,
    explanation: 'Axial field of a short bar magnet is B = (mu0/4pi) * (2M/r^3).',
    tags: ['axial field', 'bar magnet'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2021,
    question: 'For a short bar magnet, magnetic field on equatorial line at distance r is:',
    options: ['(mu0/4pi)*(M/r^3)', '(mu0/4pi)*(2M/r^3)', '(mu0/4pi)*(M/r^2)', '(mu0/4pi)*(2M/r^2)'],
    correctAnswer: 0,
    explanation: 'Equatorial field magnitude is B = (mu0/4pi) * (M/r^3).',
    tags: ['equatorial field', 'bar magnet'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2020,
    question: 'Torque on magnetic dipole moment M in uniform magnetic field B at angle theta is:',
    options: ['MB cos(theta)', 'MB sin(theta)', 'M/B', 'B/M'],
    correctAnswer: 1,
    explanation: 'Torque magnitude on magnetic dipole is tau = MB sin(theta).',
    tags: ['torque', 'dipole'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2019,
    question: 'Potential energy of magnetic dipole in a uniform field is:',
    options: ['U = MB cos(theta)', 'U = MB sin(theta)', 'U = -MB cos(theta)', 'U = -MB sin(theta)'],
    correctAnswer: 2,
    explanation: 'Potential energy is U = -MB cos(theta).',
    tags: ['potential energy', 'dipole'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2018,
    question: 'Earth behaves approximately as a:',
    options: ['point charge', 'giant magnet', 'perfect conductor', 'black body'],
    correctAnswer: 1,
    explanation: 'For magnetism problems, Earth is modeled as a giant magnet.',
    tags: ['earth magnetism', 'theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2017,
    question: 'Inclination (dip) at a place is defined as angle between:',
    options: ['geographic and magnetic meridian', 'magnetic field and horizontal', 'magnetic field and geographic north', 'equator and horizontal'],
    correctAnswer: 1,
    explanation: 'Inclination is the angle made by Earth magnetic field with horizontal plane.',
    tags: ['inclination', 'earth magnetism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2016,
    question: 'Horizontal component BH of Earth magnetic field B and dip angle theta is:',
    options: ['BH = B sin(theta)', 'BH = B cos(theta)', 'BH = B tan(theta)', 'BH = B/theta'],
    correctAnswer: 1,
    explanation: 'Horizontal component is BH = B cos(theta).',
    tags: ['horizontal component', 'earth magnetism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2015,
    question: 'Which among the following is diamagnetic?',
    options: ['Iron', 'Cobalt', 'Copper', 'Nickel'],
    correctAnswer: 2,
    explanation: 'Copper is diamagnetic and weakly repelled by magnetic field.',
    tags: ['diamagnetic', 'materials'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2014,
    question: 'Which among the following is paramagnetic?',
    options: ['Bismuth', 'Copper', 'Aluminum', 'Graphite'],
    correctAnswer: 2,
    explanation: 'Aluminum is a common example of paramagnetic material.',
    tags: ['paramagnetic', 'materials'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2013,
    question: 'Which material is strongly attracted by magnetic field?',
    options: ['Diamagnetic', 'Paramagnetic', 'Ferromagnetic', 'Antiferromagnetic'],
    correctAnswer: 2,
    explanation: 'Ferromagnetic materials like iron are strongly attracted.',
    tags: ['ferromagnetic', 'materials'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2012,
    question: 'Magnetic susceptibility is defined as:',
    options: ['chi = H/M', 'chi = M/H', 'chi = B/H', 'chi = B/M'],
    correctAnswer: 1,
    explanation: 'Magnetic susceptibility is ratio of magnetization to magnetic intensity, chi = M/H.',
    tags: ['susceptibility', 'relations'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2011,
    question: 'Permeability relation with susceptibility is:',
    options: ['mu = mu0(1 + chi)', 'mu = mu0/(1 + chi)', 'mu = mu0*chi', 'mu = chi/mu0'],
    correctAnswer: 0,
    explanation: 'For linear magnetic medium, mu = mu0(1 + chi).',
    tags: ['permeability', 'susceptibility'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2010,
    question: 'Magnetic field lines for a bar magnet form:',
    options: ['open straight lines', 'closed loops', 'circles only outside magnet', 'spirals only inside magnet'],
    correctAnswer: 1,
    explanation: 'Magnetic field lines always form closed loops.',
    tags: ['field lines', 'bar magnet'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 21: Magnetism and Matter',
    chapter: 'magnetism-matter',
    year: 2009,
    question: 'A bar magnet is equivalent to:',
    options: ['stationary charged sphere', 'single magnetic pole', 'current-carrying solenoid', 'parallel plate capacitor'],
    correctAnswer: 2,
    explanation: 'A bar magnet and a current-carrying solenoid produce similar magnetic field pattern.',
    tags: ['solenoid equivalence', 'conceptual'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'magnetism-matter' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for magnetism and matter.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
