import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2024,
    question: 'Who is known as the father of genetics?',
    options: ['Charles Darwin', 'Gregor Mendel', 'T.H. Morgan', 'Hugo de Vries'],
    correctAnswer: 1,
    explanation: 'Gregor Johann Mendel is known as the father of genetics.',
    tags: ['Mendel', 'genetics basics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2023,
    question: 'Law of segregation is based on the principle that:',
    options: ['Dominant alleles are always inherited', 'Alleles separate during gamete formation', 'Genes blend irreversibly', 'Only one parent contributes genes'],
    correctAnswer: 1,
    explanation: 'During gamete formation, allele pairs segregate so each gamete carries one allele.',
    tags: ['Mendel law', 'segregation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2022,
    question: 'AB blood group in humans is an example of:',
    options: ['Incomplete dominance', 'Codominance', 'Pleiotropy', 'Linkage'],
    correctAnswer: 1,
    explanation: 'In AB blood group, both IA and IB alleles are expressed equally.',
    tags: ['ABO blood group', 'codominance'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2021,
    question: 'Which one is an example of incomplete dominance?',
    options: ['AB blood group', 'Pink flower in Mirabilis jalapa', 'Color blindness', 'Hemophilia'],
    correctAnswer: 1,
    explanation: 'Red and white flower cross gives pink phenotype in incomplete dominance.',
    tags: ['incomplete dominance', 'Mirabilis'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2020,
    question: 'Color blindness in humans is usually inherited as:',
    options: ['Autosomal dominant', 'Autosomal recessive', 'X-linked recessive', 'Y-linked dominant'],
    correctAnswer: 2,
    explanation: 'Color blindness is a classic X-linked recessive disorder.',
    tags: ['sex-linked inheritance', 'color blindness'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2019,
    question: 'Klinefelter syndrome is associated with karyotype:',
    options: ['XO', 'XXY', 'XXX', 'XYY'],
    correctAnswer: 1,
    explanation: 'Klinefelter syndrome is typically 47, XXY.',
    tags: ['chromosomal disorder', 'Klinefelter'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2018,
    question: 'DNA replication is described as:',
    options: ['Conservative', 'Semi-conservative', 'Dispersive only', 'Random'],
    correctAnswer: 1,
    explanation: 'Each daughter DNA has one parental and one newly synthesized strand.',
    tags: ['DNA replication', 'semi-conservative'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2017,
    question: 'Correct central dogma pathway is:',
    options: ['DNA -> RNA -> Protein', 'RNA -> DNA -> Protein', 'Protein -> RNA -> DNA', 'DNA -> Protein -> RNA'],
    correctAnswer: 0,
    explanation: 'Genetic information typically flows from DNA to RNA to protein.',
    tags: ['central dogma', 'molecular biology'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2016,
    question: 'Transcription refers to:',
    options: ['DNA to RNA synthesis', 'RNA to DNA synthesis', 'RNA to protein synthesis', 'DNA to protein synthesis'],
    correctAnswer: 0,
    explanation: 'Transcription is synthesis of RNA using DNA template.',
    tags: ['transcription'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2015,
    question: 'Lac operon is an example of:',
    options: ['Constitutive expression', 'Inducible operon', 'Repressible operon for arginine', 'Chromosomal mutation'],
    correctAnswer: 1,
    explanation: 'Lac operon is inducible and is activated in presence of inducer lactose/allolactose.',
    tags: ['lac operon', 'gene regulation'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2014,
    question: 'Hardy-Weinberg equilibrium expression is:',
    options: ['p + q = 2', 'p^2 + 2pq + q^2 = 1', 'p^2 + q^2 = 1', 'p + q = 0'],
    correctAnswer: 1,
    explanation: 'Genotype frequencies in equilibrium population follow p^2 + 2pq + q^2 = 1.',
    tags: ['Hardy-Weinberg', 'population genetics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2013,
    question: 'If q = 0.3 in a two-allele system, then p equals:',
    options: ['0.7', '0.3', '1.3', '0.6'],
    correctAnswer: 0,
    explanation: 'Using p + q = 1, p = 1 - 0.3 = 0.7.',
    tags: ['Hardy-Weinberg', 'allele frequency'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2012,
    question: 'Natural selection as a mechanism of evolution was proposed by:',
    options: ['Mendel', 'Watson', 'Darwin', 'Hardy'],
    correctAnswer: 2,
    explanation: 'Darwin proposed natural selection and survival of the fittest.',
    tags: ['evolution', 'Darwin'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2011,
    question: 'Adaptive radiation means:',
    options: ['Convergent evolution', 'Divergence from a common ancestor into different niches', 'Sudden genome doubling', 'Only mutation accumulation'],
    correctAnswer: 1,
    explanation: 'Adaptive radiation is diversification from a common ancestor into multiple species.',
    tags: ['adaptive radiation', 'evolution'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 7: Genetics and Evolution',
    chapter: 'genetics-evolution',
    year: 2010,
    question: 'DNA fingerprinting is most commonly used in:',
    options: ['Photosynthesis studies', 'Forensics and paternity testing', 'Blood pressure measurement', 'Protein synthesis only'],
    correctAnswer: 1,
    explanation: 'DNA fingerprinting is used to identify individuals and establish biological relationships.',
    tags: ['DNA fingerprinting', 'forensics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'genetics-evolution', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 7.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
    process.exit(1);
  }
}

run();
