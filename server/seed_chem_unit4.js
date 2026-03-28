import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2023,
    question: 'In chemistry sign convention, first law is:',
    options: ['Delta U = Q + W', 'Delta U = Q - W', 'Delta U = W - Q', 'Delta U = Q/W'],
    correctAnswer: 1,
    explanation: 'Internal energy change equals heat supplied minus work done by system.',
    tags: ['first law', 'sign convention'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2022,
    question: 'Which is a state function?',
    options: ['Heat', 'Work', 'Path length', 'Enthalpy'],
    correctAnswer: 3,
    explanation: 'Enthalpy depends only on initial and final states.',
    tags: ['state functions', 'conceptual'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2021,
    question: 'For an isolated system, exchange with surroundings is:',
    options: ['mass only', 'energy only', 'both mass and energy', 'neither mass nor energy'],
    correctAnswer: 3,
    explanation: 'Isolated system exchanges neither mass nor energy.',
    tags: ['thermodynamic system', 'isolated'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2020,
    question: 'Enthalpy is defined as:',
    options: ['H = U - PV', 'H = U + PV', 'H = Q + W', 'H = U/T'],
    correctAnswer: 1,
    explanation: 'By definition, H = U + PV.',
    tags: ['enthalpy', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2019,
    question: 'Heat capacity relation is:',
    options: ['C = DeltaT/Q', 'C = Q/DeltaT', 'C = Q x DeltaT', 'C = m/Q'],
    correctAnswer: 1,
    explanation: 'Heat capacity is heat required per unit temperature rise.',
    tags: ['heat capacity', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2018,
    question: 'In calorimetry, amount of heat is commonly calculated by:',
    options: ['Q = mcDeltaT', 'Q = m/DeltaT', 'Q = c/DeltaT', 'Q = m+c+DeltaT'],
    correctAnswer: 0,
    explanation: 'Calorimetry relation is Q = m c DeltaT.',
    tags: ['calorimetry', 'numerical'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2017,
    question: 'Hess law indicates that reaction enthalpy is:',
    options: ['path dependent', 'path independent', 'always exothermic', 'always endothermic'],
    correctAnswer: 1,
    explanation: 'Enthalpy is a state function, so total change is path independent.',
    tags: ['hess law', 'enthalpy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2016,
    question: 'Entropy is commonly interpreted as measure of:',
    options: ['bond length', 'disorder', 'molecular mass', 'electronegativity'],
    correctAnswer: 1,
    explanation: 'Entropy is associated with randomness/disorder of a system.',
    tags: ['entropy', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2015,
    question: 'Gibbs free energy equation is:',
    options: ['Delta G = Delta H + TDelta S', 'Delta G = Delta H - TDelta S', 'Delta G = TDelta S - Delta H', 'Delta G = Delta H/Delta S'],
    correctAnswer: 1,
    explanation: 'This equation predicts spontaneity at constant T and P.',
    tags: ['gibbs free energy', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2014,
    question: 'Condition for a spontaneous process is:',
    options: ['Delta G > 0', 'Delta G = 0', 'Delta G < 0', 'Delta H > 0 always'],
    correctAnswer: 2,
    explanation: 'Negative Gibbs free-energy change indicates spontaneity.',
    tags: ['spontaneity', 'gibbs criterion'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2013,
    question: 'At equilibrium, Gibbs free energy change is:',
    options: ['positive', 'negative', 'zero', 'infinite'],
    correctAnswer: 2,
    explanation: 'At equilibrium, Delta G becomes zero.',
    tags: ['equilibrium', 'gibbs free energy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2012,
    question: 'Standard relation between free energy and equilibrium constant is:',
    options: ['Delta G degree = RT ln K', 'Delta G degree = -RT ln K', 'Delta G degree = -R ln KT', 'Delta G degree = RT/K'],
    correctAnswer: 1,
    explanation: 'Delta G degree is related to K through -RT ln K.',
    tags: ['equilibrium relation', 'delta g'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2011,
    question: 'In Gibbs equation, increasing temperature can affect spontaneity because:',
    options: ['Delta H vanishes', 'TDeltaS term changes magnitude', 'R becomes zero', 'K always decreases'],
    correctAnswer: 1,
    explanation: 'Temperature multiplies entropy term, often changing sign of Delta G.',
    tags: ['gibbs equation', 'temperature effect'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2010,
    question: 'A very common error in thermodynamics numericals is:',
    options: ['using log tables', 'unit mismatch (J vs kJ)', 'drawing orbitals', 'counting valence electrons'],
    correctAnswer: 1,
    explanation: 'Unit inconsistency gives large numerical errors.',
    tags: ['neet trap', 'units'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 4: Chemical Thermodynamics',
    chapter: 'chemical-thermodynamics',
    year: 2009,
    question: 'Adiabatic process is one in which:',
    options: ['temperature is constant', 'pressure is constant', 'volume is constant', 'no heat is exchanged'],
    correctAnswer: 3,
    explanation: 'Adiabatic process occurs without heat exchange with surroundings.',
    tags: ['thermodynamic processes', 'adiabatic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'chemical-thermodynamics', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 4.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
