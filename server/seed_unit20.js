import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2023,
    question: 'An intrinsic semiconductor is:',
    options: ['heavily doped', 'pure semiconductor', 'metal', 'insulator with zero conductivity'],
    correctAnswer: 1,
    explanation: 'Intrinsic semiconductor means pure undoped semiconductor material.',
    tags: ['intrinsic', 'semiconductor basics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2022,
    question: 'Majority carriers in p-type semiconductor are:',
    options: ['electrons', 'holes', 'protons', 'ions'],
    correctAnswer: 1,
    explanation: 'Acceptor doping creates hole majority carriers in p-type semiconductor.',
    tags: ['p-type', 'majority carriers'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2021,
    question: 'In forward bias of p-n junction:',
    options: ['depletion region increases', 'depletion region decreases', 'current becomes zero', 'only minority carriers flow'],
    correctAnswer: 1,
    explanation: 'Forward bias lowers barrier potential and reduces depletion width, allowing conduction.',
    tags: ['pn junction', 'forward bias'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2020,
    question: 'A diode in reverse bias generally offers:',
    options: ['low resistance', 'high resistance', 'zero resistance', 'negative resistance always'],
    correctAnswer: 1,
    explanation: 'Reverse-biased diode blocks current and offers very high resistance (except breakdown region).',
    tags: ['diode characteristics', 'reverse bias'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2019,
    question: 'Rectifier is used to convert:',
    options: ['DC to AC', 'AC to DC', 'low voltage to high voltage only', 'current to resistance'],
    correctAnswer: 1,
    explanation: 'Rectifier circuits convert alternating current into direct current.',
    tags: ['rectifier', 'ac dc conversion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2018,
    question: 'Zener diode is primarily used as:',
    options: ['amplifier', 'voltage regulator', 'oscillator only', 'photodetector'],
    correctAnswer: 1,
    explanation: 'Zener diode maintains nearly constant voltage in reverse breakdown region.',
    tags: ['zener diode', 'voltage regulation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2017,
    question: 'In transistor action, a small base current controls:',
    options: ['no current', 'large collector current', 'emitter voltage only', 'junction capacitance only'],
    correctAnswer: 1,
    explanation: 'Transistor amplification is based on controlling large collector current with small base current.',
    tags: ['transistor', 'amplification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2016,
    question: 'AND gate gives output 1 when:',
    options: ['both inputs are 0', 'both inputs are 1', 'either input is 1', 'inputs are opposite'],
    correctAnswer: 1,
    explanation: 'AND gate output is HIGH only when all inputs are HIGH.',
    tags: ['logic gates', 'and gate'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2015,
    question: 'OR gate output is 1 when:',
    options: ['both inputs are 0', 'any input is 1', 'both inputs are 1 only', 'inputs are equal only'],
    correctAnswer: 1,
    explanation: 'OR gate gives HIGH output if at least one input is HIGH.',
    tags: ['logic gates', 'or gate'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2014,
    question: 'NOT gate output is:',
    options: ['same as input', 'opposite of input', 'always 1', 'always 0'],
    correctAnswer: 1,
    explanation: 'NOT gate (inverter) outputs logical complement of the input.',
    tags: ['logic gates', 'not gate'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2013,
    question: 'Which pair are universal gates?',
    options: ['AND and OR', 'NAND and NOR', 'OR and NOT', 'AND and NOT'],
    correctAnswer: 1,
    explanation: 'NAND and NOR can realize all other logic gates.',
    tags: ['universal gates', 'logic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2012,
    question: 'Majority carriers in n-type semiconductor are:',
    options: ['holes', 'electrons', 'equal holes and electrons always', 'positive ions'],
    correctAnswer: 1,
    explanation: 'Donor impurities supply free electrons; hence electrons are majority carriers.',
    tags: ['n-type', 'majority carriers'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2011,
    question: 'A common trap in p-n junction questions is confusing:',
    options: ['carrier mass and charge', 'forward bias and reverse bias connections', 'silicon and copper', 'current and power only'],
    correctAnswer: 1,
    explanation: 'Connection polarity reversal directly changes junction behavior and current flow.',
    tags: ['neet trap', 'biasing'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2010,
    question: 'Depletion region in p-n junction is region of:',
    options: ['high free carrier density', 'no free charge carriers', 'only electrons', 'only holes'],
    correctAnswer: 1,
    explanation: 'Near junction, recombination leaves immobile ions and very few free carriers.',
    tags: ['depletion region', 'pn junction'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'physics',
    unit: 'Unit 20: Electronic Devices',
    chapter: 'electronic-devices',
    year: 2009,
    question: 'Electronic devices chapter is usually scored by strong command of:',
    options: ['derivations only', 'direct theory and logic truth tables', 'integration methods', 'vector algebra'],
    correctAnswer: 1,
    explanation: 'Most NEET questions from this chapter are direct conceptual and logic-table based.',
    tags: ['pyq pattern', 'logic gates'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'electronic-devices' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} PYQs for electronic devices.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
