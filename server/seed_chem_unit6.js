import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2023,
    question: 'At chemical equilibrium, forward and backward reaction rates are:',
    options: ['zero', 'equal', 'always maximum', 'always minimum'],
    correctAnswer: 1,
    explanation: 'Dynamic equilibrium occurs when both rates become equal.',
    tags: ['chemical equilibrium', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2022,
    question: 'Correct relation for gaseous equilibrium constants is:',
    options: ['Kp = Kc + RT', 'Kp = Kc(RT)^Delta n', 'Kp = Kc/RT', 'Kp = RT/Kc'],
    correctAnswer: 1,
    explanation: 'For gaseous reactions, Kp and Kc are linked by (RT)^Delta n.',
    tags: ['Kp Kc relation', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2021,
    question: 'If reaction quotient Q is less than K, reaction proceeds:',
    options: ['backward', 'forward', 'to stop immediately', 'in no fixed direction'],
    correctAnswer: 1,
    explanation: 'Q < K indicates products are less than equilibrium amount, so forward reaction is favored.',
    tags: ['reaction quotient', 'direction prediction'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2020,
    question: 'According to Le Chatelier principle, increasing concentration of reactant causes equilibrium to shift:',
    options: ['toward reactants', 'toward products', 'no shift', 'randomly'],
    correctAnswer: 1,
    explanation: 'System shifts to consume added reactant, favoring forward direction.',
    tags: ['le chatelier', 'concentration effect'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2019,
    question: 'Temperature change affects equilibrium by:',
    options: ['changing catalyst', 'changing K value', 'changing only pressure', 'no effect at all'],
    correctAnswer: 1,
    explanation: 'Equilibrium constant depends on temperature.',
    tags: ['equilibrium constant', 'temperature effect'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2018,
    question: 'Catalyst in an equilibrium reaction:',
    options: ['changes K', 'changes equilibrium composition', 'only speeds attainment of equilibrium', 'stops backward reaction'],
    correctAnswer: 2,
    explanation: 'Catalyst accelerates both forward and backward rates equally.',
    tags: ['catalyst', 'equilibrium'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2017,
    question: 'pH is defined as:',
    options: ['log[H+]', '-log[H+]', '-log[OH-]', 'log[OH-]'],
    correctAnswer: 1,
    explanation: 'By definition pH = -log10[H+].',
    tags: ['pH', 'acid base'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2016,
    question: 'At 25 C, if pH = 3 then pOH is:',
    options: ['11', '7', '3', '14'],
    correctAnswer: 0,
    explanation: 'pH + pOH = 14, so pOH = 11.',
    tags: ['pH pOH relation', 'numerical'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2015,
    question: 'Relation between Ka and Kb for conjugate pair in water is:',
    options: ['Ka + Kb = Kw', 'Ka x Kb = Kw', 'Ka/Kb = Kw', 'Ka = Kb'],
    correctAnswer: 1,
    explanation: 'For conjugate acid-base pair, product of Ka and Kb equals Kw.',
    tags: ['Ka Kb Kw', 'formula'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2014,
    question: 'Buffer solution is one that:',
    options: ['always has pH 7', 'resists change in pH on dilution or small acid/base addition', 'contains only strong acid', 'contains only strong base'],
    correctAnswer: 1,
    explanation: 'Buffer solutions maintain pH approximately constant against small disturbances.',
    tags: ['buffer', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2013,
    question: 'Henderson equation for acidic buffer is:',
    options: ['pH = pKa + log([salt]/[acid])', 'pH = pKa + log([acid]/[salt])', 'pH = pKa - log([salt]/[acid])', 'pH = pKa x [acid]/[salt]'],
    correctAnswer: 0,
    explanation: 'Standard Henderson-Hasselbalch form for acidic buffer.',
    tags: ['buffer', 'henderson equation'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2012,
    question: 'Ksp is used for:',
    options: ['highly soluble salts', 'sparingly soluble salts', 'gases only', 'only strong acids'],
    correctAnswer: 1,
    explanation: 'Solubility product is defined for sparingly soluble ionic compounds.',
    tags: ['ksp', 'solubility product'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2011,
    question: 'Common ion effect generally:',
    options: ['increases solubility', 'decreases solubility', 'has no effect', 'changes pH only'],
    correctAnswer: 1,
    explanation: 'Presence of common ion suppresses dissociation and decreases solubility.',
    tags: ['common ion effect', 'solubility'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2010,
    question: 'A common mistake in equilibrium numericals is:',
    options: ['using balanced equations', 'mixing strong and weak acid assumptions', 'using logarithm', 'using pH scale'],
    correctAnswer: 1,
    explanation: 'Strong acids/bases fully dissociate while weak electrolytes require equilibrium treatment.',
    tags: ['neet trap', 'acid base'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 6: Equilibrium',
    chapter: 'equilibrium-chem',
    year: 2009,
    question: 'For reaction at equilibrium, Q is:',
    options: ['less than K always', 'greater than K always', 'equal to K', 'unrelated to K'],
    correctAnswer: 2,
    explanation: 'At equilibrium, reaction quotient equals equilibrium constant.',
    tags: ['Q and K', 'equilibrium condition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'equilibrium-chem', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 6.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
