import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2017,
    question: "If theta1 and theta2 be apparent dips in two vertical planes at right angles to each other, then true dip theta is given by",
    options: ["tan^2 theta = tan^2 theta1 + tan^2 theta2", "cot^2 theta = cot^2 theta1 - cot^2 theta2", "tan^2 theta = tan^2 theta1 - tan^2 theta2", "cot^2 theta = cot^2 theta1 + cot^2 theta2"],
    correctAnswer: 3, explanation: "Let the two planes make angles alpha and 90-alpha with the magnetic meridian. tan theta1 = (Bv) / (BH cos alpha). tan theta2 = (Bv) / (BH sin alpha). cot^2 theta1 + cot^2 theta2 = (BH^2 / Bv^2) (cos^2 alpha + sin^2 alpha) = BH^2 / Bv^2 = cot^2 theta.", tags: ["Earth's Magnetism"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2012,
    question: "A compass needle which is allowed to move in a horizontal plane is taken to a geomagnetic pole. It",
    options: ["will become rigid showing no movement", "will stay in any position", "will stay in north-south direction only", "will stay in east-west direction only"],
    correctAnswer: 1, explanation: "At the magnetic poles, the magnetic field is completely vertical. Since the compass needle can only move in a horizontal plane, horizontal field component is zero. So orienting torque is zero and it can stay in any position.", tags: ["Earth's Magnetism"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2001,
    question: "Tangent galvanometer is used to measure",
    options: ["potential difference", "current", "resistance", "charge"],
    correctAnswer: 1, explanation: "A tangent galvanometer measures electric current based on the tangent law of magnetism: I = K tan(theta).", tags: ["Measuring Instruments"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2020,
    question: "Iron rod of susceptibility 599 is subjected to magnetising field 1200 A m^-1. Permeability of material is (mu0 = 4pi x 10^-7 T m A^-1)",
    options: ["2.4pi x 10^-4 T m A^-1", "8.0 x 10^-5 T m A^-1", "2.4pi x 10^-5 T m A^-1", "2.4pi x 10^-7 T m A^-1"],
    correctAnswer: 0, explanation: "mu_r = 1 + chi = 1 + 599 = 600. mu = mu_r * mu0 = 600 * 4pi x 10^-7 = 2400pi x 10^-7 = 2.4pi x 10^-4 T m A^-1.", tags: ["Magnetic Properties of Materials"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2018,
    question: "Thin diamagnetic rod placed vertically between poles of electromagnet. Current switched on, rod is pushed up gaining PE. Work required for this comes from",
    options: ["the current source", "the magnetic field", "the lattice structure of material", "induced electric field"],
    correctAnswer: 0, explanation: "The mechanical work done on the rod (raising PE) must ultimately come from the source of the magnetic energy, which is the current source that establishes and maintains the field.", tags: ["Magnetic Properties of Materials", "Work & Energy"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2016,
    question: "The magnetic susceptibility is negative for",
    options: ["ferromagnetic material only", "paramagnetic and ferromagnetic materials", "diamagnetic material only", "paramagnetic material only"],
    correctAnswer: 2, explanation: "Diamagnetic materials develop an opposing magnetization, so their magnetic susceptibility is negative. Paramagnetic and ferromagnetic materials have positive susceptibility.", tags: ["Magnetic Susceptibility"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2011,
    question: "Four light-weight-rod samples A, B, C, D suspended. Bar magnet brought near: A feebly repelled, B feebly attracted, C strongly attracted, D unaffected. Which is true?",
    options: ["B is of a paramagnetic material", "C is of a diamagnetic material", "D is of a ferromagnetic material", "A is of a non-magnetic material"],
    correctAnswer: 0, explanation: "A (repelled) is diamagnetic. B (weakly attracted) is paramagnetic. C (strongly attracted) is ferromagnetic. D (unaffected) is non-magnetic. Thus 'B is paramagnetic' is true.", tags: ["Magnetic Properties of Materials"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2010,
    question: "The magnetic moment of a diamagnetic atom is",
    options: ["much greater than one", "1", "between zero and one", "equal to zero"],
    correctAnswer: 3, explanation: "In a diamagnetic atom, the net magnetic moment of all electrons is zero because electron spins and orbital components cancel out in closed shells.", tags: ["Atomic Magnetism"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2009,
    question: "If a diamagnetic substance is brought near the north or south pole of a bar magnet, it is",
    options: ["repelled by north and attracted by south", "attracted by north and repelled by south", "attracted by both poles", "repelled by both poles"],
    correctAnswer: 3, explanation: "A diamagnetic substance is always repelled by a magnetic field, so it is repelled by both the north and south poles.", tags: ["Magnetic Properties of Materials"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2008,
    question: "Curie temperature above which",
    options: ["paramagnetic becomes ferromagnetic", "ferromagnetic becomes diamagnetic", "ferromagnetic becomes paramagnetic", "paramagnetic becomes diamagnetic"],
    correctAnswer: 2, explanation: "When a ferromagnetic material is heated above its Curie temperature, the thermal agitation overcomes exchange coupling, and it behaves as a paramagnetic material.", tags: ["Curie's Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2007,
    question: "Nickel shows ferromagnetic property at room temperature. If temperature is increased beyond Curie temperature, it will show",
    options: ["anti ferromagnetism", "no magnetic property", "diamagnetism", "paramagnetism"],
    correctAnswer: 3, explanation: "Above the Curie temperature, ferromagnetic materials like Nickel transform into paramagnetic materials.", tags: ["Curie's Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2005,
    question: "If magnetic dipole moment of atoms of diamagnetic, paramagnetic and ferromagnetic are md, mp and mf respectively, then",
    options: ["md = 0 and mp != 0", "md != 0 and mp = 0", "mp = 0 and mf != 0", "md != 0 and mf != 0"],
    correctAnswer: 0, explanation: "Diamagnetic atoms have zero net magnetic moment (md = 0). Paramagnetic atoms have permanent non-zero dipole moments (mp != 0).", tags: ["Atomic Magnetism"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2003,
    question: "A diamagnetic material in a magnetic field moves",
    options: ["from stronger to weaker parts of the field", "from weaker to stronger parts of the field", "perpendicular to the field", "in none of the above"],
    correctAnswer: 0, explanation: "Diamagnetic materials are repelled by magnetic fields, so they tend to move from regions of stronger magnetic field to regions of weaker magnetic field.", tags: ["Magnetic Properties of Materials"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2003,
    question: "According to Curie's law, the magnetic susceptibility of a substance at an absolute temperature T is proportional to",
    options: ["1/T", "T", "1/T^2", "T^2"],
    correctAnswer: 0, explanation: "Curie's law states that for paramagnetic materials, magnetic susceptibility chi is inversely proportional to the absolute temperature T (chi = C / T).", tags: ["Curie's Law"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2001,
    question: "Among which the magnetic susceptibility does not depend on the temperature?",
    options: ["Diamagnetism", "Paramagnetism", "Ferromagnetism", "Ferrite"],
    correctAnswer: 0, explanation: "The magnetic susceptibility of diamagnetic materials is practically independent of temperature. Paramagnetic susceptibility decreases with temperature (Curie's law).", tags: ["Magnetic Susceptibility"], difficulty: "medium", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 1998,
    question: "For protecting a sensitive equipment from the external magnetic field, it should be",
    options: ["surrounded with fine copper sheet", "placed inside an iron can", "wrapped with insulation", "placed inside an aluminium can"],
    correctAnswer: 1, explanation: "To magnetically shield an object, it should be placed inside a hollow high-permeability material (like soft iron), which 'draws in' the magnetic field lines around the enclosed space.", tags: ["Magnetic Shielding"], difficulty: "easy", verified: true, source: "manual"
  },
  {
    subject: 'physics', unit: 'Unit 22: Magnetism and Matter', chapter: 'magnetism-matter', year: 2010,
    question: "Electromagnets are made of soft iron because soft iron has",
    options: ["low retentivity and high coercive force", "high retentivity and high coercive force", "low retentivity and low coercive force", "high retentivity and low coercive force"],
    correctAnswer: 2, explanation: "Electromagnets need to easily gain and lose their magnetism. Soft iron has low retentivity (so it doesn't stay magnetized when current is off) and low coercivity (it's easy to demagnetize).", tags: ["Hysteresis"], difficulty: "medium", verified: true, source: "manual"
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    await Question.insertMany(questionsToSeed);
    console.log(`Seeded 17 more questions for Unit 22 (Part 2). Total 34 questions in unit.`);
    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}
run();
