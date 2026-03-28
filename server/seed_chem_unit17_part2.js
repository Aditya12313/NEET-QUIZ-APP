import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2023,
    question: 'General formula of aldehyde functional group is:',
    options: ['R-CO-R', 'R-CHO', 'R-COOH', 'R-O-R'],
    correctAnswer: 1,
    explanation: 'Aldehydes contain terminal carbonyl group represented as R-CHO.',
    tags: ['part2', 'aldehydes', 'structure'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2022,
    question: 'Carbonyl carbon is electrophilic because:',
    options: ['oxygen donates electron density to carbon strongly', 'C=O bond is nonpolar', 'C=O bond is polarized toward oxygen', 'carbon has negative charge in carbonyl'],
    correctAnswer: 2,
    explanation: 'Higher electronegativity of oxygen polarizes C=O, making carbon electron deficient.',
    tags: ['part2', 'carbonyl', 'concept'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2021,
    question: 'Reactivity toward nucleophilic addition is generally:',
    options: ['ketone > aldehyde', 'aldehyde > ketone', 'both always equal', 'carboxylic acid > aldehyde'],
    correctAnswer: 1,
    explanation: 'Aldehydes are less sterically hindered and more reactive than ketones.',
    tags: ['part2', 'reactivity order'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2020,
    question: 'HCN addition to aldehydes/ketones gives:',
    options: ['imines', 'cyanohydrins', 'oximes', 'acetals'],
    correctAnswer: 1,
    explanation: 'Nucleophilic addition of HCN to carbonyl compounds forms cyanohydrins.',
    tags: ['part2', 'nucleophilic addition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2019,
    question: 'Aldehyde on oxidation usually forms:',
    options: ['alcohol', 'ketone', 'carboxylic acid', 'ether'],
    correctAnswer: 2,
    explanation: 'Aldehydes oxidize readily to carboxylic acids.',
    tags: ['part2', 'oxidation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2018,
    question: 'Ketones under mild oxidation conditions are generally:',
    options: ['readily oxidized to acids', 'oxidized to aldehydes', 'resistant to oxidation', 'reduced to alkanes directly'],
    correctAnswer: 2,
    explanation: 'Ketones are relatively resistant to oxidation under mild reagents.',
    tags: ['part2', 'ketones', 'oxidation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2017,
    question: 'Aldol condensation requires:',
    options: ['absence of alpha-hydrogen always', 'carbonyl compounds with alpha-hydrogen', 'only carboxylic acids', 'only aromatic ethers'],
    correctAnswer: 1,
    explanation: 'Aldol reaction involves enolate formation, so alpha-H is typically needed.',
    tags: ['part2', 'aldol', 'named reactions'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2016,
    question: 'Cannizzaro reaction is characteristic of:',
    options: ['aldehydes without alpha-H', 'all ketones', 'methyl ketones only', 'all aldehydes'],
    correctAnswer: 0,
    explanation: 'Non-enolizable aldehydes (without alpha-H) undergo Cannizzaro disproportionation.',
    tags: ['part2', 'cannizzaro', 'named reactions'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2015,
    question: 'Haloform reaction is given by:',
    options: ['all aldehydes', 'methyl ketones', 'all alcohols', 'all carboxylic acids'],
    correctAnswer: 1,
    explanation: 'Compounds containing CH3CO- group give positive haloform test.',
    tags: ['part2', 'haloform', 'named reactions'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2014,
    question: "Tollens' reagent is used to identify:",
    options: ['aldehydes', 'ketones', 'ethers', 'alkenes'],
    correctAnswer: 0,
    explanation: "Aldehydes reduce Tollens' reagent to metallic silver mirror.",
    tags: ['part2', 'identification test', 'tollens'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2013,
    question: "Fehling's test is generally positive for:",
    options: ['aldehydes', 'simple ketones', 'ethers', 'carboxylic acids only'],
    correctAnswer: 0,
    explanation: "Aldehydes usually reduce Fehling's solution in standard NEET-level context.",
    tags: ['part2', 'identification test', 'fehling'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2012,
    question: 'Correct acidity order is:',
    options: ['Alcohol > Phenol > Carboxylic acid', 'Carboxylic acid > Phenol > Alcohol', 'Phenol > Alcohol > Carboxylic acid', 'Alcohol > Carboxylic acid > Phenol'],
    correctAnswer: 1,
    explanation: 'Carboxylate ion is most stabilized by resonance, then phenoxide, then alkoxide.',
    tags: ['part2', 'acidity', 'order'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2011,
    question: 'Electron-withdrawing groups in carboxylic acids generally:',
    options: ['decrease acidity', 'increase acidity', 'do not affect acidity', 'convert acid to alcohol'],
    correctAnswer: 1,
    explanation: 'Electron-withdrawing groups stabilize carboxylate anion and increase acidity.',
    tags: ['part2', 'carboxylic acids', 'acidity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2010,
    question: 'A key trap in this chapter is forgetting:',
    options: ['alkenes are unsaturated', 'Cannizzaro needs aldehyde without alpha-H', 'phenol has OH group', 'ethers contain oxygen'],
    correctAnswer: 1,
    explanation: 'Many wrong options are eliminated by checking the no alpha-H condition.',
    tags: ['part2', 'neet trap', 'cannizzaro'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 17: Oxygen-Containing Organic Compounds',
    chapter: 'organic-oxygen-compounds',
    year: 2009,
    question: 'Most repeated NEET style in this Part 2 area is:',
    options: ['only memory-based definitions', 'reaction product and named-reaction questions', 'only practical chemistry numericals', 'only atomic structure derivations'],
    correctAnswer: 1,
    explanation: 'This area is heavily reaction and mechanism oriented in PYQ pattern.',
    tags: ['part2', 'pyq pattern'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({
      chapter: 'organic-oxygen-compounds',
      subject: 'chemistry',
      tags: 'part2'
    });
    console.log(`Deleted ${delRes.deletedCount} old Unit 17 Part 2 questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for Unit 17 Part 2.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
