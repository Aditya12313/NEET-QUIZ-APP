import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Electric field in vacuum is E = 40 cos(kz - 6 x 10^8 t) i-hat. Value of wave vector k is",
    options: ["2 m^-1", "0.5 m^-1", "6 m^-1", "3 m^-1"],
    correctAnswer: 0, explanation: "w = 6 x 10^8 rad/s. c = w/k => k = w/c = (6 x 10^8) / (3 x 10^8) = 2 m^-1.", tags: ["EM Waves"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Charge on parallel plate capacitor varies as q = q0 cos(2 pi u t). Displacement current is",
    options: ["q0 2*pi*u sin(pi*u*t)", "- q0 2*pi*u sin(2*pi*u*t)", "q0 2*pi sin(pi*u*t)", "q0 pi*u sin(2*pi*u*t)"],
    correctAnswer: 1, explanation: "Id = dq/dt = d/dt(q0 cos(2pi u t)) = - q0 (2pi u) sin(2pi u t).", tags: ["Displacement Current"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Radiation of energy E falls normally on perfectly reflecting surface. Momentum transferred is",
    options: ["2E/C", "2E^2/C^2", "E^2/C^2", "E/C"],
    correctAnswer: 0, explanation: "Momentum p = E/C. perfectly reflecting transfers 2p = 2E/C.", tags: ["Radiation Pressure"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Match: 1. Infrared (i) To treat muscular strain, 2. Radio waves (ii) For broadcasting, 3. X-rays (iii) To detect fracture, 4. UV rays (iv) Absorbed by ozone",
    options: ["(iv) (iii) (ii) (i)", "(i) (ii) (iv) (iii)", "(iii) (ii) (i) (iv)", "(i) (ii) (iii) (iv)"],
    correctAnswer: 3, explanation: "Infrared is used to treat muscular strain. Radiowaves for broadcasting. X-rays to detect fractures. UV rays absorbed by ozone.", tags: ["Applications", "EM Spectrum"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "EM wave in free space along X-direction. B at a point is 1.2 x 10^-8 k-hat T. E at that point is",
    options: ["1.2 j-hat", "3.6 k-hat", "1.2 k-hat", "3.6 j-hat Vm^-1"],
    correctAnswer: 3, explanation: "E0 = B0 * c = 1.2x10^-8 * 3x10^8 = 3.6 V/m. Direction: E x B must be i-hat. j x k = i. So E is along j-hat.", tags: ["Relation between E and B"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "If vs, vx, vm are speeds of soft gamma rays, X-rays and microwaves respectively in vacuum, then",
    options: ["vs > vx > vm", "vs < vx < vm", "vs > vx < vm", "vs = vx = vm"],
    correctAnswer: 3, explanation: "Speed of all electromagnetic waves in vacuum is equal to c (3 x 10^8 m/s).", tags: ["EM Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Photons of EM radiation have 11 keV energy. To which region does it belong?",
    options: ["X-ray region", "Ultra violet region", "Infrared region", "Visible region"],
    correctAnswer: 0, explanation: "E = hc/L => L = hc/E = (6.63x10^-34 * 3x10^8) / (11x10^3 * 1.6x10^-19) = 1.1 x 10^-10 m = 1.1 Angstroms. This lies in the X-ray region.", tags: ["EM Spectrum"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "EM wave along x-axis. Electric field along y-axis is 9.3 V/m. Magnetic induction B along z-axis is",
    options: ["3.1 x 10^-8 T", "3 x 10^-5 T", "3 x 10^-6 T", "9.3 x 10^-6 T"],
    correctAnswer: 0, explanation: "B = E/c = 9.3 / (3x10^8) = 3.1 x 10^-8 T.", tags: ["Relation between E and B"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Ratio of amplitude of magnetic field to amplitude of electric field for EM wave propagating in vacuum is equal to:",
    options: ["speed of light in vacuum", "reciprocal of speed of light in vacuum", "ratio of magnetic permeability to electric susceptibility", "unity"],
    correctAnswer: 1, explanation: "We know E/B = c. Therefore B/E = 1/c (reciprocal of speed of light).", tags: ["Relation between E and B"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Plane EM wave incident on material surface. If wave delivers momentum p and energy E, then",
    options: ["p = 0, E = 0", "p != 0, E != 0", "p != 0, E = 0", "p = 0, E != 0"],
    correctAnswer: 1, explanation: "EM waves carry both energy and momentum, so neither is zero.", tags: ["Radiation Pressure"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Intensity of electromagnetic wave will be",
    options: ["mu_0 I / c B_0^2", "epsilon_0 c E_0^2 / 2", "I B_0^2 / c", "epsilon_0 E_0^2 / 2c"],
    correctAnswer: 1, explanation: "Intensity I = average energy density * c = 1/2 epsilon_0 E_0^2 c.", tags: ["Intensity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Decreasing order of wavelength of infrared, microwave, ultraviolet and gamma rays is",
    options: ["microwave, infrared, ultraviolet, gamma rays", "gamma rays, ultraviolet, infrared, micro-waves", "microwaves, gamma rays, infrared, ultraviolet", "infrared, microwave, ultraviolet, gamma rays"],
    correctAnswer: 0, explanation: "Order of wavelength: radio > microwave > infrared > visible > UV > X-ray > gamma. So decreasing order is microwave, infrared, UV, gamma.", tags: ["EM Spectrum"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "Which radiation in sunlight causes heating effect?",
    options: ["Ultraviolet", "Infrared", "Visible light", "All of these"],
    correctAnswer: 1, explanation: "Infrared radiation is often called heat waves as they cause significant heating effect upon absorption.", tags: ["EM Spectrum"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "The speed of electromagnetic wave in vacuum depends upon the source of radiation. It",
    options: ["increases as we move from gamma rays to radio waves", "decreases as we move from gamma rays to radio waves", "is same for all of them", "None of these"],
    correctAnswer: 2, explanation: "Speed of all EM waves in a vacuum is c and is independent of the source or frequency.", tags: ["EM Waves"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 16: Electromagnetic Waves', chapter: 'em-waves', year: 0,
    question: "When EM waves enter ionized layer of ionosphere, motion of electron cloud produces space current. It",
    options: ["is in phase of displacement current", "lags behind displacement current by 180", "lags behind displacement current by 90", "leads the displacement current by 90"],
    correctAnswer: 2, explanation: "The space current (conduction current due to oscillating electrons) lags behind the capacitive displacement current by 90 degrees.", tags: ["Advanced Concepts"], difficulty: "hard", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 more questions for Unit 16 (Part 2).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
