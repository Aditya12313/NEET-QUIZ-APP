import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The reverse biasing in a PN junction diode",
    options: ["decreases the potential barrier", "increases the potential barrier", "increases the number of minority charge carriers", "increases the number of majority charge carriers"],
    correctAnswer: 1, explanation: "In reverse biasing, width of depletion layer increases, which increases the potential barrier.", tags: ["p-n Junction"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Two PN-junctions can be connected in series by three different methods. If the potential difference in the junctions is the same, then the correct connections will be",
    options: ["In the circuit (1) and (2)", "In the circuit (2) and (3)", "In the circuit (1) and (3)", "Only in the circuit (1)"],
    correctAnswer: 1, explanation: "In case (1) N is connected with N. This is not a proper series combination of diodes with the same potential difference configuration.", tags: ["p-n Junction"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The approximate ratio of resistances in the forward and reverse bias of the PN-junction diode is",
    options: ["10^2 : 1", "10^-2 : 1", "1 : 10^-4", "1 : 10^4"],
    correctAnswer: 3, explanation: "Resistance in forward biasing is low (approx 10-100 ohm) and reverse biasing is high (approx 10^5 ohm). Ratio is roughly 1 : 10^4.", tags: ["p-n Junction"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The dominant mechanisms for motion of charge carriers in forward and reverse biased silicon P-N junctions are",
    options: ["Drift in forward bias, diffusion in reverse bias", "Diffusion in forward bias, drift in reverse bias", "Diffusion in both forward and reverse bias", "Drift in both forward and reverse bias"],
    correctAnswer: 1, explanation: "In forward biasing the diffusion current increases. In reverse biasing diffusion is difficult so net current (very small) is due to drift.", tags: ["p-n Junction"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "In a triclinic crystal system",
    options: ["a != b != c, alpha != beta != gamma", "a = b = c, alpha != beta != gamma", "a != b != c, alpha != beta = gamma", "a = b = c, alpha = beta = gamma"],
    correctAnswer: 0, explanation: "In a triclinic crystal a != b != c and alpha != beta != gamma != 90 degree.", tags: ["Crystals"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The correct symbol for zener diode is",
    options: ["(a) Z shaped cathode", "(b) Straight cathode", "(c) Curve shaped cathode", "(d) Nothing"],
    correctAnswer: 0, explanation: "Zener diode symbol features a 'Z' shaped cathode line.", tags: ["Diodes"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Which of the following circuits have forward biased diodes?",
    options: ["1, 2 and 3", "1 and 2", "2 and 4", "1 and 3"],
    correctAnswer: 3, explanation: "In forward bias, P type should be at a higher potential than N type.", tags: ["Biasing"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Which of the following materials are crystalline? (1) Copper (2) Sodium chloride (3) Diamond (4) Wood",
    options: ["1, 2 and 3", "1 and 2", "2 and 4", "1 and 3"],
    correctAnswer: 0, explanation: "Wood is non-crystalline and the others are crystalline.", tags: ["Crystals"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Copper and germanium cooled from room temperature to 80 K. Which is wrong?",
    options: ["Resistance of each increases", "Resistance of each decreases", "Copper increases while germanium decreases", "Copper decreases while germanium increases"],
    correctAnswer: 0, explanation: "Resistance of conductors (Cu) decreases with decrease in temperature while that of semi-conductors (Ge) increases with decrease in temperature.", tags: ["Semiconductors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Triode valve Vg=-2.0, Vp=180, Ip=15. Vg=-3.5, Vp=180, Ip=7. Vg=-2.0, Vp=120, Ip=10. Calculate plate resistance rp.",
    options: ["0.12 x 10^4 ohm", "1.2 x 10^4 ohm", "1.3 x 10^4 ohm", "1.4 x 10^4 ohm"],
    correctAnswer: 1, explanation: "rp = Delta Vp / Delta Ip at constant Vg = (180 - 120) / (15 - 10)mA = 60 / 5e-3 = 1.2 x 10^4 ohm.", tags: ["Triode"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Triode valve Vg=-2.0, Vp=180, Ip=15. Vg=-3.5, Vp=180, Ip=7. Calculate mutual conductance gm.",
    options: ["5.33 x 10^-3 ohm^-1", "53.3 x 10^-3 ohm^-1", "4.32 x 10^-3 ohm^-1", "5.00 x 10^-3 ohm^-1"],
    correctAnswer: 0, explanation: "gm = Delta Ip / Delta Vg at constant Vp = (15 - 7)mA / (-2.0 - (-3.5))V = 8e-3 / 1.5 = 5.33 x 10^-3 ohm^-1.", tags: ["Triode"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Triode valve. Calculate amplification factor u.",
    options: ["64", "52", "54", "62"],
    correctAnswer: 0, explanation: "u = rp * gm = (1.2 x 10^4) * (5.33 x 10^-3) = 64.", tags: ["Triode"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Statement-1: Number of electrons in P-type silicon is less than in pure silicon at room temp. Statement-2: It is due to law of mass action.",
    options: ["S1 True, S2 True, S2 correct reason", "S1 True, S2 True, S2 NOT correct reason", "S1 False, S2 True", "S1 True, S2 False"],
    correctAnswer: 0, explanation: "Law of mass action: n_e * n_h = n_i^2. In P-type, n_h is large, so n_e must be less than n_i.", tags: ["Semiconductors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Statement-1: Resistivity of semiconductor decreases with temperature. Statement-2: Atoms vibrate with larger amplitude increasing resistivity.",
    options: ["S1 True, S2 True, S2 correct reason", "S1 True, S2 True, S2 NOT correct reason", "S1 False, S2 True", "S1 True, S2 False"],
    correctAnswer: 3, explanation: "Resistivity decreases because carrier concentration increases drastically. Larger amplitude increases conductivity not resistivity.", tags: ["Semiconductors"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Statement-1: We can measure potential barrier of PN junction by putting sensitive voltmeter. Statement-2: Current through PN junction is not same in forward and reverse bias.",
    options: ["S1 True, S2 True, S2 correct reason", "S1 True, S2 True, S2 NOT correct reason", "S1 False, S2 True", "S1 True, S2 False"],
    correctAnswer: 2, explanation: "Cannot measure potential barrier directly with a voltmeter because of infinite resistance without external bias.", tags: ["p-n Junction"], difficulty: "hard", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 more questions for Unit 20 (Part 2). Total 30 questions in unit.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
