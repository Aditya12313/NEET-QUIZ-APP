import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1997,
    question: "In AC circuit with voltage V and current i, power dissipated is (AIPMT 1997)",
    options: ["Depends on phase between V and i", "1/2 V i", "1/sqrt(2) V i", "V i"],
    correctAnswer: 0, explanation: "P = Vrms Irms cos(phi). Average power depends on the phase angle phi.", tags: ["Power"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1996,
    question: "200V AC applied to LCR. XL=50 ohm, XC=50 ohm, R=10 ohm. Impedance is (AIPMT 1996)",
    options: ["10 ohm", "20 ohm", "30 ohm", "40 ohm"],
    correctAnswer: 0, explanation: "Z = sqrt(R^2 + (XL-XC)^2) = sqrt(10^2 + (50-50)^2) = 10 ohm.", tags: ["Impedance"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1994,
    question: "LCR series. At resonance, phase difference between applied voltage and current is (AIPMT 1994)",
    options: ["pi", "pi/2", "pi/4", "zero"],
    correctAnswer: 3, explanation: "At resonance, the circuit behaves as purely resistive. Phase diff = 0.", tags: ["Resonance"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1994,
    question: "In AC circuit, rms current is related to peak current i0 by (AIPMT 1994)",
    options: ["irms = sqrt(2)i0", "irms = pi i0", "irms = i0/pi", "irms = i0/sqrt(2)"],
    correctAnswer: 3, explanation: "By definition for sinusoidal AC.", tags: ["RMS Value"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1992,
    question: "Time constant of C-R circuit is (AIPMT 1992)",
    options: ["1/CR", "C/R", "CR", "R/C"],
    correctAnswer: 2, explanation: "Time constant tau = RC.", tags: ["Transients"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2021,
    question: "Step down transformer 220V to 11V, 44W lamp. Primary current is (NEET 2021)",
    options: ["0.2 A", "0.4 A", "2 A", "4 A"],
    correctAnswer: 0, explanation: "P_in = P_out. Vp Ip = Vs Is. 220 * Ip = 44 W. Ip = 44 / 220 = 0.2 A.", tags: ["Transformer"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2014,
    question: "Transformer efficiency 90% working on 200V, 3kW power. Secondary current 6A. Voltage across secondary and primary current respectively are (AIPMT 2014)",
    options: ["300V, 15A", "450V, 15A", "450V, 13.5A", "600V, 15A"],
    correctAnswer: 1, explanation: "Ip = 3000/200 = 15A. Output power = 0.9 * 3000 = 2700 W. Vs = Pout / Is = 2700 / 6 = 450 V.", tags: ["Transformer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2010,
    question: "220V input to transformer. Output 2.0A at 440V. Efficiency 80%. Primary current is (AIPMT 2010)",
    options: ["3.6 A", "2.8 A", "2.5 A", "5.0 A"],
    correctAnswer: 3, explanation: "P_out = 440 * 2 = 880 W. P_in = P_out / 0.8 = 1100 W. Ip = P_in / Vp = 1100 / 220 = 5 A.", tags: ["Transformer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2008,
    question: "AC circuit V=V0sin(wt), i=i0sin(wt-phi). Average power is (AIPMT 2008)",
    options: ["1/2 V0 i0", "1/2 V0 i0 sin(phi)", "1/2 V0 i0 cos(phi)", "V0 i0"],
    correctAnswer: 2, explanation: "Pavg = Vrms Irms cos(phi) = (V0/sqrt(2)) (i0/sqrt(2)) cos(phi) = 1/2 V0 i0 cos(phi).", tags: ["Power"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2007,
    question: "Transformer light 100W 110V lamp from 220V mains. Main current is 0.5A. Efficiency is (AIPMT 2007)",
    options: ["30%", "50%", "90%", "10%"],
    correctAnswer: 2, explanation: "P_out = 100 W. P_in = 220 * 0.5 = 110 W. Efficiency = 100/110 = 90.9%. Approx 90%.", tags: ["Transformer"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2007,
    question: "Transformer primary 50 turns, secondary 1500 turns. Flux in primary phi = phi0 + 4t. Output voltage across secondary is (AIPMT 2007)",
    options: ["90 V", "120 V", "220 V", "30 V"],
    correctAnswer: 1, explanation: "d(phi)/dt = 4. Vp = 4 V. Vs/Vp = Ns/Np. Vs = 4 * (1500/50) = 4 * 30 = 120 V.", tags: ["Transformer"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 2006,
    question: "Core of transformer is laminated because (AIPMT 2006)",
    options: ["energy losses due to eddy currents minimized", "weight reduced", "rusting prevented", "ratio of voltage increased"],
    correctAnswer: 0, explanation: "Lamination increases resistance for eddy currents, minimizing heat loss.", tags: ["Transformer"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1998,
    question: "Step-up transformer 230V line, supplies 2A. Primary:Secondary turns ratio 1:25. Primary current is (AIPMT 1998)",
    options: ["15 A", "50 A", "25 A", "12.5 A"],
    correctAnswer: 1, explanation: "Ip/Is = Ns/Np (assuming no loss). Ip = Is * 25/1 = 2 * 25 = 50 A.", tags: ["Transformer"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 15: Alternating Current', chapter: 'alternating-current', year: 1997,
    question: "Primary transformer 500 turns, secondary 5000 turns. Primary 20V-50Hz. Secondary output is (AIPMT 1997)",
    options: ["2 V, 5 Hz", "200 V, 500 Hz", "2 V, 50 Hz", "200 V, 50 Hz"],
    correctAnswer: 3, explanation: "Transformers do not change frequency, so f = 50 Hz. Vs/Vp = Ns/Np. Vs = 20 * (5000/500) = 200 V.", tags: ["Transformer"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 14 more questions for Unit 15 (Part 3). Total 42 questions in unit.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
