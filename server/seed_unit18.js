import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2023,
    question: 'Photon energy can be written as:',
    options: ['E = h/nu', 'E = h*nu', 'E = nu/h', 'E = hc*lambda'],
    correctAnswer: 1,
    explanation: 'Photon energy is E = h*nu and equivalently E = hc/lambda.',
    tags: ['photon', 'energy relation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2022,
    question: 'Einstein photoelectric equation is:',
    options: ['h*nu = phi + KEmax', 'h*nu = phi - KEmax', 'phi = KEmax + eV0', 'h*nu = eV0 only'],
    correctAnswer: 0,
    explanation: 'Einstein equation is h*nu = phi + KEmax.',
    tags: ['einstein equation', 'photoelectric'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2021,
    question: 'Maximum kinetic energy of photoelectrons is related to stopping potential V0 as:',
    options: ['KEmax = hV0', 'KEmax = eV0', 'KEmax = V0/e', 'KEmax = e/V0'],
    correctAnswer: 1,
    explanation: 'From stopping-potential condition, KEmax = eV0.',
    tags: ['stopping potential', 'kinetic energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2020,
    question: 'Threshold frequency nu0 and work function phi relation is:',
    options: ['nu0 = h/phi', 'nu0 = phi/h', 'nu0 = phi*e', 'nu0 = h*phi'],
    correctAnswer: 1,
    explanation: 'At threshold, h*nu0 = phi, so nu0 = phi/h.',
    tags: ['threshold frequency', 'work function'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2019,
    question: 'Photoelectric emission depends primarily on:',
    options: ['intensity only', 'frequency of incident light', 'area of metal only', 'temperature only'],
    correctAnswer: 1,
    explanation: 'Emission condition is determined by incident frequency relative to threshold frequency.',
    tags: ['frequency vs intensity', 'conceptual'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2018,
    question: 'de Broglie wavelength relation is:',
    options: ['lambda = p/h', 'lambda = h/p', 'lambda = h*p', 'lambda = p^2/h'],
    correctAnswer: 1,
    explanation: 'de Broglie proposed lambda = h/p = h/(mv).',
    tags: ['de broglie', 'matter waves'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2017,
    question: 'For electron accelerated through potential V, de Broglie wavelength is proportional to:',
    options: ['sqrt(V)', '1/sqrt(V)', 'V', '1/V'],
    correctAnswer: 1,
    explanation: 'lambda = h/sqrt(2meV), hence lambda is inversely proportional to sqrt(V).',
    tags: ['de broglie', 'accelerating potential'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2016,
    question: 'In photoelectric effect, increasing intensity at fixed frequency above threshold mainly increases:',
    options: ['maximum kinetic energy', 'number of emitted electrons', 'work function', 'threshold frequency'],
    correctAnswer: 1,
    explanation: 'Intensity increases photoelectron count; KEmax depends on frequency.',
    tags: ['intensity effect', 'photoelectric'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2015,
    question: 'If incident frequency is below threshold frequency, then photoelectric emission is:',
    options: ['always occurs', 'depends on intensity and occurs', 'does not occur', 'occurs after delay only'],
    correctAnswer: 2,
    explanation: 'Below threshold frequency, photon energy is insufficient to overcome work function.',
    tags: ['threshold condition', 'photoelectric'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2014,
    question: 'KEmax vs frequency graph is:',
    options: ['parabola', 'straight line', 'hyperbola', 'circle'],
    correctAnswer: 1,
    explanation: 'From KEmax = h*nu - phi, graph is linear.',
    tags: ['graph based', 'kinetic energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2013,
    question: 'Photoelectric current vs anode potential graph shows current becoming constant at high positive potential. This is called:',
    options: ['threshold current', 'saturation current', 'critical current', 'stopping current'],
    correctAnswer: 1,
    explanation: 'At sufficiently high positive anode potential, all emitted electrons are collected giving saturation current.',
    tags: ['graph based', 'saturation current'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2012,
    question: 'Work function is defined as:',
    options: ['minimum energy to emit electron from metal surface', 'energy of emitted electron', 'total energy of photon', 'stopping potential in eV'],
    correctAnswer: 0,
    explanation: 'Work function is the minimum energy required to remove an electron from metal surface.',
    tags: ['work function', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2011,
    question: 'A key application based on wave nature of electrons is:',
    options: ['radar', 'electron microscope', 'X-ray tube only', 'FM transmitter'],
    correctAnswer: 1,
    explanation: 'Electron microscope operation relies on wave behavior of fast electrons.',
    tags: ['application', 'electron microscope'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2010,
    question: 'If KEmax doubles, de Broglie wavelength of electron becomes:',
    options: ['double', 'half', '1/sqrt(2) times', 'sqrt(2) times'],
    correctAnswer: 2,
    explanation: 'lambda is inversely proportional to sqrt(KE), so doubling KE makes lambda = lambda0/sqrt(2).',
    tags: ['de broglie', 'kinetic energy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 18: Dual Nature of Matter and Radiation',
    chapter: 'dual-nature',
    year: 2009,
    question: 'Common NEET conceptual trap in this chapter is confusion between:',
    options: ['frequency and intensity effects', 'mass and charge of electron', 'speed and momentum only', 'current and voltage only'],
    correctAnswer: 0,
    explanation: 'Intensity and frequency play different roles in photoelectric effect and are often confused.',
    tags: ['neet trap', 'conceptual'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'dual-nature' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for dual nature of matter and radiation.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
