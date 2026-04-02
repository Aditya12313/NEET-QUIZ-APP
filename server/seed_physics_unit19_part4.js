import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Solar energy is mainly caused due to (2003)",
    options: ["burning hydrogen in oxygen", "fission of uranium", "fusion of protons", "gravitational contraction"],
    correctAnswer: 2, explanation: "Nuclear fusion of hydrogen into helium.", tags: ["Nuclear Reactions"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Volume occupied by atom is greater than nucleus by factor of about (2003)",
    options: ["10^1", "10^5", "10^10", "10^15"],
    correctAnswer: 3, explanation: "R_atom ~ 10^-10 m, R_nucleus ~ 10^-15 m. Volume ratio is (10^5)^3 = 10^15.", tags: ["Nuclear Properties"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Element 10g at t=0. Mass after two mean lives (2003)",
    options: ["1.35 g", "2.50 g", "3.70 g", "6.30 g"],
    correctAnswer: 0, explanation: "m = m0 e^(-t/tau). t = 2tau => m = 10 e^-2 = 10 * 0.1353 = 1.35 g.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Radius first orbit minimum in (2003)",
    options: ["doubly ionized lithium", "singly ionized helium", "deuterium atom", "hydrogen atom"],
    correctAnswer: 0, explanation: "r prop 1/Z. Li++ has Z=3, smallest radius.", tags: ["Bohr Model"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Mp 1.0073, Mn 1.0087. He mass 4.0015. Binding energy He (2003)",
    options: ["0.0305 J", "0.0305 erg", "28.4 MeV", "0.061 u"],
    correctAnswer: 2, explanation: "Mass defect = 2(1.0073) + 2(1.0087) - 4.0015 = 4.032 - 4.0015 = 0.0305 u. BE = 0.0305 * 931.5 = 28.4 MeV.", tags: ["Binding Energy"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Mass number of nucleus is (2003)",
    options: ["always less than atomic number", "always more than atomic number", "sometimes equal", "sometimes less sometimes more"],
    correctAnswer: 2, explanation: "Equal for Hydrogen (A=1, Z=1). Usually more.", tags: ["Nuclear Properties"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2003,
    question: "Nuclear reaction Na(22,11) -> Ne(22,10) + e+ + v represents (2003)",
    options: ["beta-decay", "gamma-decay", "fusion", "fission"],
    correctAnswer: 0, explanation: "Emission of positron (beta plus). Included generally in beta decay.", tags: ["Radioactivity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2002,
    question: "Suitable for fusion process (2002)",
    options: ["light nuclei", "heavy nuclei", "elements middle", "elements middle on BE curve"],
    correctAnswer: 0, explanation: "Light nuclei fuse to become heavier and more stable.", tags: ["Nuclear Reactions"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2002,
    question: "4e16 active nuclei. Half life 10 days. Decayed after 30 days (2002)",
    options: ["0.5e16", "2e16", "3.5e16", "1e16"],
    correctAnswer: 2, explanation: "3 half lives -> 1/8 remains = 0.5e16. Decayed = 4e16 - 0.5e16 = 3.5e16.", tags: ["Radioactivity"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2002,
    question: "Deutron bombarded on O(16,8) nucleus. Alpha emitted. Product is (2002)",
    options: ["N(13,7)", "B(10,5)", "Be(8,4)", "N(14,7)"],
    correctAnswer: 3, explanation: "O(16,8) + H(2,1) -> He(4,2) + X(14,7). Element Z=7 is Nitrogen.", tags: ["Nuclear Reactions"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2001,
    question: "Which rays contain positively charged particles? (2001)",
    options: ["alpha rays", "beta rays", "gamma rays", "X-rays"],
    correctAnswer: 0, explanation: "Alpha particles are helium nuclei.", tags: ["Radioactivity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2001,
    question: "X(n, alpha) Li(7,3) means X+n -> Li(7,3)+alpha. X will be (2001)",
    options: ["B(10,5)", "B(11,5)", "Be(9,4)", "He(4,2)"],
    correctAnswer: 0, explanation: "X + n(1,0) -> Li(7,3) + He(4,2). Mass A = 7+4-1 = 10. Z = 3+2-0 = 5. Boron-10.", tags: ["Nuclear Reactions"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2001,
    question: "Half life 12.5 hour, quantity 256g. 1g remains after (2001)",
    options: ["50 hrs", "100 hrs", "150 hrs", "200 hrs"],
    correctAnswer: 1, explanation: "256 to 1 is 1/256 = (1/2)^8. 8 half lives. 8 * 12.5 = 100 hours.", tags: ["Radioactivity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2001,
    question: "Interplanar distance 2.8e-8 m. Maximum wavelength diffracted (2001)",
    options: ["2.8e-8", "5.6e-8", "1.4e-8", "7.6e-8"],
    correctAnswer: 1, explanation: "2d sin(theta) = n L. Max L for n=1, sin=1. L = 2d = 5.6e-8 m.", tags: ["Atomic Structure"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2001,
    question: "Energy H in nth orbit En. Energy in nth orbit He+ (2001)",
    options: ["4En", "En/4", "2En", "En/2"],
    correctAnswer: 0, explanation: "E prop Z^2. For He, Z=2. So 4En.", tags: ["Bohr Model"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2001,
    question: "Mn neutron, Mp proton. Mass M with N neutrons, Z protons. Correct relation (2001)",
    options: ["M < NM_n + ZM_p", "M > NM_n + ZM_p", "M = NM_n + ZM_p", "M = N(M_n + M_p)"],
    correctAnswer: 0, explanation: "Mass defect makes nuclear mass less than sum of nucleons.", tags: ["Binding Energy"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2000,
    question: "Reaction C(11,6) -> B(11,5) + e+ + X. X is (2000)",
    options: ["neutron", "anti neutrino", "neutrino", "proton"],
    correctAnswer: 2, explanation: "Positron emission is accompanied by a neutrino.", tags: ["Radioactivity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2000,
    question: "Maximum frequency emission transition (2000)",
    options: ["n=2 to n=1", "n=6 to n=2", "n=1 to n=2", "n=2 to n=6"],
    correctAnswer: 0, explanation: "Emission means higher to lower. 2 to 1 (10.2 eV) is > 6 to 2 (approx 3.02 eV).", tags: ["Atomic Spectra"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2000,
    question: "Relation between lambda and T1/2 (2000)",
    options: ["T1/2 = ln2/lambda", "T1/2(ln2)=lambda", "lambda T1/2 = 1", "lambda + T1/2 = ln2"],
    correctAnswer: 0, explanation: "Standard definition.", tags: ["Radioactivity"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 19: Atoms and Nuclei', chapter: 'atoms-nuclei', year: 2000,
    question: "Nuclear fission best explained by (2000)",
    options: ["liquid drop model", "shell model", "quark model", "independent particle model"],
    correctAnswer: 0, explanation: "Fission resembles division of liquid drop.", tags: ["Nuclear Fission"], difficulty: "easy", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 20 more questions for Unit 19 (Part 4). Total 86-90 approx questions in unit.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
