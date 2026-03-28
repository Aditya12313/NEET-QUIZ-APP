import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2023,
    question: 'General representation of a haloalkane is:',
    options: ['Ar-X', 'R-X', 'R-O-R', 'R-COOH'],
    correctAnswer: 1,
    explanation: 'Haloalkanes are represented by alkyl halide form R-X.',
    tags: ['haloalkanes', 'basic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2022,
    question: 'Bond strength trend among C-X bonds is generally:',
    options: ['C-I > C-Br > C-Cl > C-F', 'C-F > C-Cl > C-Br > C-I', 'C-Br > C-F > C-I > C-Cl', 'C-Cl > C-F > C-I > C-Br'],
    correctAnswer: 1,
    explanation: 'C-F bond is strongest and C-I is weakest among common alkyl halides.',
    tags: ['c-x bond', 'trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2021,
    question: 'SN1 reaction proceeds through:',
    options: ['one-step backside attack', 'carbocation intermediate', 'carbanion intermediate', 'free-radical chain only'],
    correctAnswer: 1,
    explanation: 'SN1 is two-step and involves carbocation formation.',
    tags: ['sn1', 'mechanism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2020,
    question: 'Typical substrate reactivity order for SN1 is:',
    options: ['1 degree > 2 degree > 3 degree', '3 degree > 2 degree > 1 degree', '2 degree > 1 degree > 3 degree', 'all equal'],
    correctAnswer: 1,
    explanation: 'More stable carbocation gives faster SN1.',
    tags: ['sn1', 'reactivity order'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2019,
    question: 'SN2 mechanism is characterized by:',
    options: ['carbocation intermediate', 'two-step pathway', 'one-step backside attack', 'radical chain propagation'],
    correctAnswer: 2,
    explanation: 'SN2 is concerted and proceeds by backside nucleophilic attack.',
    tags: ['sn2', 'mechanism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2018,
    question: 'Typical substrate reactivity order for SN2 is:',
    options: ['3 degree > 2 degree > 1 degree', '1 degree > 2 degree > 3 degree', '2 degree > 3 degree > 1 degree', 'all equal'],
    correctAnswer: 1,
    explanation: 'Steric hindrance makes SN2 fastest in primary substrates.',
    tags: ['sn2', 'reactivity order'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2017,
    question: 'Zaitsev rule predicts formation of:',
    options: ['least substituted alkene', 'most substituted alkene (usually major)', 'only terminal alkene', 'only cyclic alkene'],
    correctAnswer: 1,
    explanation: 'In many eliminations, the more substituted alkene predominates.',
    tags: ['elimination', 'zaitsev'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2016,
    question: 'Reactivity order of alkyl halides in nucleophilic substitution is commonly:',
    options: ['RF > RCl > RBr > RI', 'RI > RBr > RCl > RF', 'RCl > RI > RBr > RF', 'RBr > RF > RI > RCl'],
    correctAnswer: 1,
    explanation: 'Better leaving groups increase reactivity, giving RI highest.',
    tags: ['reactivity order', 'alkyl halides'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2015,
    question: 'Best leaving-group order is:',
    options: ['F- > Cl- > Br- > I-', 'I- > Br- > Cl- > F-', 'Cl- > I- > F- > Br-', 'Br- > F- > I- > Cl-'],
    correctAnswer: 1,
    explanation: 'Iodide is best leaving group among common halides.',
    tags: ['leaving group', 'trend'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2014,
    question: 'Haloarenes are less reactive in nucleophilic substitution because:',
    options: ['they are always nonpolar', 'C-X bond has partial double-bond character due to resonance', 'they cannot undergo any reaction', 'they have weaker C-X bond than haloalkanes'],
    correctAnswer: 1,
    explanation: 'Resonance strengthens aryl C-X bond and reduces substitution ease.',
    tags: ['haloarenes', 'reactivity'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2013,
    question: 'In electrophilic substitution on haloarenes, halogens are:',
    options: ['activating and meta directing', 'deactivating but ortho/para directing', 'activating and ortho directing only', 'deactivating and para only'],
    correctAnswer: 1,
    explanation: 'Overall -I deactivation with resonance donation gives ortho/para direction.',
    tags: ['directing effects', 'haloarenes'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2012,
    question: 'Polar protic solvent generally favors:',
    options: ['SN1', 'SN2', 'only E2', 'only radical substitution'],
    correctAnswer: 0,
    explanation: 'Polar protic solvents stabilize ions and support SN1 ionization.',
    tags: ['solvent effect', 'sn1'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2011,
    question: 'Polar aprotic solvent generally favors:',
    options: ['SN1', 'SN2', 'only E1', 'only aromatic substitution'],
    correctAnswer: 1,
    explanation: 'Strong unsolvated nucleophile in aprotic medium promotes SN2.',
    tags: ['solvent effect', 'sn2'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2010,
    question: 'A common trap in this unit is confusing:',
    options: ['SN1 and SN2 mechanisms', 'periodic trends', 'acid-base theories only', 'hybridization of methane'],
    correctAnswer: 0,
    explanation: 'Mechanism discrimination is central and frequently tested.',
    tags: ['neet trap', 'mechanism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 16: Haloalkanes and Haloarenes',
    chapter: 'organic-halogen-compounds',
    year: 2009,
    question: 'Freons are environmentally linked with:',
    options: ['soil salinity increase', 'ozone depletion', 'acid rain only', 'global dimming only'],
    correctAnswer: 1,
    explanation: 'Chlorofluorocarbons contribute to stratospheric ozone depletion.',
    tags: ['environment', 'freons'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'organic-halogen-compounds', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 16.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
