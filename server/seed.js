require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/project');

const projects = [
  {
    title: 'Nooks and Crannies Ltd',
    description: 'A full-stack real estate web application built for Nooks and Crannies realtors LTD that allows users to browse and search for properties, while providing an admin system for managing listings and user authentication.',
    techStack: ['React', 'Node.js'],
    category: 'ai',
    featured: true,
    liveUrl: 'https://nooks-and-crannies-realtors.vercel.app/'
  }
];

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    for (const p of projects) {
      const created = await Project.create(p);
      console.log('Created:', created.title);
    }
    console.log('Done! You can add more projects by editing the array in this file.');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
  });
