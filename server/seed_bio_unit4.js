import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2023,
    question: 'Primary photosynthetic pigment in higher plants is:',
    options: ['Chlorophyll b', 'Carotene', 'Chlorophyll a', 'Xanthophyll'],
    correctAnswer: 2,
    explanation: 'Chlorophyll a is the primary pigment in photosynthesis.',
    tags: ['photosynthesis', 'pigments'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2022,
    question: 'Light reaction takes place in:',
    options: ['Stroma', 'Grana', 'Cytoplasm', 'Mitochondria'],
    correctAnswer: 1,
    explanation: 'Photochemical reactions occur on thylakoid membranes in grana.',
    tags: ['photosynthesis', 'light reaction'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2021,
    question: 'Calvin cycle occurs in:',
    options: ['Grana', 'Stroma', 'Mitochondrial matrix', 'Nucleus'],
    correctAnswer: 1,
    explanation: 'Dark reaction (Calvin cycle) takes place in chloroplast stroma.',
    tags: ['photosynthesis', 'calvin cycle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2020,
    question: 'Non-cyclic photophosphorylation produces:',
    options: ['ATP only', 'ATP and NADPH only', 'ATP, NADPH, and O2', 'NADPH only'],
    correctAnswer: 2,
    explanation: 'Non-cyclic electron flow yields ATP, NADPH, and oxygen.',
    tags: ['photophosphorylation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2019,
    question: 'Cyclic photophosphorylation yields:',
    options: ['ATP only', 'ATP and O2', 'NADPH and O2', 'Glucose only'],
    correctAnswer: 0,
    explanation: 'Cyclic photophosphorylation generates ATP only.',
    tags: ['photophosphorylation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2018,
    question: 'In C4 plants, first stable product is:',
    options: ['3-carbon compound', '4-carbon compound', '2-carbon compound', '5-carbon compound'],
    correctAnswer: 1,
    explanation: 'C4 pathway forms a 4-carbon first stable product.',
    tags: ['c3 c4'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2017,
    question: 'Photorespiration is generally considered:',
    options: ['Energy conserving', 'Wasteful process', 'Equivalent to glycolysis', 'Absent in all plants'],
    correctAnswer: 1,
    explanation: 'Photorespiration reduces photosynthetic efficiency and is considered wasteful.',
    tags: ['photorespiration'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2016,
    question: 'Glycolysis occurs in:',
    options: ['Chloroplast', 'Cytoplasm', 'Mitochondrial matrix', 'Golgi body'],
    correctAnswer: 1,
    explanation: 'Glycolysis occurs in cytoplasm.',
    tags: ['respiration', 'glycolysis'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2015,
    question: 'TCA cycle mainly occurs in:',
    options: ['Nucleus', 'Cytoplasm', 'Mitochondria', 'Ribosome'],
    correctAnswer: 2,
    explanation: 'Krebs/TCA cycle occurs in mitochondria.',
    tags: ['respiration', 'tca cycle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2014,
    question: 'Respiratory quotient (RQ) is defined as:',
    options: ['O2/CO2', 'CO2/O2', 'ATP/O2', 'CO2/ATP'],
    correctAnswer: 1,
    explanation: 'RQ = CO2 evolved divided by O2 consumed.',
    tags: ['rq'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2013,
    question: 'For carbohydrates, RQ is approximately:',
    options: ['0.7', '1.0', '1.5', '2.0'],
    correctAnswer: 1,
    explanation: 'Carbohydrate oxidation has RQ close to 1.',
    tags: ['rq', 'carbohydrates'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2012,
    question: 'Ethylene is known for:',
    options: ['Cell division', 'Fruit ripening', 'Root nodulation', 'Nitrogen fixation'],
    correctAnswer: 1,
    explanation: 'Ethylene plays key role in fruit ripening.',
    tags: ['hormones', 'ethylene'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2011,
    question: 'Auxin is primarily associated with:',
    options: ['Cell elongation', 'Fruit ripening', 'Growth inhibition', 'Leaf abscission only'],
    correctAnswer: 0,
    explanation: 'Auxin mainly promotes cell elongation.',
    tags: ['hormones', 'auxin'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2010,
    question: 'ABA generally acts as:',
    options: ['Growth promoter', 'Growth inhibitor', 'Respiratory substrate', 'Photosynthetic pigment'],
    correctAnswer: 1,
    explanation: 'ABA is primarily a growth-inhibiting stress hormone.',
    tags: ['hormones', 'aba'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 4: Plant Physiology',
    chapter: 'plant-physiology',
    year: 2009,
    question: 'C4 plants compared to C3 plants generally show:',
    options: ['Lower efficiency and high photorespiration', 'Higher efficiency and low photorespiration', 'No carbon fixation', 'No chlorophyll'],
    correctAnswer: 1,
    explanation: 'C4 pathway improves photosynthetic efficiency and reduces photorespiration.',
    tags: ['c3 c4', 'photorespiration'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'plant-physiology', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 4.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
