////////////////////////////////////////
// Import Dependencies
////////////////////////////////////////
const express = require("express");
const Log = require("../models/Logs");

/////////////////////////////////////////
// Create Router
/////////////////////////////////////////
const router = express.Router();

/////////////////////////////////////////
// Routes
/////////////////////////////////////////

// REMEMBER INDUCES

// Index
router.get('/', async (req, res) => {
  try {
    const foundLogs = await Log.find({});
    res.render('Log/Index', { logs: foundLogs });
  } catch (error) {
    res.status(400).json({ error });
  }
});

// New
router.get('/new', (req, res) => {
  res.render('Log/New');
});

// Delete (Render confirmation page)
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

// Delete (Perform deletion)
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

// Update (Render edit form)
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

// Update (Perform update)
router.put('/:id', async (req, res) => {
  try {
    req.body.cost = parseFloat(req.body.cost);
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

// Create
router.post('/', async (req, res) => {
  try {
    req.body.cost = parseFloat(req.body.cost);
    await Log.create(req.body);
    res.redirect('/logs');
  } catch (error) {
    res.status(400).json({ error });
  }
});

// Show
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

// Seed route
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
