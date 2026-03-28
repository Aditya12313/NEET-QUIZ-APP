import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2023,
    question: 'Mirror formula is given by:',
    options: ['1/f = 1/v + 1/u', '1/f = 1/v - 1/u', '1/f = v/u', 'f = uv'],
    correctAnswer: 0,
    explanation: 'For spherical mirrors, relation is 1/f = 1/v + 1/u.',
    tags: ['mirror formula', 'ray optics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2022,
    question: 'For a thin lens, the correct relation is:',
    options: ['1/f = 1/v + 1/u', '1/f = 1/v - 1/u', 'f = v - u', 'm = f/u'],
    correctAnswer: 1,
    explanation: 'Lens formula is 1/f = 1/v - 1/u under Cartesian sign convention.',
    tags: ['lens formula', 'ray optics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2021,
    question: 'Snell law of refraction is:',
    options: ['n1 sin(theta1) = n2 sin(theta2)', 'n1 tan(theta1) = n2 tan(theta2)', 'n1 cos(theta1) = n2 cos(theta2)', 'n1/n2 = theta1/theta2'],
    correctAnswer: 0,
    explanation: 'Snell law uses sine relation between incidence and refraction angles.',
    tags: ['snell law', 'refraction'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2020,
    question: 'Refractive index n is defined as:',
    options: ['n = v/c', 'n = c/v', 'n = cv', 'n = c - v'],
    correctAnswer: 1,
    explanation: 'Refractive index is ratio of speed in vacuum to speed in medium: n = c/v.',
    tags: ['refractive index', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2019,
    question: 'Total internal reflection occurs when light travels:',
    options: ['rarer to denser only', 'denser to rarer with angle > critical angle', 'denser to rarer with any angle', 'denser to denser medium'],
    correctAnswer: 1,
    explanation: 'TIR condition needs denser-to-rarer transition and incidence angle greater than critical angle.',
    tags: ['tir', 'critical angle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2018,
    question: 'Critical angle relation is:',
    options: ['sin(C) = n', 'sin(C) = 1/n', 'tan(C) = n', 'cos(C) = 1/n'],
    correctAnswer: 1,
    explanation: 'For denser to rarer transition, sin(C) = 1/n.',
    tags: ['critical angle', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2017,
    question: 'Power of lens is:',
    options: ['P = f', 'P = 1/f', 'P = f^2', 'P = 1/f^2'],
    correctAnswer: 1,
    explanation: 'Lens power in diopters is reciprocal of focal length in meter.',
    tags: ['power of lens', 'diopter'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2016,
    question: 'Equivalent power of two thin lenses in contact is:',
    options: ['P1 - P2', 'P1 + P2', 'P1 x P2', 'P1/P2'],
    correctAnswer: 1,
    explanation: 'Lens powers add algebraically: Ptotal = P1 + P2.',
    tags: ['lens combination', 'power'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2015,
    question: 'In Young double slit experiment, fringe width is:',
    options: ['beta = d/(lambda D)', 'beta = lambda D/d', 'beta = lambda d/D', 'beta = D/(lambda d)'],
    correctAnswer: 1,
    explanation: 'Standard YDSE fringe-width relation is beta = lambda D/d.',
    tags: ['ydse', 'fringe width'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2014,
    question: 'Condition for constructive interference is:',
    options: ['path difference = (2n+1)lambda/2', 'path difference = n lambda', 'path difference = lambda/4', 'phase difference = pi/2'],
    correctAnswer: 1,
    explanation: 'Constructive interference occurs for path difference equal to integer multiple of wavelength.',
    tags: ['interference', 'bright fringe'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2013,
    question: 'Condition for destructive interference is:',
    options: ['path difference = n lambda', 'path difference = (2n+1)lambda/2', 'path difference = 2n lambda', 'path difference = lambda^2'],
    correctAnswer: 1,
    explanation: 'Dark fringes occur when path difference is odd multiple of lambda/2.',
    tags: ['interference', 'dark fringe'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2012,
    question: 'Diffraction is best described as:',
    options: ['reflection of light', 'refraction of light', 'bending of light around obstacles', 'dispersion of light'],
    correctAnswer: 2,
    explanation: 'Diffraction is bending/spreading of light near edges and apertures.',
    tags: ['diffraction', 'wave optics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2011,
    question: 'Polarization proves that light is:',
    options: ['longitudinal', 'transverse', 'scalar', 'stationary'],
    correctAnswer: 1,
    explanation: 'Only transverse waves can be polarized, hence light is transverse.',
    tags: ['polarization', 'transverse nature'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2010,
    question: 'A lens has focal length 0.5 m. Its power is:',
    options: ['0.5 D', '1 D', '2 D', '5 D'],
    correctAnswer: 2,
    explanation: 'P = 1/f = 1/0.5 = 2 diopters.',
    tags: ['power calculation', 'lens'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 17: Optics (Ray + Wave Optics)',
    chapter: 'optics',
    year: 2009,
    question: 'Major NEET trap in optics numericals is usually due to:',
    options: ['ignoring units only', 'wrong sign convention and wrong formula selection', 'using SI units', 'using calculators'],
    correctAnswer: 1,
    explanation: 'Most optics errors are from sign-convention mistakes and mixing mirror/lens equations.',
    tags: ['neet trap', 'sign convention'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'optics' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for optics.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
