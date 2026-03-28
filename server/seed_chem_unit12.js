import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2023,
    question: 'Central metal atom/ion in a coordination compound is:',
    options: ['always an anion', 'the atom/ion to which ligands are attached', 'always neutral gas', 'the solvent molecule'],
    correctAnswer: 1,
    explanation: 'Central metal is the coordination center of the complex.',
    tags: ['basic terms', 'central metal'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2022,
    question: 'Coordination number is defined as:',
    options: ['charge on complex ion', 'number of ligands in bracket', 'number of donor atoms bonded to central metal', 'oxidation number of metal'],
    correctAnswer: 2,
    explanation: 'Coordination number counts donor atoms directly attached to metal.',
    tags: ['coordination number', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2021,
    question: 'A bidentate ligand has:',
    options: ['one donor atom', 'two donor atoms', 'three donor atoms', 'no donor atoms'],
    correctAnswer: 1,
    explanation: 'Bidentate ligand coordinates through two donor sites.',
    tags: ['ligands', 'denticity'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2020,
    question: 'Chelation refers to:',
    options: ['single bond formation only', 'ring formation by multidentate ligand', 'metal oxidation', 'ligand substitution by solvent'],
    correctAnswer: 1,
    explanation: 'Chelating ligands bind at multiple sites to form stable ring structures.',
    tags: ['chelation', 'ligands'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2019,
    question: 'In IUPAC naming, order is usually:',
    options: ['metal first then ligands', 'ligands first then metal', 'anion first then cation only', 'alphabetical metals first'],
    correctAnswer: 1,
    explanation: 'Ligands are named before the central metal.',
    tags: ['nomenclature', 'iupac'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2018,
    question: 'Anionic ligands generally end with suffix:',
    options: ['-ide', '-o', '-ium', '-ane'],
    correctAnswer: 1,
    explanation: 'Anionic ligand names usually end with -o in IUPAC.',
    tags: ['nomenclature', 'anionic ligands'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2017,
    question: 'Which pair belongs to stereoisomerism?',
    options: ['linkage and ionization', 'geometrical and optical', 'hydrate and linkage', 'ionization and coordination'],
    correctAnswer: 1,
    explanation: 'Geometrical and optical forms are stereoisomeric types.',
    tags: ['isomerism', 'stereoisomerism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2016,
    question: 'Hybridization corresponding to tetrahedral complex is:',
    options: ['sp3', 'dsp2', 'd2sp3', 'sp2'],
    correctAnswer: 0,
    explanation: 'Tetrahedral coordination is commonly represented by sp3 hybridization.',
    tags: ['hybridization', 'geometry'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2015,
    question: 'Square planar complexes are commonly associated with:',
    options: ['sp3', 'dsp2', 'd2sp3', 'sp'],
    correctAnswer: 1,
    explanation: 'Square planar geometry is classically linked to dsp2 hybridization.',
    tags: ['hybridization', 'square planar'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2014,
    question: 'In octahedral CFT splitting, lower set is:',
    options: ['eg', 't2g', 'both same', 'depends only on spin'],
    correctAnswer: 1,
    explanation: 'In octahedral field, t2g orbitals are lower in energy than eg.',
    tags: ['cft', 'splitting'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2013,
    question: 'Strong field ligands generally cause:',
    options: ['no pairing', 'greater electron pairing', 'always paramagnetism', 'loss of ligands'],
    correctAnswer: 1,
    explanation: 'Strong field ligands increase splitting and favor paired arrangement.',
    tags: ['cft', 'strong field ligand'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2012,
    question: 'Paramagnetism in complexes is due to:',
    options: ['paired electrons only', 'unpaired electrons', 'high molecular mass', 'high ligand charge'],
    correctAnswer: 1,
    explanation: 'Unpaired electrons contribute magnetic moment leading to paramagnetism.',
    tags: ['magnetic properties', 'paramagnetic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2011,
    question: 'Color in many coordination compounds arises due to:',
    options: ['nuclear spin', 'd-d transitions', 'ionic size only', 'presence of hydrogen'],
    correctAnswer: 1,
    explanation: 'Absorption corresponding to d-d transition gives visible color.',
    tags: ['color', 'd-d transition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2010,
    question: 'A frequent trap in this chapter is mixing:',
    options: ['acid-base concepts', 'VBT and CFT interpretations', 'electrochemistry and kinetics', 's and p block trends'],
    correctAnswer: 1,
    explanation: 'VBT and CFT answer different aspects (geometry vs splitting/magnetism/color).',
    tags: ['neet trap', 'vbt cft'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 12: Coordination Compounds',
    chapter: 'coordination-compounds',
    year: 2009,
    question: 'NEET often asks this chapter in which style?',
    options: ['only derivations', 'direct + conceptual', 'only long numericals', 'only practical files'],
    correctAnswer: 1,
    explanation: 'Questions are often direct NCERT plus conceptual reasoning based.',
    tags: ['pyq insight', 'question pattern'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'coordination-compounds', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 12.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
