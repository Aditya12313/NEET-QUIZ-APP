import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "When a semiconductor is heated, its resistance",
    options: ["decreases", "increases", "reamins unchanged", "nothing is definite"],
    correctAnswer: 0, explanation: "With temperature rise conductivity of semiconductors increases, so resistance decreases.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The energy band gap of Si is",
    options: ["0.70 eV", "1.1 eV", "between 0.70 eV to 1.1eV", "5 eV"],
    correctAnswer: 1, explanation: "Silicon has an energy band gap of approximately 1.1 eV at room temperature.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The forbidden energy band gap in conductors, semiconductors and insulators are EG1, EG2 and EG3 respectively. The relation among them is",
    options: ["EG1 = EG2 = EG3", "EG1 < EG2 < EG3", "EG1 > EG2 > EG3", "EG1 < EG2 > EG3"],
    correctAnswer: 1, explanation: "In insulators, the forbidden energy gap is very large, in case of semiconductor it is moderate and in conductors the energy gap is zero.", tags: ["Energy Bands"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Let nh and ne be the number of holes and conduction electrons respectively in a semiconductor. Then",
    options: ["nh > ne in an intrinsic semiconductor", "nh = ne in an extrinsic semiconductor", "nh = ne in an intrinsic semiconductor", "ne > nh in an intrinsic semiconductor"],
    correctAnswer: 2, explanation: "In intrinsic semiconductors, the creation or liberation of one free electron by the thermal energy creates one hole. Thus nh = ne.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Which statement is correct?",
    options: ["N-type negatively charged and P-type positively charged", "Both N-type and P-type are neutral", "N-type positively charged and P-type negatively charged", "Both N-type and P-type are negatively charged"],
    correctAnswer: 1, explanation: "Both P-type and N-type semiconductors are neutral because neutral atoms are added during doping.", tags: ["Doping"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Wires P and Q have the same resistance at room temperature. When heated, resistance of P increases and that of Q decreases. We conclude that",
    options: ["P and Q are conductors of different materials", "P is n-type semiconductor and Q is p-type semiconductor", "P is semiconductor and Q is conductor", "P is conductor and Q is semiconductor"],
    correctAnswer: 3, explanation: "Conductor has positive temperature coefficient of resistance but semiconductor has negative temperature coefficient of resistance.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "In extrinsic P and N-type semiconductor materials, the ratio of the impurity atoms to the pure semiconductor atoms is about",
    options: ["1", "10^-1", "10^-4", "10^-7"],
    correctAnswer: 3, explanation: "Standard doping concentration is in the order of 1 in 10^7 or 10^8 atoms.", tags: ["Doping"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "At zero Kelvin a piece of germanium",
    options: ["becomes semiconductor", "becomes good conductor", "becomes bad conductor", "has maximum conductivity"],
    correctAnswer: 2, explanation: "At zero Kelvin, there is no thermal agitation and therefore no electrons from valence band are able to shift to conduction band. It acts as an insulator / bad conductor.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Electronic configuration of germanium is 2, 8, 18 and 4. To make it extrinsic semiconductor small quantity of antimony is added",
    options: ["Obtain N-type in which electrons and holes equal", "Obtain P-type germanium", "Obtain N-type with more electrons than holes", "Obtain N-type with less electrons than holes"],
    correctAnswer: 2, explanation: "Antimony is a fifth group impurity and is therefore a donor of electrons, making it an N-type semiconductor.", tags: ["Doping"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The intrinsic semiconductor becomes an insulator at",
    options: ["0°C", "-100°C", "300 K", "0 K"],
    correctAnswer: 3, explanation: "At 0K temperature semiconductor behaves as an insulator, because electrons cannot jump from the valence band to conduction band.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Energy bands in solids are a consequence of",
    options: ["Ohm's Law", "Pauli's exclusion principle", "Bohr's theory", "Heisenberg's uncertainty principle"],
    correctAnswer: 1, explanation: "Formation of energy bands in solids are due to Pauli's exclusion principle interacting over many closely spaced atoms.", tags: ["Energy Bands"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The energy gap for diamond is nearly",
    options: ["1 eV", "2 eV", "4 eV", "6 eV"],
    correctAnswer: 3, explanation: "Diamond is an insulator with a large band gap of roughly 5.5 to 6 eV.", tags: ["Energy Bands"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "The valence band and conduction band of a solid overlap at low temperature, the solid may be",
    options: ["metal", "semiconductor", "insulator", "None of these"],
    correctAnswer: 0, explanation: "In conductors (metals), the valence band and conduction band overlap.", tags: ["Energy Bands"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "Choose the correct statement",
    options: ["When heat a semiconductor its resistance increases", "When heat a semiconductor its resistance decreases", "When cool semiconductor to 0K it becomes super conductor", "Resistance of semiconductor is independent of temperature"],
    correctAnswer: 1, explanation: "With rise in temperature, conductivity of semiconductor increases while resistance decreases.", tags: ["Semiconductors"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 20: Electronic Devices', chapter: 'electronic-devices', year: 0,
    question: "If ne and vd be the number of electrons and drift velocity in a semiconductor. When the temperature is increased",
    options: ["ne increases and vd decreases", "ne decreases and vd increases", "Both ne and vd increases", "Both ne and vd decreases"],
    correctAnswer: 0, explanation: "When temperature increases, concentration of carriers (ne) increases drastically. Drift velocity (vd) decreases somewhat due to increased collisions.", tags: ["Semiconductors"], difficulty: "hard", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({ chapter: 'electronic-devices' });
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 15 questions for Unit 20 (Part 1).`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
