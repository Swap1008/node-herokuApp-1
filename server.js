const express=require('express');
const app=express();
const port=process.env.PORT || 3000;
const hbs=require('hbs');


hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
// 
app.get('/',(req,res)=>{
    res.render('index.hbs');
});

app.get('/about',(req,res)=>{
    res.render('about.hbs');
});


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
    
});