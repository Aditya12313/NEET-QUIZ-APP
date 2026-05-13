import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
  subject:       { type: String, required: true, index: true },
  unit:          { type: String, required: true },
  chapter:       { type: String, required: true, index: true },
  year:          { type: Number, required: true },
  question:      { type: String, required: true },
  options:       { type: [String], required: true },
  correctAnswer: { type: Number, required: true },   // 0-based index into options[]
  explanation:   { type: String, required: true },
  difficulty:    { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  tags:          { type: [String], default: [] },
  verified:      { type: Boolean, default: false, index: true },
  source:        { type: String, default: 'manual' }, // 'manual', 'external'
}, { timestamps: true })

const DefaultQuestion = mongoose.model('Question', questionSchema)

export function getModelForSubject(subject) {
  let collectionName = 'questions'
  const sub = String(subject || '').toLowerCase()
  
  if (sub === 'physics') collectionName = 'seed_physics'
  else if (sub === 'biology' || sub === 'bio') collectionName = 'seed_bio'
  else if (sub === 'chemistry' || sub === 'chem') collectionName = 'seed_chem'

  const modelName = `Question_${collectionName}`
  if (mongoose.models[modelName]) {
    return mongoose.models[modelName]
  }
  return mongoose.model(modelName, questionSchema, collectionName)
}

export default DefaultQuestion
