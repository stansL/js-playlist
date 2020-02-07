const express = require('express');
const ejs = require('ejs');
const PORT = process.env.PORT || 5003;
const path = require('path');
const cookieParser = require('cookie-parser');
const todoController = require('./controllers/todoController');



const app = express();

// Set t he view engine
app.set('view engine', 'ejs');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files 
app.use(express.static(path.join(__dirname, 'public')));

// Fire controllers
app.use('/todos',todoController)

app.get('/', (req, res) => {
    res.render("index");
});


app.listen(PORT, () => console.log(`Server running at ${PORT}`));