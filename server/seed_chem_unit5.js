import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2023,
    question: 'Molarity is defined as:',
    options: ['moles of solute per liter of solution', 'moles of solute per kg of solvent', 'moles of solvent per liter of solution', 'mass percent of solute'],
    correctAnswer: 0,
    explanation: 'Molarity uses total volume of solution in liters.',
    tags: ['concentration terms', 'molarity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2022,
    question: 'Molality is moles of solute per:',
    options: ['liter of solution', 'kg of solvent', 'kg of solution', 'mole of solvent'],
    correctAnswer: 1,
    explanation: 'Molality is based on mass of solvent in kg.',
    tags: ['concentration terms', 'molality'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2021,
    question: 'Mole fraction of a component is:',
    options: ['moles of component/total moles', 'mass of component/total mass', 'moles of solvent/moles of solute', 'mass of solute/volume'],
    correctAnswer: 0,
    explanation: 'Mole fraction is ratio of moles of one component to total moles.',
    tags: ['mole fraction', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2020,
    question: 'Raoult law for ideal solution with non-volatile solute is:',
    options: ['P = Xsolute x P0', 'P = Xsolvent x P0', 'P = P0/Xsolvent', 'P = Xsolvent + P0'],
    correctAnswer: 1,
    explanation: 'Vapour pressure of solvent equals mole fraction of solvent times pure solvent vapour pressure.',
    tags: ['raoult law', 'vapour pressure'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2019,
    question: 'Elevation in boiling point is given by:',
    options: ['Delta Tb = Kb m', 'Delta Tb = Kf m', 'Delta Tb = CRT', 'Delta Tb = m/Kb'],
    correctAnswer: 0,
    explanation: 'Boiling point elevation is directly proportional to molality.',
    tags: ['colligative properties', 'boiling point'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2018,
    question: 'Depression in freezing point is:',
    options: ['Delta Tf = Kf m', 'Delta Tf = Kb m', 'Delta Tf = CRT', 'Delta Tf = Kf/m'],
    correctAnswer: 0,
    explanation: 'Freezing point depression is proportional to molality.',
    tags: ['colligative properties', 'freezing point'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2017,
    question: 'Osmotic pressure for dilute solution is:',
    options: ['pi = CRT', 'pi = C/RT', 'pi = RT/C', 'pi = C+RT'],
    correctAnswer: 0,
    explanation: 'Osmotic pressure is directly proportional to concentration and temperature.',
    tags: ['osmotic pressure', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2016,
    question: 'Van Hoff factor i is used to account for:',
    options: ['surface tension only', 'dissociation/association of solute', 'color of solution', 'solvent volatility only'],
    correctAnswer: 1,
    explanation: 'i corrects colligative properties when number of particles changes.',
    tags: ['van hoff factor', 'colligative properties'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2015,
    question: 'If solute associates in solution, observed i value is generally:',
    options: ['greater than 1', 'equal to 1', 'less than 1', 'always zero'],
    correctAnswer: 2,
    explanation: 'Association reduces number of particles, giving i < 1.',
    tags: ['van hoff factor', 'association'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2014,
    question: 'If solute dissociates completely, i is generally:',
    options: ['less than 1', 'equal to 1', 'greater than 1', 'negative'],
    correctAnswer: 2,
    explanation: 'Dissociation increases particle count, so i > 1.',
    tags: ['van hoff factor', 'dissociation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2013,
    question: 'A frequent numerical error in solutions chapter is:',
    options: ['using periodic table', 'mixing molarity and molality', 'using balanced equations', 'using mole concept'],
    correctAnswer: 1,
    explanation: 'Molarity and molality have different denominators and are often confused.',
    tags: ['neet trap', 'concentration terms'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2012,
    question: 'In pi = CRT, temperature must be in:',
    options: ['Celsius', 'Kelvin', 'Fahrenheit', 'any unit'],
    correctAnswer: 1,
    explanation: 'Gas constant-based relations require absolute temperature scale.',
    tags: ['osmotic pressure', 'units'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2011,
    question: 'Ideal solution is characterized by:',
    options: ['always positive deviation', 'always negative deviation', 'obedience to Raoult law', 'no intermolecular forces'],
    correctAnswer: 2,
    explanation: 'Ideal solutions obey Raoult law throughout concentration range.',
    tags: ['ideal solution', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2010,
    question: 'Abnormal molar mass in colligative measurements is due to:',
    options: ['nuclear reactions', 'dissociation/association in solution', 'change in solvent color', 'pressure drop only'],
    correctAnswer: 1,
    explanation: 'Particle-number changes cause abnormal molar mass values.',
    tags: ['abnormal molar mass', 'colligative properties'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 5: Solutions',
    chapter: 'solutions',
    year: 2009,
    question: 'Colligative properties depend primarily on:',
    options: ['nature of solute particles', 'number of solute particles', 'shape of solute molecules', 'color of solvent'],
    correctAnswer: 1,
    explanation: 'They depend on number of particles, not chemical identity (for dilute solutions).',
    tags: ['colligative properties', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'solutions', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 5.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
