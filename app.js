const express=require('express');
const app=express();
//Config
app.set('view engine','pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(express.urlencoded({extended :true}));

//Routes
 app.get('/',(req,res)=>{
    return res.render('landingPage');
 });
 
app.get('/login',(req,res)=>{
    return res.render('login');
});

app.post('/login',(req,res)=>{
    const {email,password}=req.body;
    return res.redirect('/');
});
app.get('/register',(req,res)=>{
    return res.render('register');
});
app.post('/register',(req,res)=>{
    const {email,password,dateOfBirth,name}=req.body;
    return res.redirect('/registrationDone');
})
app.get('/registrationDone',(req,res)=>{
    return res.render('registrationDone')
 })
app.post('/registrationDone',(req,res)=>{
   return res.redirect('/');
 })
app.get('*',(req,res)=>{
    return res.render('404page');
})
app.post('*',(req,res)=>{
    return res.redirect('/')
})

//start
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});