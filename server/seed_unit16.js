import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2023,
    question: 'Correct order of electromagnetic spectrum from low to high frequency is:',
    options: ['Radio, Microwave, Infrared, Visible, UV, X-rays, Gamma', 'Radio, Infrared, Microwave, Visible, UV, Gamma, X-rays', 'Microwave, Radio, IR, Visible, UV, X-rays, Gamma', 'Visible, IR, Microwave, Radio, UV, X-rays, Gamma'],
    correctAnswer: 0,
    explanation: 'Frequency increases in order: Radio < Microwave < Infrared < Visible < UV < X-rays < Gamma rays.',
    tags: ['spectrum order', 'frequency'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2022,
    question: 'EM waves are:',
    options: ['longitudinal and need medium', 'transverse and can travel in vacuum', 'only electric waves', 'only magnetic waves'],
    correctAnswer: 1,
    explanation: 'EM waves are transverse and do not need a material medium.',
    tags: ['nature', 'transverse'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2021,
    question: 'Speed of EM waves in vacuum is:',
    options: ['3 x 10^6 m/s', '3 x 10^8 m/s', '3 x 10^5 km/s', 'Both 3 x 10^8 m/s and 3 x 10^5 km/s'],
    correctAnswer: 3,
    explanation: 'c = 3 x 10^8 m/s, which is numerically same as 3 x 10^5 km/s.',
    tags: ['speed of light', 'vacuum'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2020,
    question: 'Maxwell relation for speed of EM wave is:',
    options: ['c = sqrt(mu0*epsilon0)', 'c = 1/sqrt(mu0*epsilon0)', 'c = mu0/epsilon0', 'c = epsilon0/mu0'],
    correctAnswer: 1,
    explanation: 'In vacuum, c = 1/sqrt(mu0*epsilon0).',
    tags: ['maxwell relation', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2019,
    question: 'For an EM wave in vacuum, ratio E/B equals:',
    options: ['1/c', 'c', 'c^2', '1'],
    correctAnswer: 1,
    explanation: 'For EM waves in vacuum, E/B = c.',
    tags: ['E/B relation', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2018,
    question: 'Displacement current is given by:',
    options: ['Id = epsilon0 (dPhiE/dt)', 'Id = B l v', 'Id = I0 sin(omega t)', 'Id = q/t'],
    correctAnswer: 0,
    explanation: 'Maxwell introduced displacement current Id = epsilon0 (dPhiE/dt).',
    tags: ['displacement current', 'maxwell'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2017,
    question: 'Which of the following is NOT deflected by electric or magnetic field?',
    options: ['Electron beam', 'Alpha particles', 'EM waves', 'Protons'],
    correctAnswer: 2,
    explanation: 'EM waves are electrically neutral and are not deflected by external E or B fields.',
    tags: ['properties', 'deflection'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2016,
    question: 'Among the following, which has highest frequency?',
    options: ['Ultraviolet', 'X-rays', 'Gamma rays', 'Visible light'],
    correctAnswer: 2,
    explanation: 'Gamma rays have the highest frequency in EM spectrum.',
    tags: ['spectrum', 'high frequency'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2015,
    question: 'Which EM wave is commonly used in radar?',
    options: ['Radio waves', 'Microwaves', 'Infrared', 'X-rays'],
    correctAnswer: 1,
    explanation: 'Microwaves are commonly used in radar systems.',
    tags: ['applications', 'microwave'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2014,
    question: 'Infrared waves are widely used for:',
    options: ['sterilization', 'heat detection', 'bone imaging', 'cancer therapy'],
    correctAnswer: 1,
    explanation: 'Infrared radiation is associated with heat and used in thermal detection.',
    tags: ['applications', 'infrared'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2013,
    question: 'Ultraviolet radiation is used in:',
    options: ['communication', 'sterilization', 'cooking food', 'MRI'],
    correctAnswer: 1,
    explanation: 'UV radiation is used for sterilization and water purification.',
    tags: ['applications', 'ultraviolet'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2012,
    question: 'X-rays are mainly used for:',
    options: ['night vision', 'medical imaging', 'radio communication', 'food heating'],
    correctAnswer: 1,
    explanation: 'X-rays are used in medical imaging because of high penetrating ability.',
    tags: ['applications', 'x-rays'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2011,
    question: 'Gamma rays are used in:',
    options: ['wireless broadcasting', 'cancer treatment', 'microwave ovens', 'remote controls'],
    correctAnswer: 1,
    explanation: 'Gamma rays are used in radiotherapy for cancer treatment.',
    tags: ['applications', 'gamma rays'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2010,
    question: 'Energy carried by EM wave is directly proportional to:',
    options: ['wavelength', 'frequency', 'speed', 'refractive index'],
    correctAnswer: 1,
    explanation: 'Photon energy E = h*nu, so energy is directly proportional to frequency.',
    tags: ['energy-frequency relation', 'conceptual'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 16: Electromagnetic Waves',
    chapter: 'em-waves',
    year: 2009,
    question: 'In an EM wave, E, B and direction of propagation are:',
    options: ['all parallel', 'all in one plane', 'mutually perpendicular', 'E parallel B and both perpendicular to propagation'],
    correctAnswer: 2,
    explanation: 'EM wave is transverse with E perpendicular B and both perpendicular to propagation direction.',
    tags: ['field orientation', 'transverse wave'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'em-waves' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for electromagnetic waves.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
