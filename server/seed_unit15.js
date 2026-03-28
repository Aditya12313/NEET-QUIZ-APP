import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2023,
    question: 'For a sinusoidal alternating current I = I0 sin(omega t), the RMS value is:',
    options: ['I0', 'I0/2', 'I0/sqrt(2)', 'sqrt(2)I0'],
    correctAnswer: 2,
    explanation: 'For sinusoidal AC, Irms = I0/sqrt(2).',
    tags: ['rms value', 'ac basics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2022,
    question: 'Average value of AC over one half cycle is:',
    options: ['I0/pi', '2I0/pi', 'I0/sqrt(2)', 'I0/2'],
    correctAnswer: 1,
    explanation: 'Half-cycle average current for sinusoidal AC is Iavg = 2I0/pi.',
    tags: ['average value', 'ac formulas'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2021,
    question: 'In a purely resistive AC circuit, the phase difference between current and voltage is:',
    options: ['0 degree', '90 degree', '180 degree', '45 degree'],
    correctAnswer: 0,
    explanation: 'In resistor-only AC circuit, current and voltage are in phase.',
    tags: ['phase relation', 'resistor'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2020,
    question: 'Inductive reactance XL is given by:',
    options: ['XL = 1/(omegaL)', 'XL = omegaL', 'XL = 1/(omegaC)', 'XL = R/omega'],
    correctAnswer: 1,
    explanation: 'Inductive reactance increases linearly with angular frequency: XL = omegaL.',
    tags: ['reactance', 'inductor'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2019,
    question: 'Capacitive reactance XC is:',
    options: ['omegaC', '1/(omegaC)', 'omega/C', 'C/omega'],
    correctAnswer: 1,
    explanation: 'For capacitor, reactance is inversely proportional to omega and C: XC = 1/(omegaC).',
    tags: ['reactance', 'capacitor'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2018,
    question: 'Impedance of a series LCR circuit is:',
    options: ['R + XL + XC', 'sqrt(R^2 + (XL - XC)^2)', 'R(XL - XC)', 'R^2 + XL + XC'],
    correctAnswer: 1,
    explanation: 'For series LCR, impedance magnitude is Z = sqrt(R^2 + (XL - XC)^2).',
    tags: ['impedance', 'lcr'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2017,
    question: 'Current in an AC circuit with applied voltage V and impedance Z is:',
    options: ['I = VZ', 'I = V/Z', 'I = Z/V', 'I = V/R'],
    correctAnswer: 1,
    explanation: 'Ohm law for AC uses impedance: I = V/Z.',
    tags: ['current', 'impedance'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2016,
    question: 'Average power in AC circuit is represented by:',
    options: ['P = VI', 'P = Vrms Irms cos(phi)', 'P = Irms^2 Z', 'P = V0 I0'],
    correctAnswer: 1,
    explanation: 'Average AC power is P = Vrms Irms cos(phi).',
    tags: ['power', 'power factor'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2015,
    question: 'Power factor in series LCR circuit is:',
    options: ['R/Z', 'Z/R', 'XL/XC', 'XC/XL'],
    correctAnswer: 0,
    explanation: 'Power factor cos(phi) = R/Z.',
    tags: ['power factor', 'lcr'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2014,
    question: 'At resonance in series LCR circuit:',
    options: ['XL > XC', 'XC > XL', 'XL = XC and Z = R', 'current is minimum'],
    correctAnswer: 2,
    explanation: 'At resonance, XL equals XC, net reactance is zero and impedance is minimum equal to R.',
    tags: ['resonance', 'lcr'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2013,
    question: 'Resonant frequency of series LCR circuit is:',
    options: ['f = 1/(2pi*sqrt(LC))', 'f = 2pi*sqrt(LC)', 'f = 1/(LC)', 'f = sqrt(LC)'],
    correctAnswer: 0,
    explanation: 'Standard resonance relation is f0 = 1/(2pi*sqrt(LC)).',
    tags: ['resonant frequency', 'formula'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2012,
    question: 'In a purely inductive AC circuit:',
    options: ['current leads voltage by 90 degree', 'voltage leads current by 90 degree', 'they are in phase', 'phase difference is 180 degree'],
    correctAnswer: 1,
    explanation: 'In inductor-only circuit, voltage leads current by 90 degree.',
    tags: ['phase relation', 'inductor'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2011,
    question: 'In a purely capacitive AC circuit:',
    options: ['voltage leads current by 90 degree', 'current leads voltage by 90 degree', 'they are in phase', 'current is zero'],
    correctAnswer: 1,
    explanation: 'For capacitor-only AC, current leads voltage by 90 degree.',
    tags: ['phase relation', 'capacitor'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2010,
    question: 'For an ideal transformer, the correct ratio is:',
    options: ['Vs/Vp = Ns/Np', 'Vs/Vp = Np/Ns', 'Vs*Vp = Ns/Np', 'Vs/Vp = Ip/Is only'],
    correctAnswer: 0,
    explanation: 'Ideal transformer voltage ratio follows turns ratio: Vs/Vp = Ns/Np.',
    tags: ['transformer', 'turns ratio'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 15: Alternating Current (AC)',
    chapter: 'alternating-current',
    year: 2009,
    question: 'If frequency increases in an AC circuit with fixed L and C, then:',
    options: ['XL increases and XC decreases', 'XL decreases and XC increases', 'both increase', 'both decrease'],
    correctAnswer: 0,
    explanation: 'XL = omegaL increases with omega, while XC = 1/(omegaC) decreases with omega.',
    tags: ['reactance', 'frequency dependence'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'alternating-current' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for alternating current.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
