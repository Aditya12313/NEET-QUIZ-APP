import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2024,
    question: 'Health is best defined as a state of:',
    options: ['Only absence of disease', 'Physical, mental and social well-being', 'Only physical fitness', 'Only mental stability'],
    correctAnswer: 1,
    explanation: 'WHO defines health as complete physical, mental, and social well-being.',
    tags: ['health', 'definition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2023,
    question: 'Malaria is caused by:',
    options: ['Wuchereria', 'Plasmodium', 'Salmonella typhi', 'Ascaris'],
    correctAnswer: 1,
    explanation: 'Malaria is caused by protozoan parasites of genus Plasmodium.',
    tags: ['malaria', 'pathogen'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2022,
    question: 'Vector for malaria transmission is:',
    options: ['Male Anopheles mosquito', 'Female Anopheles mosquito', 'Aedes mosquito', 'Housefly'],
    correctAnswer: 1,
    explanation: 'Female Anopheles mosquito transmits malarial parasite.',
    tags: ['malaria', 'vector'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2021,
    question: 'Typhoid is caused by:',
    options: ['Plasmodium vivax', 'Entamoeba histolytica', 'Salmonella typhi', 'Wuchereria bancrofti'],
    correctAnswer: 2,
    explanation: 'Typhoid fever is caused by Salmonella typhi.',
    tags: ['typhoid', 'bacteria'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2020,
    question: 'Amoebiasis is caused by:',
    options: ['Ascaris lumbricoides', 'Entamoeba histolytica', 'Trichophyton', 'HIV'],
    correctAnswer: 1,
    explanation: 'Entamoeba histolytica causes amoebiasis.',
    tags: ['amoebiasis', 'protozoa'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2019,
    question: 'Dengue and chikungunya are transmitted by:',
    options: ['Culex mosquito', 'Anopheles mosquito', 'Aedes mosquito', 'Sandfly'],
    correctAnswer: 2,
    explanation: 'Aedes mosquito is the vector for dengue and chikungunya.',
    tags: ['dengue', 'chikungunya', 'vector'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2018,
    question: 'Innate immunity is:',
    options: ['Specific and memory based', 'Non-specific defense mechanism', 'Acquired after vaccination only', 'Mediated only by antibodies'],
    correctAnswer: 1,
    explanation: 'Innate immunity provides non-specific first-line defense.',
    tags: ['immunity', 'innate'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2017,
    question: 'Antibodies are produced by:',
    options: ['T-lymphocytes', 'B-lymphocytes', 'Neutrophils', 'Platelets'],
    correctAnswer: 1,
    explanation: 'B-cells differentiate into plasma cells that secrete antibodies.',
    tags: ['antibodies', 'B-cells'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2016,
    question: 'Vaccination provides protection mainly by:',
    options: ['Immediate pathogen destruction only', 'Formation of memory cells', 'Increasing RBC count', 'Suppressing all immunity'],
    correctAnswer: 1,
    explanation: 'Vaccination triggers adaptive immunity and memory cell formation.',
    tags: ['vaccination', 'memory cells'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2015,
    question: 'AIDS is caused by:',
    options: ['HBV', 'HIV', 'H1N1', 'Plasmodium'],
    correctAnswer: 1,
    explanation: 'HIV attacks immune system and causes AIDS.',
    tags: ['AIDS', 'HIV'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2014,
    question: 'Uncontrolled cell division is characteristic of:',
    options: ['Diabetes', 'Cancer', 'Typhoid', 'Asthma'],
    correctAnswer: 1,
    explanation: 'Cancer is a disorder of uncontrolled cell proliferation.',
    tags: ['cancer'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2013,
    question: 'Curd is prepared using:',
    options: ['Yeast', 'Lactobacillus', 'Rhizobium', 'Methanogens'],
    correctAnswer: 1,
    explanation: 'Lactobacillus helps in conversion of milk into curd.',
    tags: ['household microbes', 'curd'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2012,
    question: 'Bread making commonly involves:',
    options: ['Lactobacillus', 'Yeast', 'Aspergillus', 'Penicillium'],
    correctAnswer: 1,
    explanation: 'Yeast ferments sugars and causes dough rise.',
    tags: ['household microbes', 'bread'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2011,
    question: 'Biogas is mainly produced by:',
    options: ['Nitrifying bacteria', 'Methanogens', 'Cyanobacteria', 'Viruses'],
    correctAnswer: 1,
    explanation: 'Methanogens produce methane-rich biogas under anaerobic conditions.',
    tags: ['biogas', 'methanogens'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 8: Biology and Human Welfare',
    chapter: 'biology-human-welfare',
    year: 2010,
    question: 'Rhizobium is used as:',
    options: ['Biocontrol agent for insects', 'Biofertilizer for nitrogen fixation', 'Industrial alcohol producer', 'Pathogen in legumes'],
    correctAnswer: 1,
    explanation: 'Rhizobium forms symbiosis with legumes and fixes atmospheric nitrogen.',
    tags: ['biofertilizer', 'Rhizobium'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'biology-human-welfare', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 8.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
    process.exit(1);
  }
}

run();
