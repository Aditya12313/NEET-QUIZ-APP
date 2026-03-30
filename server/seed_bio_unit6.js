import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2024,
    question: 'Double fertilization is a characteristic feature of:',
    options: ['Bryophytes', 'Gymnosperms', 'Angiosperms', 'Pteridophytes'],
    correctAnswer: 2,
    explanation: 'Double fertilization is unique to angiosperms (flowering plants).',
    tags: ['double fertilization', 'angiosperms'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2023,
    question: 'Triple fusion in angiosperms results in formation of:',
    options: ['Zygote', 'Primary endosperm nucleus', 'Seed coat', 'Embryo sac'],
    correctAnswer: 1,
    explanation: 'One male gamete fuses with two polar nuclei to form primary endosperm nucleus.',
    tags: ['triple fusion', 'endosperm'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2022,
    question: 'Embryo sac in a typical angiosperm is:',
    options: ['8-celled, 8-nucleate', '7-celled, 8-nucleate', '7-celled, 7-nucleate', '8-celled, 7-nucleate'],
    correctAnswer: 1,
    explanation: 'The common Polygonum-type embryo sac is 7-celled and 8-nucleate.',
    tags: ['embryo sac', 'female gametophyte'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2021,
    question: 'Transfer of pollen from one flower to another flower of the same plant is called:',
    options: ['Autogamy', 'Xenogamy', 'Geitonogamy', 'Apomixis'],
    correctAnswer: 2,
    explanation: 'Geitonogamy occurs between different flowers of the same plant.',
    tags: ['pollination', 'geitonogamy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2020,
    question: 'Pollen transfer from anther to stigma of the same flower is:',
    options: ['Autogamy', 'Xenogamy', 'Hydrophily', 'Entomophily'],
    correctAnswer: 0,
    explanation: 'Autogamy is pollination within the same flower.',
    tags: ['pollination', 'autogamy'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2019,
    question: 'Xenogamy refers to pollination between:',
    options: ['Same flower', 'Different flowers of same plant', 'Flowers of different plants of same species', 'Flowers of different species only'],
    correctAnswer: 2,
    explanation: 'Xenogamy occurs between flowers of different plants of the same species.',
    tags: ['pollination', 'xenogamy'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2018,
    question: 'In flowering plants, ovule develops into:',
    options: ['Fruit', 'Seed', 'Endosperm', 'Pollen grain'],
    correctAnswer: 1,
    explanation: 'After fertilization, ovule transforms into seed.',
    tags: ['post-fertilization', 'seed'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2017,
    question: 'In flowering plants, ovary develops into:',
    options: ['Endosperm', 'Fruit', 'Embryo', 'Seed coat'],
    correctAnswer: 1,
    explanation: 'After fertilization, ovary develops into fruit.',
    tags: ['post-fertilization', 'fruit'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2016,
    question: 'Asexual reproduction that produces genetically identical progeny is called:',
    options: ['Hybridization', 'Clonal reproduction', 'Syngamy', 'Crossing over'],
    correctAnswer: 1,
    explanation: 'Asexual reproduction generally forms clones.',
    tags: ['asexual reproduction', 'clones'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2015,
    question: 'Multiple fission is commonly seen in:',
    options: ['Amoeba', 'Hydra', 'Plasmodium', 'Yeast'],
    correctAnswer: 2,
    explanation: 'Plasmodium reproduces by multiple fission in appropriate stages.',
    tags: ['multiple fission', 'Plasmodium'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2014,
    question: 'Budding as a method of asexual reproduction occurs in:',
    options: ['Hydra and yeast', 'Plasmodium and Amoeba', 'Mango and wheat', 'Fish and frog'],
    correctAnswer: 0,
    explanation: 'Hydra and yeast are classic examples of budding.',
    tags: ['budding', 'Hydra', 'yeast'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2013,
    question: 'Parthenocarpy results in:',
    options: ['Seeds without fertilization', 'Seedless fruits', 'Embryo sac formation only', 'Triploid embryos only'],
    correctAnswer: 1,
    explanation: 'Parthenocarpy is fruit development without fertilization, usually seedless.',
    tags: ['parthenocarpy', 'seedless fruits'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2012,
    question: 'Apomixis is best defined as:',
    options: ['Pollen formation without meiosis', 'Seed formation without fertilization', 'Fruit formation from thalamus', 'Embryo development from zygote only'],
    correctAnswer: 1,
    explanation: 'Apomixis is asexual seed formation without fertilization.',
    tags: ['apomixis', 'asexual seed'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2011,
    question: 'Parthenogenesis means development of embryo from:',
    options: ['Fertilized ovule', 'Unfertilized egg', 'Endosperm tissue', 'Integuments'],
    correctAnswer: 1,
    explanation: 'Parthenogenesis is development without fertilization.',
    tags: ['parthenogenesis'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 6: Reproduction',
    chapter: 'reproduction',
    year: 2010,
    question: 'Which of the following correctly represents sexual reproduction events?',
    options: ['Fertilization -> pre-fertilization -> post-fertilization', 'Pre-fertilization -> fertilization -> post-fertilization', 'Post-fertilization -> fertilization -> pre-fertilization', 'Gametogenesis -> embryo -> pollination only'],
    correctAnswer: 1,
    explanation: 'The sequence is pre-fertilization, fertilization, and post-fertilization.',
    tags: ['sexual reproduction', 'sequence'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'reproduction', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 6.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
  }
}

run();
