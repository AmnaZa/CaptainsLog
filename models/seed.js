const mongoose = require('./connection');
const Log = require('./models/Logs'); // Assuming this is the correct path to your Log model

const db = mongoose.connection;
router.get('/seed', (req, res) => {
db.once('open', async () => {
  try {
    // Array of starter logs
    const starterLogs = [
      { title: "First Entry", entry: "This is the first log entry.", shipIsBroken: true },
      { title: "Exploration", entry: "Today, we explored a new planet.", shipIsBroken: false },
      // Add more log entries here
    ];

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
