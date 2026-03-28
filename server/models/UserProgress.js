import mongoose from 'mongoose'

const userProgressSchema = new mongoose.Schema({
  user:         { type: String, default: 'Hitashi', index: true },
  chapter:      { type: String, required: true, index: true },
  attempted:    { type: Number, default: 0 },
  correct:      { type: Number, default: 0 },
  weakTags:     { type: [String], default: [] },
  lastAccessed: { type: Date, default: Date.now },
}, { timestamps: true })

// One progress document per chapter per user
userProgressSchema.index({ user: 1, chapter: 1 }, { unique: true })

export default mongoose.model('UserProgress', userProgressSchema)
