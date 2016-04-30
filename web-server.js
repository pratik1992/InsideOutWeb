/**
 * Created by pratikkulkarni on 3/12/16.
 */

var express =require('express'),
    stylus=require('stylus'),
    logger =require('morgan'),
    bodyParser =require('body-parser'),
    mongoose=require('mongoose');
    path=require('path');



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();



mongoose.connect('mongodb://127.0.0.1:27017/InsideOut');

var db= mongoose.connection;
db.on('error',console.error.bind(console,'connection error...'));
db.once('open',function callback()
{
    console.log('Inside Out Db opened!');
});

var userSchema= new  mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String


});
var UserDetail = mongoose.model('UserDetail',userSchema);


var userFeedbackSchema= new  mongoose.Schema({
    name:String,
    phone:String,
    email:String,
    message:String


});
var UserFeedback = mongoose.model('UserFeedBack',userFeedbackSchema);





app.use(logger('dev'));
app.use(bodyParser());

app.use(express.static(__dirname + '/app'));




app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/index.html'));
});


app.get('/bigdata.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/big-data.html'));
});


app.get('/iot.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/iot.html'));
});


app.get('/management.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/management.html'));
});


app.get('/blog.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/blog.html'));
});

app.get('/contact.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/contact.html'));
});

app.get('/mobile.html', function (req, res) {
    res.sendFile(path.join(__dirname + '/app/public/mobile.html'));
});



app.post('/saveuser',function(req,res) {

    var userdetail= new UserDetail({

        firstname:req.body.fname,
        lastname:req.body.lname,
        email:req.body.email,



    })

    userdetail.save(function(err,doc){
        if(err)
            res.json(err);
        else
            console.log("Successfully Inserted");

    });


});

app.post('/savefeedback',function(req,res) {

    var userFeedback= new UserFeedback({

        name:req.body.name,
        phone:req.body.phone,
        email:req.body.email,
        message:req.body.message,




    })

    userFeedback.save(function(err,doc){
        if(err)
            res.json(err);
        else
            console.log("Successfully Inserted");

    });


});




var port = 3031;
app.listen(port);

console.log('Listening on port ' + port + '...');
