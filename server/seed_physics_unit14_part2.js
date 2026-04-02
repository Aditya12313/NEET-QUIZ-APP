import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Inductor L=2mH, current i = t^2 e^-t. At what time is emf zero?",
    options: ["4s", "3s", "2s", "1s"],
    correctAnswer: 2, explanation: "e = -L(di/dt). e=0 when di/dt = 0. di/dt = 2t e^-t - t^2 e^-t = t e^-t (2-t). Zero at t=2s.", tags: ["Self Induction"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Choke coil works on the principle of",
    options: ["transient current", "self induction", "mutual induction", "wattless current"],
    correctAnswer: 1, explanation: "A choke coil relies on high self-inductance to limit AC current.", tags: ["Self Induction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Coil n turns, resistance R, galvanometer 4R. Moved in time t from flux W1 to W2. Induced current is",
    options: ["-n(W2-W1)/(5Rt)", "-n(W2-W1)/(R t)", "-n(W2-W1)/(5Rt)", "-n(W2-W1)/(R t)"],
    correctAnswer: 0, explanation: "Flux change per turn is (W2-W1). Total flux change n(W2-W1). e = -n(W2-W1)/t. I = e/R_total = -n(W2-W1)/(5Rt).", tags: ["Faraday Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Circular ring area A, perpendicular to field B. Resistance R. Ring suddenly squeezed to zero area. Charge flowing is",
    options: ["ABR", "AB/R", "ABR", "AB/R^2"],
    correctAnswer: 1, explanation: "q = delta(Phi)/R. delta(Flux) = BA - 0 = BA. q = BA/R.", tags: ["Faraday Law", "Charge"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Boat moving east, earth field 5.0x10^-5 north horizontal. Aerial 2m long. Speed 1.5 m/s. Induced emf is",
    options: ["0.75 mV", "0.50 mV", "0.15 mV", "1 mV"],
    correctAnswer: 2, explanation: "e = v B l = 1.5 * 5.0x10^-5 * 2 = 1.5 x 10^-4 V = 0.15 mV.", tags: ["Motional emf"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Coil area 10 cm^2, 10 turns, field perpendicular, changing at 10^8 Gauss/s. Resistance 20 W. Current is",
    options: ["0.5 A", "5 A", "50 A", "5x10^8 A"],
    correctAnswer: 1, explanation: "dB/dt = 10^8 Gauss/s = 10^4 T/s. e = N A dB/dt = 10 * 10x10^-4 * 10^4 = 100 V. I = e/R = 100/20 = 5A.", tags: ["Faraday Law"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Horizontal straight wire 20m long east to west falling 5.0 m/s perpendicular to horizontal magnetic field 0.30x10^-4 Wb/m^2. Instantaneous emf is",
    options: ["3 mV", "4.5 mV", "1.5 mV", "6.0 mV"],
    correctAnswer: 0, explanation: "e = B v l = 0.30x10^-4 * 5 * 20 = 30x10^-4 V = 3 mV.", tags: ["Motional emf"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Self inductance of long solenoid cannot be increased by",
    options: ["increasing its area of cross section", "increasing its length", "changing the medium with greater permeability", "increasing the current through it"],
    correctAnswer: 3, explanation: "Inductance is a property of the coil's geometry and core material, not the current flowing through it.", tags: ["Self Induction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Metallic rod length l, tied to string length 2l and rotated with w on table, one end fixed. Vertical field B. Emf across rod ends is",
    options: ["Bwl^2/2", "3 Bwl^2/2", "4 Bwl^2/2", "5 Bwl^2/2"],
    correctAnswer: 3, explanation: "e = integral from 2l to 3l of (Bwx dx) = Bw/2 * [(3l)^2 - (2l)^2] = Bw/2 * [9l^2 - 4l^2] = 5 Bw l^2 / 2.", tags: ["Motional emf"], difficulty: "hard", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Lenz's law gives",
    options: ["magnitude of induced emf", "direction of induced current", "both magnitude and direction", "magnitude of induced current"],
    correctAnswer: 1, explanation: "Lenz's law specifically determines the direction of the induced current (to oppose the change in flux).", tags: ["Lenz Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Metal ring horizontal, magnet dropped through. Acceleration of magnet is",
    options: ["equal to g", "less than g", "more than g", "depends on diameter"],
    correctAnswer: 1, explanation: "By Lenz's law, induced currents oppose the motion of the magnet, so acceleration is less than g.", tags: ["Lenz Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Pointer of dead-beat galvanometer gives steady deflection because",
    options: ["eddy currents produced in conducting frame over which coil is wound", "its magnet is very strong", "its pointer is very light", "its frame is made of ebonite"],
    correctAnswer: 0, explanation: "Eddy currents damp the motion quickly.", tags: ["Eddy Currents"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Metal rod length l cuts across uniform B with v. Circuit resistance r. Force required to move rod is",
    options: ["B^2 l^2 v / r", "B l v / r", "B^2 l v / r", "B l^2 v / r"],
    correctAnswer: 0, explanation: "e = Blv. I = Blv/r. F = I l B = (Blv/r) l B = B^2 l^2 v / r.", tags: ["Motional emf"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "In A.C. generator, when plane of armature is perpendicular to magnetic field",
    options: ["both magnetic flux and emf are maximum", "both magnetic flux and emf are zero", "both are half of max", "magnetic flux is maximum and emf is zero"],
    correctAnswer: 3, explanation: "Flux = BAcos(0) = max. emf = d(Flux)/dt = 0.", tags: ["AC Generator"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 14: Electromagnetic Induction', chapter: 'electromagnetic-induction', year: 0,
    question: "Copper disc radius 0.1m rotated at 10 rev/sec perpendicular to B=0.1T. emf is",
    options: ["pi/10 volt", "2pi/10 volt", "pi/100 volt", "2pi/100 volt"],
    correctAnswer: 2, explanation: "e = 1/2 B R^2 w = 1/2 * 0.1 * 0.1^2 * 2pi(10) = 1/2 * 0.1 * 0.01 * 20pi = pi * 0.01 = pi/100 V.", tags: ["Motional emf"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 more questions for Unit 14 (Part 2).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
