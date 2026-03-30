import mongoose from 'mongoose';
import Question from './models/Question.js';
import 'dotenv/config';

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet';

const questionsToSeed = [
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2024,
    question: 'Ecology is the study of:',
    options: ['Only plants', 'Only animals', 'Interactions between organisms and environment', 'Only microorganisms'],
    correctAnswer: 2,
    explanation: 'Ecology deals with organism-environment interactions.',
    tags: ['ecology basics'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2023,
    question: 'Correct ecological hierarchy is:',
    options: ['Organism -> population -> community -> ecosystem -> biosphere', 'Population -> organism -> ecosystem -> community -> biosphere', 'Organism -> community -> population -> ecosystem -> biosphere', 'Biosphere -> ecosystem -> community -> population -> organism'],
    correctAnswer: 0,
    explanation: 'The ecological levels progress from organism to biosphere.',
    tags: ['levels of organization'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2022,
    question: 'In commensalism, interaction is represented as:',
    options: ['(+,+)', '(+,0)', '(+,-)', '(-,-)'],
    correctAnswer: 1,
    explanation: 'One species benefits while the other remains unaffected.',
    tags: ['population interactions', 'commensalism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2021,
    question: 'Mutualism is represented by:',
    options: ['(+,+)', '(+,0)', '(+,-)', '(-,-)'],
    correctAnswer: 0,
    explanation: 'Both species derive benefit in mutualism.',
    tags: ['population interactions', 'mutualism'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2020,
    question: 'Which interaction shows both species negatively affected?',
    options: ['Mutualism', 'Predation', 'Competition', 'Commensalism'],
    correctAnswer: 2,
    explanation: 'Competition is represented as (-,-).',
    tags: ['competition'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2019,
    question: 'S-shaped growth curve is seen in:',
    options: ['Exponential growth', 'Logistic growth', 'Zero growth', 'Population crash'],
    correctAnswer: 1,
    explanation: 'Logistic growth under limited resources gives S-curve.',
    tags: ['logistic growth'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2018,
    question: 'J-shaped curve indicates:',
    options: ['Logistic growth', 'Exponential growth', 'Declining population', 'Age distribution only'],
    correctAnswer: 1,
    explanation: 'Exponential growth under unlimited resources gives J-curve.',
    tags: ['exponential growth'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2017,
    question: 'Energy flow in ecosystem is:',
    options: ['Cyclic', 'Bidirectional', 'Unidirectional', 'Random'],
    correctAnswer: 2,
    explanation: 'Energy moves one way from producers to consumers and is lost as heat.',
    tags: ['energy flow'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2016,
    question: 'Which ecological pyramid is always upright?',
    options: ['Pyramid of number', 'Pyramid of biomass', 'Pyramid of energy', 'All can be inverted equally'],
    correctAnswer: 2,
    explanation: 'Energy decreases at each trophic level so energy pyramid remains upright.',
    tags: ['ecological pyramids', 'energy pyramid'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2015,
    question: 'Interconnected food chains together form:',
    options: ['Food web', 'Detritus', 'Biomass pyramid', 'Ecotone'],
    correctAnswer: 0,
    explanation: 'Food web is a network of interconnected food chains.',
    tags: ['food chain', 'food web'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2014,
    question: 'In-situ conservation includes:',
    options: ['Zoos and aquaria', 'National parks and wildlife sanctuaries', 'Botanical gardens only', 'Cryopreservation'],
    correctAnswer: 1,
    explanation: 'In-situ conservation protects species in natural habitats.',
    tags: ['conservation', 'in-situ'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2013,
    question: 'Ex-situ conservation includes:',
    options: ['Sacred groves', 'Wildlife sanctuaries', 'Zoos and botanical gardens', 'Biosphere reserves'],
    correctAnswer: 2,
    explanation: 'Ex-situ conservation occurs outside natural habitat.',
    tags: ['conservation', 'ex-situ'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2012,
    question: 'Red Data Book contains information on:',
    options: ['Mineral resources', 'Endangered species', 'Forest produce prices', 'Carbon cycle'],
    correctAnswer: 1,
    explanation: 'Red Data Book lists threatened and endangered species.',
    tags: ['Red Data Book', 'endangered species'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2011,
    question: 'Biodiversity hotspots are regions with:',
    options: ['Low species diversity', 'High biodiversity under threat', 'Only high rainfall', 'Only endemic birds'],
    correctAnswer: 1,
    explanation: 'Hotspots have high species richness and significant threat level.',
    tags: ['biodiversity hotspot'],
    difficulty: 'medium',
    verified: true,
    source: 'manual'
  },
  {
    subject: 'biology',
    unit: 'Unit 10: Ecology and Environment',
    chapter: 'ecology-environment',
    year: 2010,
    question: 'Sacred groves are important because they:',
    options: ['Increase pollution', 'Conserve biodiversity through community protection', 'Support only exotic species', 'Are used only for timber extraction'],
    correctAnswer: 1,
    explanation: 'Sacred groves protect local biodiversity and traditional conservation values.',
    tags: ['sacred groves', 'biodiversity conservation'],
    difficulty: 'easy',
    verified: true,
    source: 'manual'
  }
];

async function run() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to DB');

    const delRes = await Question.deleteMany({ chapter: 'ecology-environment', subject: 'biology' });
    console.log(`Deleted ${delRes.deletedCount} old questions for chapter.`);

    const insRes = await Question.insertMany(questionsToSeed);
    console.log(`Successfully seeded ${insRes.length} biology PYQs for unit 10.`);

    mongoose.connection.close();
  } catch (e) {
    console.error(e);
    mongoose.connection.close();
    process.exit(1);
  }
}

run();
