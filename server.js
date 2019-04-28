const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("<h1>Hi, Homepage</h1>");
});



app.get('/about-us',(req,res)=>{
    res.send("<h1>Hi, About Us page</h1>");
});



app.get('/contact-us',(req,res)=>{
    res.send("<h1>Hi, Contact Us page</h1>");
});







app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});