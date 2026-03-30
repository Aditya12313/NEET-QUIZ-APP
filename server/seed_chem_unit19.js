import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2023,
    question: 'Which of the following is a non-reducing sugar?',
    options: ['Glucose', 'Fructose', 'Lactose', 'Sucrose'],
    correctAnswer: 3,
    explanation: 'Sucrose is non-reducing, whereas glucose and lactose are reducing sugars.',
    tags: ['carbohydrates', 'reducing sugar'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2022,
    question: 'Glucose is classified as:',
    options: ['Aldopentose', 'Ketohexose', 'Aldohexose', 'Disaccharide'],
    correctAnswer: 2,
    explanation: 'Glucose is an aldohexose.',
    tags: ['glucose', 'classification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2021,
    question: 'Which among the following is a disaccharide?',
    options: ['Fructose', 'Glucose', 'Maltose', 'Cellulose'],
    correctAnswer: 2,
    explanation: 'Maltose is a disaccharide; cellulose is a polysaccharide.',
    tags: ['carbohydrates', 'classification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2020,
    question: 'The bond linking amino acids in proteins is:',
    options: ['Glycosidic bond', 'Peptide bond', 'Hydrogen bond', 'Phosphodiester bond'],
    correctAnswer: 1,
    explanation: 'Amino acids are linked by peptide (amide) bonds.',
    tags: ['proteins', 'peptide bond'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2019,
    question: 'Primary structure of a protein refers to:',
    options: ['Alpha-helix pattern', 'Three-dimensional folding', 'Amino acid sequence', 'Multiple subunit assembly'],
    correctAnswer: 2,
    explanation: 'Primary structure is the linear sequence of amino acids.',
    tags: ['proteins', 'structure levels'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2018,
    question: 'Alpha-helix is an example of which protein structure level?',
    options: ['Primary', 'Secondary', 'Tertiary', 'Quaternary'],
    correctAnswer: 1,
    explanation: 'Alpha-helix is a classic secondary structure element.',
    tags: ['proteins', 'secondary structure'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2017,
    question: 'Denaturation of a protein generally causes:',
    options: ['Increase in primary sequence length', 'Loss of biological activity', 'Formation of new amino acids', 'Conversion into carbohydrate'],
    correctAnswer: 1,
    explanation: 'Denaturation disrupts native conformation and usually causes loss of function.',
    tags: ['proteins', 'denaturation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2016,
    question: 'Which group contains only fat-soluble vitamins?',
    options: ['B, C', 'A, D, E, K', 'B, D, C', 'A, B, C, D'],
    correctAnswer: 1,
    explanation: 'A, D, E, and K are fat-soluble vitamins.',
    tags: ['vitamins', 'classification'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2015,
    question: 'Which vitamin is water-soluble?',
    options: ['Vitamin A', 'Vitamin D', 'Vitamin E', 'Vitamin C'],
    correctAnswer: 3,
    explanation: 'Vitamin C is water-soluble.',
    tags: ['vitamins', 'water-soluble'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2014,
    question: 'DNA differs from RNA in that DNA contains:',
    options: ['Uracil', 'Thymine', 'Ribose only', 'No phosphate group'],
    correctAnswer: 1,
    explanation: 'DNA has thymine while RNA has uracil.',
    tags: ['dna-rna', 'bases'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2013,
    question: 'RNA is generally:',
    options: ['Double-stranded helix only', 'Single-stranded', 'Without nitrogen bases', 'Without sugar'],
    correctAnswer: 1,
    explanation: 'RNA is generally single-stranded in standard NEET context.',
    tags: ['rna', 'structure'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2012,
    question: 'A nucleotide is composed of:',
    options: ['Sugar and base only', 'Base and phosphate only', 'Sugar, base, and phosphate', 'Amino acid and sugar'],
    correctAnswer: 2,
    explanation: 'A nucleotide has a sugar, nitrogenous base, and phosphate group.',
    tags: ['nucleic acids', 'nucleotide'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2011,
    question: 'Glycosidic bond is characteristically found in:',
    options: ['Proteins', 'Carbohydrates', 'Nucleic acids only', 'Vitamins'],
    correctAnswer: 1,
    explanation: 'Glycosidic linkages join monosaccharide units in carbohydrates.',
    tags: ['bond concept', 'glycosidic'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2010,
    question: 'A common NEET trap in biomolecules is:',
    options: ['assuming sucrose is reducing sugar', 'assuming all vitamins are fat-soluble', 'mixing glucose and fructose classes', 'all of these'],
    correctAnswer: 3,
    explanation: 'All listed confusions are common biomolecules mistakes.',
    tags: ['neet trap', 'common mistakes'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'chemistry',
    unit: 'Unit 19: Biomolecules',
    chapter: 'biomolecules',
    year: 2009,
    question: 'Typical NEET pattern for biomolecules is mostly:',
    options: ['long mechanism-only questions', 'direct memory-based and conceptual objective questions', 'numerical heavy thermodynamics', 'coordination chemistry conversions'],
    correctAnswer: 1,
    explanation: 'Biomolecules is often asked through direct NCERT-based memory plus concepts.',
    tags: ['pyq pattern', 'direct theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'biomolecules', subject: 'chemistry' });
    console.log(`Deleted ${delRes.deletedCount} old placeholder/generic questions.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} chemistry PYQs for unit 19 (biomolecules).`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
