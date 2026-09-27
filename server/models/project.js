const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  liveUrl: String,
  repoUrl: String,
  category: { type: String, enum: ['fintech', 'ai', 'tooling','web','Mobile'], default: 'fintech' },
  featured: { type: Boolean, default: false },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);