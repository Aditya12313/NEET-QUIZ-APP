import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2024,
    question: 'Recombinant DNA technology primarily includes:',
    options: ['Only selective breeding', 'DNA manipulation and transfer into host', 'Only tissue culture', 'Only mutation breeding'],
    correctAnswer: 1,
    explanation: 'rDNA technology involves DNA isolation, cutting, insertion into vector, transfer, and expression.',
    tags: ['rDNA', 'biotechnology'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2023,
    question: 'Restriction enzymes are used to:',
    options: ['Join DNA fragments', 'Cut DNA at specific recognition sequences', 'Synthesize mRNA', 'Amplify proteins'],
    correctAnswer: 1,
    explanation: 'Restriction endonucleases cleave DNA at specific sites.',
    tags: ['restriction enzyme'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2022,
    question: 'Plasmid in biotechnology functions mainly as:',
    options: ['Host cell', 'Vector', 'Probe', 'Repressor'],
    correctAnswer: 1,
    explanation: 'Plasmid is commonly used as vector to carry foreign DNA.',
    tags: ['vector', 'plasmid'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2021,
    question: 'A commonly used host organism for rDNA experiments is:',
    options: ['E. coli', 'Plasmodium', 'Anopheles', 'Ascaris'],
    correctAnswer: 0,
    explanation: 'E. coli is widely used as host in molecular cloning.',
    tags: ['host organism', 'E. coli'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2020,
    question: 'Humulin is:',
    options: ['A biofertilizer', 'Recombinant insulin', 'A Bt protein', 'An antibiotic'],
    correctAnswer: 1,
    explanation: 'Humulin is recombinant human insulin produced using engineered microbes.',
    tags: ['insulin', 'Humulin'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2019,
    question: 'Gene therapy aims to:',
    options: ['Detect antibodies', 'Correct defective genes', 'Increase fertilizer use', 'Measure blood pressure'],
    correctAnswer: 1,
    explanation: 'Gene therapy attempts correction of defective genes in patients.',
    tags: ['gene therapy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2018,
    question: 'PCR is used for:',
    options: ['DNA amplification', 'Protein translation', 'Cell lysis only', 'Antibiotic synthesis'],
    correctAnswer: 0,
    explanation: 'PCR amplifies specific DNA sequence exponentially.',
    tags: ['PCR', 'molecular diagnosis'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2017,
    question: 'ELISA is based on:',
    options: ['DNA replication', 'Antigen-antibody interaction', 'RNA splicing', 'Gene linkage'],
    correctAnswer: 1,
    explanation: 'ELISA detects antigens or antibodies via specific immune binding.',
    tags: ['ELISA', 'diagnosis'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2016,
    question: 'Bt cotton is resistant to insects due to:',
    options: ['High starch content', 'Bt toxin gene', 'Extra chlorophyll', 'Hybrid vigor only'],
    correctAnswer: 1,
    explanation: 'Bt cotton carries cry genes from Bacillus thuringiensis.',
    tags: ['Bt cotton', 'GM crops'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2015,
    question: 'A major advantage of Bt cotton is:',
    options: ['No water requirement', 'Pest resistance', 'No fertilizers required', 'No cultivation practices needed'],
    correctAnswer: 1,
    explanation: 'Bt cotton improves insect resistance and can reduce pesticide use.',
    tags: ['Bt crops', 'advantages'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2014,
    question: 'Transgenic animals are used to:',
    options: ['Study diseases and produce useful proteins', 'Only for food preservation', 'Replace all vaccines', 'Control vectors directly'],
    correctAnswer: 0,
    explanation: 'They are used for disease models and production of therapeutic proteins.',
    tags: ['transgenic animals'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2013,
    question: 'Biopiracy means:',
    options: ['Legal patent filing', 'Unauthorized use of bioresources', 'Use of only GM seeds', 'A disease in plants'],
    correctAnswer: 1,
    explanation: 'Biopiracy is unauthorized exploitation of biological resources/traditional knowledge.',
    tags: ['biopiracy', 'biosafety'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2012,
    question: 'Patents are associated with:',
    options: ['Legal protection of inventions', 'Only scientific publication', 'Vector construction', 'Immunity enhancement'],
    correctAnswer: 0,
    explanation: 'Patents grant legal rights over inventions.',
    tags: ['patents', 'IPR'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2011,
    question: 'Which statement is correct?',
    options: ['PCR detects antibodies while ELISA amplifies DNA', 'PCR amplifies DNA while ELISA detects antigen-antibody interactions', 'Both PCR and ELISA amplify DNA', 'Both are vectors'],
    correctAnswer: 1,
    explanation: 'PCR amplifies nucleic acids; ELISA is an immunological detection method.',
    tags: ['PCR vs ELISA'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 9: Biotechnology and Its Applications',
    chapter: 'biotechnology-applications',
    year: 2010,
    question: 'In rDNA technology, the carrier DNA molecule is called:',
    options: ['Host', 'Vector', 'Primer', 'Template RNA'],
    correctAnswer: 1,
    explanation: 'Vectors are carrier molecules used to deliver foreign DNA into host cells.',
    tags: ['rDNA', 'vector'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'biotechnology-applications', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 9.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
    process.exit(1);
  }
}

run();
