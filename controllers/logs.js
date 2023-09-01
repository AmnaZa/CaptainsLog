const express = require("express");
const Log = require("../models/Logs");

const router = express.Router();



// Index - Display all logs
router.get('/', (req, res) => {
  Log.find({})
    .then(foundLogs => {
      res.render('Log/Index', {
        logs: foundLogs
      });
    })
    .catch(error => res.status(400).json({ error }))
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
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;

  Log.findOne({ _id: id })
    .then(foundLog => {
      res.render('Log/Edit', { log: foundLog });
    })
    .catch(error => res.status(400).json({ error }));
});

//update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedLog = req.body;
  
  Log.updateOne({ _id: id }, updatedLog, { new: true })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});





// Create - Create a new log entry
router.post('/', (req, res) => {
  Log.create(req.body)
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});


// Show - Display details of a specific log entry
router.get('/:id', (req, res) => {
  const id = req.params.id;

  Log.findOne({ _id: id })
    .then(foundLog => {
      res.render('Log/Show', { log: foundLog });
    })
    .catch(error => res.status(400).json({ error }));
});


// Seed route - Populate the database with starter logs
// router.get('/seed', (req, res) => {
//   const starterLogs = [
//     { title: "Log 1", entry: "Entry 1", shipIsBroken: true },
//     { title: "Log 2", entry: "Entry 2", shipIsBroken: false },
//     // Add more starter logs here...
//   ];

//   Log.deleteMany({}) // Clear existing logs
//     .then(() => {
//       Log.insertMany(starterLogs) // Insert new logs
//         .then(() => res.status(200).send("Database seeded successfully"))
//         .catch(error => res.status(500).json({ error }));
//     })
//     .catch(error => res.status(500).json({ error }));
// });

module.exports = router;
