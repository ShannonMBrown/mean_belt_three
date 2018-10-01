const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost:27017/dbmeanbelt', { useNewUrlParser: true });
mongoose.Promise = global.Promise;


// Save Paths to Model Folder
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file){
  if (file.indexOf('.js') >= 0){
    require(models_path + '/' + file);
  }  
});
