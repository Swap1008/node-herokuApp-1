const express=require('express');
const app=express();
const port=process.env.PORT || 3000;


app.get('/',(req,res)=>{
    res.send("Welcome Index Page");
});

app.get('/about',(req,res)=>{
    res.send("About Us Page");
})


app.listen(port,()=>{
    console.log(`Server started at ${port}`);
    
});