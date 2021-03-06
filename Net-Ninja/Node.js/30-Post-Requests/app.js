const express          = require('express');
const bodyParser       = require('body-parser');
const app              = express();
const urlencodedParser = bodyParser.urlencoded({extended : false});

app.set('view engine' , 'ejs'); 

app.use('/assets',express.static('assets'));

app.get('/',function(req , res){
  res.render('index');
});
app.get('/contact', function(req , res){
  console.log(req.query);
  res.render('contact',{query: req.query}); // Pass the Query String as a Object to html
});

app.post('/contact',urlencodedParser , function(req , res){
  console.log(req.body);
  res.render('contact-success',{data:req.body});
});

app.get('/profile/:name',function(req,res){
  const data = {age:30 , job : 'Street Fighter' , hobbies:['eating','fighting','fishing']}
  res.render('profile', {person : req.params.name, data});
})

app.listen(3000);