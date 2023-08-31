const mongoose = require('mongoose');
const Log = require('./logs'); // Use './Logs' instead of './models/Logs'

mongoose.connect('mongodb://localhost:27017/logs', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', async () => {
  try {
    console.log('Starting seeding process...');
    const starterLogs = [
      { title: "First Entry", entry: "This is the first log entry.", shipIsBroken: true },
      { title: "Exploration", entry: "Today, we explored a new planet.", shipIsBroken: false },
      // Add more log entries here
    ];
    console.log('Starter logs:', starterLogs);

    // Delete all existing logs
    await Log.deleteMany({});

    // Create the initial log entries
    await Log.create(starterLogs);

    console.log('Seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    db.close();
  }
});
