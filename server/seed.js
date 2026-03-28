/**
 * seed.js — Populate the 'questions' collection with 10 verified sample PYQs.
 * Run: node seed.js
 */
import 'dotenv/config'
import mongoose from 'mongoose'
import Question from './models/Question.js'

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/neet'

const SAMPLE_QUESTIONS = [
  // ── Botany: The Living World ──────────────────────────────────────────────
  {
    subject: 'biology',
    unit: 'Unit I — Diversity in the Living World',
    chapter: 'living-world',
    year: 2019,
    question: 'Binomial nomenclature was introduced by:',
    options: ['Aristotle', 'Carolus Linnaeus', 'Ernst Mayr', 'A.P. de Candolle'],
    correctAnswer: 1,
    explanation: "Carolus Linnaeus proposed binomial nomenclature in 'Species Plantarum' (1753).",
    difficulty: 'easy',
    tags: ['nomenclature', 'Carolus Linnaeus', 'taxonomy'],
    verified: true,
  },
  {
    subject: 'biology',
    unit: 'Unit I — Diversity in the Living World',
    chapter: 'living-world',
    year: 2020,
    question: 'The basic unit of classification is:',
    options: ['Genus', 'Class', 'Species', 'Order'],
    correctAnswer: 2,
    explanation: 'Species is the lowest and most fundamental unit of classification.',
    difficulty: 'easy',
    tags: ['taxonomy hierarchy', 'species', 'classification'],
    verified: true,
  },
  // ── Botany: Cell — Unit of Life ───────────────────────────────────────────
  {
    subject: 'biology',
    unit: 'Unit III — Cell: Structure and Functions',
    chapter: 'cell-unit-of-life',
    year: 2018,
    question: 'Fluid mosaic model of plasma membrane was given by:',
    options: ['Watson and Crick', 'Singer and Nicholson', 'Schleiden and Schwann', 'Brown and Altman'],
    correctAnswer: 1,
    explanation: 'Singer and Nicholson proposed the fluid mosaic model in 1972.',
    difficulty: 'easy',
    tags: ['plasma membrane', 'fluid mosaic model', 'Singer-Nicholson'],
    verified: true,
  },
  {
    subject: 'biology',
    unit: 'Unit III — Cell: Structure and Functions',
    chapter: 'cell-unit-of-life',
    year: 2021,
    question: 'Ribosomes in eukaryotic cytoplasm are:',
    options: ['55S', '70S', '80S', '60S'],
    correctAnswer: 2,
    explanation: 'Cytoplasmic ribosomes in eukaryotes are 80S (60S + 40S subunits).',
    difficulty: 'medium',
    tags: ['ribosomes', 'eukaryote', '80S', 'prokaryote', '70S'],
    verified: true,
  },
  // ── Botany: Photosynthesis ────────────────────────────────────────────────
  {
    subject: 'biology',
    unit: 'Unit IV — Plant Physiology',
    chapter: 'photosynthesis',
    year: 2022,
    question: 'First stable product of Calvin cycle (C3 pathway) is:',
    options: ['Oxaloacetate', 'Pyruvate', '3-Phosphoglycerate', 'Glucose'],
    correctAnswer: 2,
    explanation: 'RuBisCO fixes CO2 to RuBP, forming 3-PGA as first stable product.',
    difficulty: 'medium',
    tags: ['Calvin cycle', '3-PGA', 'RuBisCO', 'C3 plants', 'CO2 fixation'],
    verified: true,
  },
  // ── Zoology: Breathing ────────────────────────────────────────────────────
  {
    subject: 'biology',
    unit: 'Unit V — Human Physiology',
    chapter: 'breathing',
    year: 2020,
    question: 'Percentage of O2 transported as oxyhaemoglobin:',
    options: ['70%', '23%', '7%', '97%'],
    correctAnswer: 3,
    explanation: 'About 97% of oxygen is carried bound to haemoglobin as oxyhaemoglobin.',
    difficulty: 'easy',
    tags: ['oxyhaemoglobin', 'oxygen transport', '97%', 'Bohr effect'],
    verified: true,
  },
  // ── Zoology: Molecular Basis of Inheritance ───────────────────────────────
  {
    subject: 'biology',
    unit: 'Unit VII — Genetics and Evolution',
    chapter: 'molecular-basis',
    year: 2019,
    question: 'Start codon in translation is:',
    options: ['UAA', 'UAG', 'AUG', 'UGA'],
    correctAnswer: 2,
    explanation: 'AUG codes for methionine and serves as the start codon.',
    difficulty: 'easy',
    tags: ['start codon', 'AUG', 'methionine', 'translation', 'stop codons'],
    verified: true,
  },
  // ── Chemistry: Basic Concepts ─────────────────────────────────────────────
  {
    subject: 'chemistry',
    unit: 'Class XI — Physical and Inorganic Chemistry',
    chapter: 'basic-concepts',
    year: 2021,
    question: "Avogadro's number is:",
    options: ['6.022 × 10²⁰', '6.022 × 10²³', '6.022 × 10²⁶', '6.022 × 10¹⁸'],
    correctAnswer: 1,
    explanation: 'One mole of any substance contains 6.022 × 10²³ particles.',
    difficulty: 'easy',
    tags: ['Avogadro number', 'mole concept', '6.022 × 10²³', 'molarity'],
    verified: true,
  },
  // ── Physics: Laws of Motion ───────────────────────────────────────────────
  {
    subject: 'physics',
    unit: 'Class XI — Mechanics',
    chapter: 'laws-of-motion-phy',
    year: 2018,
    question: "Newton's First Law is also called the law of:",
    options: ['Action-reaction', 'Inertia', 'Momentum', 'Gravitation'],
    correctAnswer: 1,
    explanation: 'First law defines inertia — resistance to change in state of motion.',
    difficulty: 'easy',
    tags: ['Newton first law', 'inertia', 'net force = 0'],
    verified: true,
  },
  // ── Physics: Work, Energy, Power ─────────────────────────────────────────
  {
    subject: 'physics',
    unit: 'Class XI — Mechanics',
    chapter: 'work-energy',
    year: 2022,
    question: 'Work done is zero when angle between F and d is:',
    options: ['0°', '45°', '90°', '180°'],
    correctAnswer: 2,
    explanation: 'W = Fd cosθ; cos 90° = 0, so no work is done.',
    difficulty: 'easy',
    tags: ['work done', 'W = Fd cosθ', 'zero work', 'force perpendicular'],
    verified: true,
  },
]

async function seed() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('✅ Connected to MongoDB')

    // Avoid duplicates during repeated seeds
    await Question.deleteMany({ verified: true })
    const inserted = await Question.insertMany(SAMPLE_QUESTIONS)
    console.log(`✅ Seeded ${inserted.length} questions.`)

    await mongoose.disconnect()
    console.log('✅ Done. MongoDB disconnected.')
  } catch (err) {
    console.error('❌ Seed failed:', err)
    process.exit(1)
  }
}

seed()
