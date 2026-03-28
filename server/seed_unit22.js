import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2023,
    question: 'Magnetic flux linked with a surface is given by:',
    options: ['Phi = BA sin(theta)', 'Phi = BA cos(theta)', 'Phi = B/A', 'Phi = B + A + cos(theta)'],
    correctAnswer: 1,
    explanation: 'Magnetic flux is Phi = B*A*cos(theta), where theta is angle between B and area vector.',
    tags: ['magnetic flux', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2022,
    question: 'Faraday second law states induced emf is proportional to:',
    options: ['flux', 'rate of change of flux', 'current', 'resistance'],
    correctAnswer: 1,
    explanation: 'E = -dPhi/dt, so induced emf depends on rate of change of magnetic flux.',
    tags: ['faraday law', 'induced emf'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2021,
    question: 'The negative sign in E = -dPhi/dt represents:',
    options: ['Ohm law', 'Lenz law', 'Ampere law', 'Kirchhoff law'],
    correctAnswer: 1,
    explanation: 'Negative sign gives direction by Lenz law: induced current opposes cause of change.',
    tags: ['lenz law', 'sign convention'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2020,
    question: 'A rod of length l moves with speed v perpendicular to magnetic field B. Induced emf is:',
    options: ['B/lv', 'Blv', 'Bv/l', 'l/Bv'],
    correctAnswer: 1,
    explanation: 'Motional emf in this configuration is E = Blv.',
    tags: ['motional emf', 'Blv'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2019,
    question: 'Self induced emf in a coil is:',
    options: ['E = -L(dI/dt)', 'E = L(dI/dt)', 'E = -I(dL/dt)', 'E = LI'],
    correctAnswer: 0,
    explanation: 'Self induction relation is E = -L(dI/dt).',
    tags: ['self induction', 'inductance'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2018,
    question: 'SI unit of inductance is:',
    options: ['Tesla', 'Henry', 'Weber', 'Volt'],
    correctAnswer: 1,
    explanation: 'Inductance is measured in henry (H).',
    tags: ['inductance', 'unit'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2017,
    question: 'Energy stored in an inductor carrying current I is:',
    options: ['(1/2)LI^2', 'LI^2', 'L/I^2', '2LI^2'],
    correctAnswer: 0,
    explanation: 'Magnetic energy in inductor is U = (1/2)LI^2.',
    tags: ['inductor energy', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2016,
    question: 'Lenz law is a consequence of conservation of:',
    options: ['mass', 'charge', 'energy', 'momentum'],
    correctAnswer: 2,
    explanation: 'Lenz law ensures induced current opposes change, preserving energy conservation.',
    tags: ['lenz law', 'conservation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2015,
    question: 'If magnetic flux linked with a coil does not change, induced emf is:',
    options: ['maximum', 'infinite', 'zero', 'depends on resistance'],
    correctAnswer: 2,
    explanation: 'From E = -dPhi/dt, if dPhi/dt = 0 then induced emf is zero.',
    tags: ['faraday law', 'flux change'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2014,
    question: 'Mutual induction refers to:',
    options: ['induced emf in same coil due to its own current change', 'induced emf in one coil due to current change in another coil', 'constant current in two coils', 'no emf between nearby coils'],
    correctAnswer: 1,
    explanation: 'Mutual induction is induction between two separate coils due to changing current in one.',
    tags: ['mutual induction', 'concept'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2013,
    question: 'In Phi = BAcos(theta), theta is angle between:',
    options: ['B and plane of loop', 'B and normal to loop area', 'B and current', 'B and emf'],
    correctAnswer: 1,
    explanation: 'Theta is between magnetic field and area vector (normal to plane).',
    tags: ['flux angle', 'common trap'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2012,
    question: 'AC generator converts:',
    options: ['electrical to mechanical energy', 'mechanical to electrical energy', 'heat to electrical energy', 'chemical to electrical energy'],
    correctAnswer: 1,
    explanation: 'AC generator works on EMI and converts mechanical energy into electrical energy.',
    tags: ['ac generator', 'principle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2011,
    question: 'For motional emf E = Blv, if speed doubles (B and l constant), emf becomes:',
    options: ['half', 'same', 'double', 'four times'],
    correctAnswer: 2,
    explanation: 'E is directly proportional to v in E = Blv.',
    tags: ['motional emf', 'proportionality'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2010,
    question: 'If loop area increases in constant B field, induced emf appears because:',
    options: ['current changes directly', 'resistance changes', 'flux changes', 'temperature changes'],
    correctAnswer: 2,
    explanation: 'Flux Phi = BAcos(theta), so changing area changes flux and induces emf.',
    tags: ['flux', 'induced emf'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 14: Electromagnetic Induction (EMI)',
    chapter: 'electromagnetic-induction',
    year: 2009,
    question: 'A coil opposes change in its own current because of:',
    options: ['capacitance', 'resistance', 'self induction', 'mutual induction only'],
    correctAnswer: 2,
    explanation: 'Self induction produces back emf that opposes change in current in the same coil.',
    tags: ['self induction', 'back emf'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'electromagnetic-induction' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for electromagnetic induction.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
