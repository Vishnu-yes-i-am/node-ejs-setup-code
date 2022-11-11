const express = require('express');
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'/assets')))
app.set('view engine', "ejs");
app.get("/", (req, res) => {
    res.render('home.ejs', { username: "vishnu" })
})

app.get("/profile",(req,res)=>{
    res.render('profile.ejs')
})

app.listen(4500);
console.log("app is running at port 4500")

