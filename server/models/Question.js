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

export default mongoose.model('Question', questionSchema)
