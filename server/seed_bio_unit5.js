import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2023,
    question: 'During inspiration, diaphragm generally:',
    options: ['Relaxes and moves upward', 'Contracts and flattens', 'Stops functioning', 'Contracts and moves upward'],
    correctAnswer: 1,
    explanation: 'Diaphragm contracts and flattens during inspiration.',
    tags: ['breathing', 'mechanism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2022,
    question: 'Major form of oxygen transport in blood is through:',
    options: ['Plasma bicarbonate', 'Hemoglobin', 'Dissolved oxygen only', 'Platelets'],
    correctAnswer: 1,
    explanation: 'Most oxygen is transported bound to hemoglobin.',
    tags: ['respiration', 'gas transport'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2021,
    question: 'Carbon dioxide in blood is mainly transported as:',
    options: ['Carbon monoxide', 'Bicarbonate ions', 'Carboxyhemoglobin only', 'Free gas only'],
    correctAnswer: 1,
    explanation: 'A major fraction of CO2 is transported as bicarbonate ions.',
    tags: ['respiration', 'gas transport'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2020,
    question: 'Which blood component is primarily responsible for immunity?',
    options: ['RBC', 'WBC', 'Platelets', 'Plasma proteins only'],
    correctAnswer: 1,
    explanation: 'White blood cells are key cellular components of immune defense.',
    tags: ['blood'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2019,
    question: 'Human heart is:',
    options: ['Two-chambered', 'Three-chambered', 'Four-chambered', 'Five-chambered'],
    correctAnswer: 2,
    explanation: 'Human heart has four chambers with complete separation of oxygenated/deoxygenated blood.',
    tags: ['heart'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2018,
    question: 'QRS complex in ECG represents:',
    options: ['Atrial depolarization', 'Ventricular depolarization', 'Atrial repolarization only', 'Valve movement'],
    correctAnswer: 1,
    explanation: 'QRS corresponds to ventricular depolarization.',
    tags: ['ecg', 'heart'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2017,
    question: 'Functional unit of kidney is:',
    options: ['Neuron', 'Nephron', 'Alveolus', 'Sarcomere'],
    correctAnswer: 1,
    explanation: 'Nephron is structural and functional unit of kidney.',
    tags: ['excretion', 'nephron'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2016,
    question: 'Correct order of urine formation is:',
    options: ['Reabsorption -> filtration -> secretion', 'Filtration -> reabsorption -> secretion', 'Secretion -> filtration -> reabsorption', 'Filtration -> secretion -> reabsorption'],
    correctAnswer: 1,
    explanation: 'Urine formation proceeds as filtration, reabsorption, then secretion.',
    tags: ['excretion', 'urine formation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2015,
    question: 'ADH primarily increases:',
    options: ['Glucose absorption', 'Water reabsorption in kidney', 'Platelet formation', 'Thyroxine synthesis'],
    correctAnswer: 1,
    explanation: 'ADH promotes water reabsorption from kidney tubules.',
    tags: ['hormones', 'adh'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2014,
    question: 'Interaction of actin and myosin is central to:',
    options: ['Nerve transmission', 'Muscle contraction', 'Urine filtration', 'Gas exchange'],
    correctAnswer: 1,
    explanation: 'Sliding of actin and myosin filaments causes muscle contraction.',
    tags: ['locomotion', 'muscle'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2013,
    question: 'CNS consists of:',
    options: ['Only nerves', 'Brain and spinal cord', 'Brain and glands', 'Spinal cord and muscles'],
    correctAnswer: 1,
    explanation: 'Central nervous system includes brain and spinal cord.',
    tags: ['nervous system'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2012,
    question: 'Insulin is secreted by pancreas and mainly:',
    options: ['Raises blood glucose', 'Lowers blood glucose', 'Increases heart rate', 'Reduces oxygen transport'],
    correctAnswer: 1,
    explanation: 'Insulin lowers blood glucose by promoting uptake and utilization.',
    tags: ['endocrine', 'insulin'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2011,
    question: 'Thyroxine is mainly associated with regulation of:',
    options: ['Blood clotting', 'Metabolism', 'Urine output only', 'Muscle contraction only'],
    correctAnswer: 1,
    explanation: 'Thyroxine is a major hormone controlling metabolic rate.',
    tags: ['endocrine', 'thyroxine'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2010,
    question: 'Adrenaline is best linked to:',
    options: ['Growth inhibition', 'Emergency fight-or-flight response', 'Calcium deposition', 'Digestion only'],
    correctAnswer: 1,
    explanation: 'Adrenaline prepares body for emergency situations.',
    tags: ['endocrine', 'adrenaline'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 5: Human Physiology',
    chapter: 'human-physiology',
    year: 2009,
    question: 'Which disorder is linked to insulin deficiency?',
    options: ['Goiter', 'Dwarfism', 'Diabetes mellitus', 'Asthma'],
    correctAnswer: 2,
    explanation: 'Insulin deficiency leads to diabetes mellitus.',
    tags: ['disorders', 'diabetes'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'human-physiology', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 5.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
