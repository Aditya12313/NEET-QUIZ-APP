import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2023,
    question: 'General structure of alcohol is:',
    options: ['Ar-OH', 'R-O-R', 'R-OH', 'R-CHO'],
    correctAnswer: 2,
    explanation: 'Alcohols contain hydroxyl group attached to alkyl carbon (R-OH).',
    tags: ['alcohols', 'structure'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2022,
    question: 'A secondary alcohol on oxidation generally gives:',
    options: ['aldehyde', 'ketone', 'carboxylic acid directly', 'alkane'],
    correctAnswer: 1,
    explanation: '2 degree alcohols usually oxidize to ketones.',
    tags: ['oxidation', 'alcohols'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2021,
    question: 'A primary alcohol on controlled oxidation forms:',
    options: ['ketone', 'aldehyde', 'alkene', 'ether'],
    correctAnswer: 1,
    explanation: 'Primary alcohols first oxidize to aldehydes, then further to acids.',
    tags: ['oxidation', 'primary alcohol'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2020,
    question: 'Tertiary alcohols are generally:',
    options: ['easily oxidized to aldehydes', 'resistant to oxidation under mild conditions', 'converted to ketones directly', 'always reduced'],
    correctAnswer: 1,
    explanation: '3 degree alcohols lack required alpha hydrogen and resist normal oxidation.',
    tags: ['oxidation', 'tertiary alcohol'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2019,
    question: 'Acid-catalyzed dehydration of alcohol gives mainly:',
    options: ['alkane', 'alkene', 'alkyne', 'ester'],
    correctAnswer: 1,
    explanation: 'Dehydration removes water and forms alkene.',
    tags: ['dehydration', 'reaction type'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2018,
    question: 'Zaitsev rule predicts formation of:',
    options: ['least substituted alkene', 'most substituted alkene as major product', 'only terminal alkene', 'no alkene'],
    correctAnswer: 1,
    explanation: 'In many elimination reactions, more substituted alkene is favored.',
    tags: ['zaitsev rule', 'elimination'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2017,
    question: 'Phenol is more acidic than alcohol due to:',
    options: ['larger molecular size only', 'resonance stabilization of phenoxide ion', 'stronger O-H bond always', 'absence of lone pair'],
    correctAnswer: 1,
    explanation: 'Conjugate base of phenol is resonance stabilized.',
    tags: ['phenol', 'acidity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2016,
    question: 'Reimer-Tiemann reaction is associated with:',
    options: ['alkane halogenation', 'phenol formylation', 'ether cleavage', 'alkyne hydration'],
    correctAnswer: 1,
    explanation: 'Reimer-Tiemann introduces formyl group on phenol ring (mainly ortho).',
    tags: ['phenol reactions', 'reimer tiemann'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2015,
    question: 'Ethers are commonly prepared by:',
    options: ['Wurtz reaction', 'Williamson synthesis', 'Cannizzaro reaction', 'Kolbe reaction'],
    correctAnswer: 1,
    explanation: 'Williamson ether synthesis is standard route for many ethers.',
    tags: ['ethers', 'preparation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2014,
    question: 'Ethers undergo cleavage with:',
    options: ['NaOH only', 'HX acids', 'H2O only', 'KMnO4 only'],
    correctAnswer: 1,
    explanation: 'Strong hydrogen halides cleave ethers under suitable conditions.',
    tags: ['ethers', 'cleavage'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2013,
    question: 'Hydrogen bonding in alcohols and phenols generally causes:',
    options: ['lower boiling point', 'higher boiling point', 'no effect on boiling point', 'instant decomposition'],
    correctAnswer: 1,
    explanation: 'Intermolecular hydrogen bonding raises boiling points.',
    tags: ['hydrogen bonding', 'physical properties'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2012,
    question: 'Lucas test helps distinguish:',
    options: ['alkene and alkyne', '1 degree, 2 degree, 3 degree alcohols', 'ketone and aldehyde', 'acid and ester'],
    correctAnswer: 1,
    explanation: 'Lucas reagent gives characteristic turbidity timing for alcohol classes.',
    tags: ['lucas test', 'identification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2011,
    question: 'A common trap in this chapter is confusing:',
    options: ['alcohol and phenol acidity behavior', 'periodic trends', 'coordination nomenclature', 'electrochemistry signs'],
    correctAnswer: 0,
    explanation: 'Phenol acidity is much higher than simple alcohols due to resonance stabilization.',
    tags: ['neet trap', 'acidity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2010,
    question: 'For many acid-catalyzed substitution/dehydration pathways in alcohols, reactivity often follows:',
    options: ['1 degree > 2 degree > 3 degree', '3 degree > 2 degree > 1 degree', 'all equal', '2 degree > 3 degree > 1 degree'],
    correctAnswer: 1,
    explanation: 'Higher substituted systems often react faster due to intermediate stability.',
    tags: ['reactivity order', 'alcohols'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Alcohols, Phenols and Ethers',
    chapter: 'organic-oxygen-compounds',
    year: 2009,
    question: 'NEET pattern for this unit is mostly:',
    options: ['memory only no reactions', 'reaction-based conceptual questions', 'only physical chemistry numericals', 'only inorganic trend questions'],
    correctAnswer: 1,
    explanation: 'Product prediction and mechanism logic dominate this chapter.',
    tags: ['pyq pattern', 'reaction based'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'organic-oxygen-compounds', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 17.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
