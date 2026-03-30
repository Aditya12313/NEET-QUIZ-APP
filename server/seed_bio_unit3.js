import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2023,
    question: 'Cell theory was proposed by:',
    options: ['Darwin and Wallace', 'Schleiden and Schwann', 'Watson and Crick', 'Virchow and Mendel'],
    correctAnswer: 1,
    explanation: 'Schleiden and Schwann proposed cell theory; Virchow later modified it.',
    tags: ['cell theory'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2022,
    question: 'Virchow modified cell theory by stating that:',
    options: ['Cell is basic unit of life', 'All cells arise from pre-existing cells', 'Nucleus controls heredity', 'Membrane is selectively permeable'],
    correctAnswer: 1,
    explanation: 'Virchow stated Omnis cellula e cellula (all cells from pre-existing cells).',
    tags: ['cell theory', 'virchow'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2021,
    question: 'A true nucleus and membrane-bound organelles are present in:',
    options: ['Prokaryotic cells', 'Eukaryotic cells', 'Viruses', 'Viroids'],
    correctAnswer: 1,
    explanation: 'Eukaryotic cells have true nucleus and membrane-bound organelles.',
    tags: ['prokaryotic vs eukaryotic'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2020,
    question: 'Fluid mosaic model of plasma membrane was given by:',
    options: ['Singer and Nicolson', 'Schleiden and Schwann', 'Robert Hooke', 'Hershey and Chase'],
    correctAnswer: 0,
    explanation: 'Singer and Nicolson gave the fluid mosaic model.',
    tags: ['cell membrane'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2019,
    question: 'Movement of molecules against concentration gradient requires:',
    options: ['Diffusion', 'Facilitated diffusion', 'Active transport', 'Osmosis only'],
    correctAnswer: 2,
    explanation: 'Active transport requires energy and moves molecules against gradient.',
    tags: ['transport mechanisms'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2018,
    question: 'SER is mainly associated with:',
    options: ['Protein synthesis', 'Lipid synthesis', 'ATP generation', 'Chromosome segregation'],
    correctAnswer: 1,
    explanation: 'SER is associated with lipid synthesis and detoxification.',
    tags: ['ER', 'organelles'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2017,
    question: 'Golgi apparatus is primarily involved in:',
    options: ['Photosynthesis', 'Packaging and secretion', 'ATP synthesis', 'Cell wall formation only'],
    correctAnswer: 1,
    explanation: 'Golgi modifies, packages, and secretes cellular products.',
    tags: ['golgi', 'organelles'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2016,
    question: 'Lysosomes are commonly called:',
    options: ['Powerhouse', 'Suicidal bags', 'Protein factories', 'Control centers'],
    correctAnswer: 1,
    explanation: 'Lysosomes contain hydrolytic enzymes and are known as suicidal bags.',
    tags: ['lysosome'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2015,
    question: 'Mitochondria are unique because they:',
    options: ['Lack membrane', 'Have own DNA', 'Occur only in prokaryotes', 'Synthesize cell wall'],
    correctAnswer: 1,
    explanation: 'Mitochondria possess their own DNA and are double membrane organelles.',
    tags: ['mitochondria'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2014,
    question: 'Ribosomes in prokaryotes are of type:',
    options: ['60S', '70S', '80S', '90S'],
    correctAnswer: 1,
    explanation: 'Prokaryotic ribosomes are 70S, while eukaryotic cytoplasmic ribosomes are 80S.',
    tags: ['ribosomes'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2013,
    question: 'Plastid responsible for photosynthesis is:',
    options: ['Chromoplast', 'Leucoplast', 'Chloroplast', 'Centrosome'],
    correctAnswer: 2,
    explanation: 'Chloroplast contains chlorophyll and performs photosynthesis.',
    tags: ['plastids'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2012,
    question: 'Cell cycle interphase includes:',
    options: ['G1, S, G2', 'P, Q, R', 'Only M phase', 'Only S and M'],
    correctAnswer: 0,
    explanation: 'Interphase consists of G1, S, and G2 phases.',
    tags: ['cell cycle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2011,
    question: 'Mitosis is called equational division because:',
    options: ['DNA doubles twice', 'Chromosome number remains unchanged', 'It occurs only in gametes', 'Crossing over occurs'],
    correctAnswer: 1,
    explanation: 'Mitosis maintains chromosome number in daughter cells.',
    tags: ['mitosis'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2010,
    question: 'Meiosis contributes to genetic variation due to:',
    options: ['No recombination', 'Reduction division only', 'Crossing over and independent assortment', 'Absence of synapsis'],
    correctAnswer: 2,
    explanation: 'Crossing over and independent assortment during meiosis generate variation.',
    tags: ['meiosis', 'genetic variation'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 3: Cell Structure and Function',
    chapter: 'cell-structure-function',
    year: 2009,
    question: 'Centrioles are mainly involved in:',
    options: ['Lipid synthesis', 'Cell division in animal cells', 'Photosynthesis', 'Protein digestion'],
    correctAnswer: 1,
    explanation: 'Centrioles help in spindle formation during animal cell division.',
    tags: ['centrioles', 'cell division'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'cell-structure-function', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 3.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
