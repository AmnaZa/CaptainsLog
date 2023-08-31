const express = require("express");
const Log = require("../models/Logs");

const router = express.Router();



// Index - Display all logs
router.get('/', async (req, res) => {
  try {
    const foundLogs = await Log.find({});
    console.log(foundLogs); // Add this line
    res.render('Log/Index', { logs: foundLogs });
  } catch (error) {
    res.status(400).json({ error });
  }
});


// New - Display form to create a new log
router.get('/new', (req, res) => {
  res.render('Log/New');
});

// Delete - Render confirmation page for log deletion
router.get('/:id/delete', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    if (foundLog) {
      res.render('Log/Delete', { log: foundLog });
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Delete - Perform log deletion
router.delete('/:id', async (req, res) => {
  try {
    const result = await Log.deleteOne({ _id: req.params.id });
    if (result.deletedCount > 0) {
      res.redirect('/logs');
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Edit - Render edit form for a log
router.get('/:id/edit', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    if (foundLog) {
      res.render('Log/Edit', { log: foundLog });
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

//update
router.put('/:id', async (req, res) => {
  try {
    const updatedLog = await Log.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (updatedLog) {
      res.redirect('/logs');
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = router;

// Create - Create a new log entry
router.post('/', async (req, res) => {
  try {
    await Log.create(req.body);
    res.redirect('/logs');
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Show - Display details of a specific log entry
router.get('/:id', async (req, res) => {
  try {
    const foundLog = await Log.findById(req.params.id);
    if (foundLog) {
      res.render('Log/Show', { log: foundLog });
    } else {
      res.status(404).json({ error: 'Log not found' });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Seed route - Populate the database with starter logs
router.get('/seed', (req, res) => {
  const starterLogs = [
    { title: "Log 1", entry: "Entry 1", shipIsBroken: true },
    { title: "Log 2", entry: "Entry 2", shipIsBroken: false },
    // Add more starter logs here...
  ];

  Log.deleteMany({}) // Clear existing logs
    .then(() => {
      Log.insertMany(starterLogs) // Insert new logs
        .then(() => res.status(200).send("Database seeded successfully"))
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
});

module.exports = router;
