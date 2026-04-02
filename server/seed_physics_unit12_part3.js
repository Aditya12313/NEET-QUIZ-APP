import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2008,
    question: "Terminal potential difference (V) as function of current (I). Slope and intercept equal (2008)",
    options: ["r and E", "r and -E", "-r and E", "E and -r"],
    correctAnswer: 2, explanation: "V = -rI + E", tags: ["Internal Resistance"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2009,
    question: "Mean free path 4x10^-8m. Electric field for 2eV energy is (2009)",
    options: ["5x10^-11", "8x10^-11", "5x10^7", "8x10^7"],
    correctAnswer: 2, explanation: "eEl = 2eV => E = 5x10^7.", tags: ["Electric Field"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2008,
    question: "Current through 4 ohm is 1A. PD between M and N is (2008)",
    options: ["0.5 V", "3.2 V", "1.5 V", "1.0 V"],
    correctAnswer: 1, explanation: "Circuit analysis.", tags: ["Circuits"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2008,
    question: "Wire stretched slowly by 10%. New resistance and specific resistance become (2008)",
    options: ["both remain same", "1.1 times, 1.1 times", "1.21 times, same", "1.2 times, 1.1 times"],
    correctAnswer: 2, explanation: "R_new = 1.21 R. Rho same.", tags: ["Resistance"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2008,
    question: "Cell balanced against 110cm and 100cm with and without short circuit 10 ohm. Internal resistance (2008)",
    options: ["2.0 Ω", "zero", "1.0 Ω", "0.5 Ω"],
    correctAnswer: 2, explanation: "r = R(l1/l2 - 1) = 10(110/100 - 1) = 1.", tags: ["Potentiometer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2008,
    question: "Electric kettle takes 4A at 220V. Time to boil 1kg water from 20C (2008)",
    options: ["12.6 min", "4.2 min", "6.3 min", "8.4 min"],
    correctAnswer: 2, explanation: "P = VI. Q = mcDT. t = Q/P.", tags: ["Heating Effect"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2008,
    question: "Current 3A flows through 2 ohm. Power dissipated in 5 ohm is (2008)",
    options: ["1 W", "5 W", "4 W", "2 W"],
    correctAnswer: 1, explanation: "Calculated.", tags: ["Power"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2007,
    question: "P, Q, R each 2 ohm, S unknown. Balanced when 6 ohm parallel to S. S is (2007)",
    options: ["3 Ω", "6 Ω", "12 Ω", "2 Ω"],
    correctAnswer: 0, explanation: "S_eq = 2. So S=3.", tags: ["Wheatstone Bridge"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2007,
    question: "Total power dissipated in watt is (2007)",
    options: ["40", "54", "4", "16"],
    correctAnswer: 1, explanation: "Calculated.", tags: ["Power"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2006,
    question: "If wire connected between A and B, current will (2006)",
    options: ["flow B to A", "flow A to B", "decided by V", "be zero"],
    correctAnswer: 0, explanation: "Potential difference.", tags: ["Circuits"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2006,
    question: "Kirchhoff laws are consequences of (2006)",
    options: ["conservation of energy and charge", "conservation of energy", "conservation of electric charge and energy", "conservation of charge"],
    correctAnswer: 2, explanation: "Charge and energy.", tags: ["Kirchhoffs Laws"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2006,
    question: "Power dissipated across 8 ohm is 2W. Power across 3 ohm is (2006)",
    options: ["3.0", "2.0", "1.0", "0.5"],
    correctAnswer: 0, explanation: "Calculated.", tags: ["Power"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2005,
    question: "Two batteries 18V 2 ohm, 12V 1 ohm connected. Voltmeter reading (2005)",
    options: ["30 V", "18 V", "15 V", "14 V"],
    correctAnswer: 3, explanation: "V = (E1/R1 + E2/R2) / (1/R1 + 1/R2) = 14.", tags: ["Cells"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2005,
    question: "Wire length l resistance R bent to circle. Resistance between diametrically opposite is (2005)",
    options: ["R/4", "4R", "R/8", "R/2"],
    correctAnswer: 0, explanation: "Two R/2 in parallel.", tags: ["Resistance"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 12: Current Electricity', chapter: 'current-electricity', year: 2005,
    question: "Value of current i is (2005)",
    options: ["3", "5", "9", "18"],
    correctAnswer: 3, explanation: "Calculated.", tags: ["Circuits"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 more questions for Unit 12.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
