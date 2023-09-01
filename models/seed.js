const express = require("express")
const log = require("../models/Logs")

const seedLogs = [
  {
    title: "Two",
    entry: "Day Two. Stranded on island...",
    shipIsBroken: true,
  },
  {
    title: "Three",
    entry: "Day Three. I fear all is lost.",
    shipIsBroken: true,
  },
  {
    title: "Four",
    entry: "HELP ME!!!!!!",
    shipIsBroken: true,
  },
  {
    title: "One",
    entry: "Day One. Got lost in storm last night...",
    shipIsBroken: false,
  },
  {
    title: "Five",
    entry: "Day Five. Making progress on repairs.",
    shipIsBroken: true,
  },
  {
    title: "Six",
    entry: "Day Six. Discovered strange creatures on the island.",
    shipIsBroken: false,
  },
]
const router = express.Router()

router.get("/", (req, res) => {
  log.insertMany(seedLogs, (err, allLogs) => {
    if (err) {
      res.status(400).json({ message: err.message })
    } else {
      res.status(201).json(allLogs)
    }
  })
})


module.exports = router