module.exports = function(app, passport) {

var mongoose = require('mongoose');
        var db = require('../../config/database.js');
        
        var Schema = mongoose.Schema;
         var rankingsSchema = new Schema({
                teams1: String,
                teams2: Number
         });
         
         var probabilitiesSchema = new Schema({
                homeTeam: String,
                homeProb: Number,
                awayTeam: String,
                awayProb: Number,
                week: Number
         });

        var rankings = mongoose.model('rankings', rankingsSchema);
        var probabilities = mongoose.model('probabilities', probabilitiesSchema);

        

    app.get('/', function(req, res) {
        res.render('home.ejs'); // load the index.ejs file
    });

    

    app.get('/rankings', function(req, res) {


        rankings.find({}, function(err, data){
        if (err) console.log(err);
        res.render('rankings.ejs', {
            data: data
        });
    });

    });
    
     app.get('/probabilities', function(req, res) {


        probabilities.find({}, function(err, data){
        if (err) console.log(err);
        console.log(data);
        res.render('probabilities.ejs', {
            data: data
        });
    });

    });
    
    app.get('/about', function(req, res) {
        res.render('about.ejs'); // load the index.ejs file
    });
    
   
    
};


