/////////////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////////////
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');
const Log = require('./models/Logs');



/////////////////////////////////////////////////
// Create our Express Application Object
/////////////////////////////////////////////////
const app = express()
app.engine('jsx', require('express-react-views').createEngine());
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'views'));


/////////////////////////////////////////////////////
// Middleware
/////////////////////////////////////////////////////
app.use(morgan('tiny')); // logging
app.use(methodOverride('_method')); // override for put and delete requests from forms
app.use(express.urlencoded({ extended: true })); // parses data sent in the body to make it usable in our app
app.use(express.static('public')); // serves files from public statically

////////////////////////////////////////////
// Routes
////////////////////////////////////////////

app.get('/', (req, res) => {
  res.send('your server is running... better catch it!');
});

app.use('/logs', require('./controllers/logs'))

//////////////////////////////////////////////
// Server Listener
//////////////////////////////////////////////
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Now listening on port ${PORT}`))