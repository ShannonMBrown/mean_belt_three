// require is similar to import in Python
// express is a framework that we will import.
var express    = require('express'),
    // app is going to be how we use express to add routes, find templates, etc.
    app        = express(),
    // path lets us easily combine variables and string to form a file path
    path       = require('path'),
    bodyParser = require('body-parser'),
    mongoose   = require('./server/config/mongoose.js'),
    port       = 8000;

// Tell express where our static files are
app.use(express.static( __dirname + '/public/dist/public' ));

// Configure body-parser - look at data that a user posts to our server.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// Tell express where our views are
app.set(path.join('views', __dirname, 'views'));

// Now lets set the view engine itself so that express knows that we are using
// ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

// We create this file, it contains all of our routes. Think urls.py in Django
// and routes.rb in ruby.
require('./server/config/routes.js')(app);



// Server Port
app.listen(port, function() {
    console.log(`Server listing on 8000`);
})

