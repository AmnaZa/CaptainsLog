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
router.get('/', (req, res) => {
  Log.find({})
    .then(foundlogs => {
      res.render('Log/Index', { logs: foundlogs });
    })
    .catch(error => res.status(400).json({ error }));
});


// New
router.get('/new', (req, res) => {
  res.render('Log/New'); // Note the uppercase "Log" and no file extension
});

// Delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Log.deleteOne({ _id: id })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

// Update
router.put('/:id', (req, res) => {
  const id = req.params.id
  req.body.cost = parseFloat(req.body.cost);

  Log.updateOne({ _id: id }, req.body, { new: true })
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

// Create
router.post('/', (req, res) => {
  req.body.cost = parseFloat(req.body.cost);
  Log.create(req.body)
    .then(data => res.redirect('/logs'))
    .catch(error => res.status(400).json({ error }));
});

// Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id;
  Log.findById(id)
    .then(foundLog => {
      // Render the edit page with the foundLog
    })
    .catch(error => res.status(400).json({ error }));
});


// Show
router.get('/:id', (req, res) => {
  const id = req.params.id;
  Log.findById(id)
    .then(foundLog => {
      // Render the show page with the foundLog
    })
    .catch(error => res.status(400).json({ error }));
});

// // SEED ROUTE
// router.get('/seed', (req, res) => {
//   // array of starter logs
//   const starterlogs = [
//     { name: "Chips", cost: 3.99, calories: 200 },
//     { name: "Cookies", cost: 4.99, calories: 1000 },
//     { name: 'Chocolate', cost: 1.99, calories: 400 },
//     { name: 'Nuts', cost: 2.99, calories: 500 }
//   ];

//   // Delete all logs
//   Log.deleteMany({})
//     .then(data => {
//       Log.create(starterlogs)
//         .then(data => {
//           res.status(200).json(data);
//         })
//         .catch(error => {
//           res.status(400).json(error);
//         });
//     })
//     .catch(error => {
//       res.status(400).json(error);
//     });
// });

//////////////////////////////////////////
// Export the Router
//////////////////////////////////////////
module.exports = router;