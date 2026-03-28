import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2023,
    question: 'General electronic configuration of transition elements is:',
    options: ['ns2 np1-6', '(n-1)d1-10 ns1-2', 'nf1-14 (n+1)s2', 'ns1 np6'],
    correctAnswer: 1,
    explanation: 'd-Block elements typically have valence pattern (n-1)d1-10 ns1-2.',
    tags: ['electronic configuration', 'd-block'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2022,
    question: 'Variable oxidation states in transition metals occur due to:',
    options: ['fixed valence shell', 'comparable energies of ns and d orbitals', 'absence of d orbitals', 'radioactivity only'],
    correctAnswer: 1,
    explanation: 'Both ns and (n-1)d electrons can participate in bonding.',
    tags: ['oxidation states', 'transition elements'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2021,
    question: 'Color of many transition-metal compounds is due to:',
    options: ['nuclear transitions', 'd-d electronic transitions', 's-p overlap', 'ionic bond only'],
    correctAnswer: 1,
    explanation: 'Absorption in visible region due to d-d transitions gives color.',
    tags: ['color', 'd-d transition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2020,
    question: 'Paramagnetic substances contain:',
    options: ['no unpaired electrons', 'unpaired electrons', 'only paired d-electrons', 'only s-electrons'],
    correctAnswer: 1,
    explanation: 'Unpaired electrons produce magnetic moment and paramagnetism.',
    tags: ['magnetism', 'paramagnetic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2019,
    question: 'Diamagnetic species have:',
    options: ['all electrons paired', 'at least one unpaired electron', 'only f-electrons', 'high oxidation state only'],
    correctAnswer: 0,
    explanation: 'Complete pairing results in diamagnetism.',
    tags: ['magnetism', 'diamagnetic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2018,
    question: 'A common oxidation state pair for iron is:',
    options: ['+1, +2', '+2, +3', '+3, +5', '+4, +6'],
    correctAnswer: 1,
    explanation: 'Fe commonly exists in +2 and +3 states.',
    tags: ['oxidation states', 'iron'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2017,
    question: 'Manganese can show oxidation states up to:',
    options: ['+3', '+5', '+7', '+8'],
    correctAnswer: 2,
    explanation: 'Mn exhibits a wide range, including +7.',
    tags: ['oxidation states', 'manganese'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2016,
    question: 'Which is a strong oxidizing agent?',
    options: ['KMnO4', 'NaCl', 'K2SO4', 'CaCO3'],
    correctAnswer: 0,
    explanation: 'Potassium permanganate acts as a strong oxidizer.',
    tags: ['important compounds', 'kmno4'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2015,
    question: 'K2Cr2O7 is important mainly as:',
    options: ['reducing agent', 'oxidizing agent', 'acid catalyst only', 'neutral salt only'],
    correctAnswer: 1,
    explanation: 'Potassium dichromate is a strong oxidizing agent.',
    tags: ['important compounds', 'dichromate'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2014,
    question: 'Lanthanoids have general pattern:',
    options: ['3d1-10 4s2', '4f1-14 5d0-1 6s2', '5f1-14 6d0-1 7s2', 'ns2 np6'],
    correctAnswer: 1,
    explanation: 'This is the usual lanthanoid electronic configuration trend.',
    tags: ['f-block', 'lanthanoids'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2013,
    question: 'Most common oxidation state of lanthanoids is:',
    options: ['+1', '+2', '+3', '+4'],
    correctAnswer: 2,
    explanation: 'Lanthanoids predominantly show +3 oxidation state.',
    tags: ['lanthanoids', 'oxidation state'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2012,
    question: 'Lanthanoid contraction means:',
    options: ['increase in size across series', 'decrease in size across lanthanoids', 'constant size across series', 'size change only in actinoids'],
    correctAnswer: 1,
    explanation: 'Poor shielding by 4f electrons causes gradual contraction.',
    tags: ['lanthanoid contraction', 'trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2011,
    question: 'Actinoids are generally:',
    options: ['stable and non-radioactive', 'radioactive with variable oxidation states', 'noble gases', 'alkali metals'],
    correctAnswer: 1,
    explanation: 'Actinoids are mostly radioactive and show multiple oxidation states.',
    tags: ['actinoids', 'properties'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2010,
    question: 'Transition metals form complexes readily because they have:',
    options: ['only s orbitals', 'vacant orbitals and suitable charge density', 'very low melting points only', 'no variable valency'],
    correctAnswer: 1,
    explanation: 'Availability of orbitals and charge/size features favor coordination.',
    tags: ['complex formation', 'transition metals'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 11: d- and f-Block Elements',
    chapter: 'd-f-block-elements',
    year: 2009,
    question: 'A frequent trap in this unit is confusing:',
    options: ['d and f block features', 'acids and bases', 'p and s block only', 'states of matter'],
    correctAnswer: 0,
    explanation: 'Questions often test distinction between transition and inner-transition behavior.',
    tags: ['neet trap', 'd-f comparison'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'd-f-block-elements', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 11.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
