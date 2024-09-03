const express = require('express')
const app = express()
const fs= require('fs')
const blog = require('./public/blog')
const port = 3000

///middleware wo function hai jo kisi bhi req sy pehly chaly ga or is mei order important hai

//////////////////////////////////////1st////////////////////////////////////////////
// serving static files images or javascript file.

app.use(express.static('public'));
app.use('/blog', blog)
// http://localhost:3000/mylearrn.txt
// http://localhost:3000/hi.js
// http://localhost:3000/blog


///////////////////////////////////////2nd////////////////////////////////////////////
///middleware2 it is a logger for our application

// next ka matlab  hai ky agla middleware chalny do agar next nahi ho ga to os d=function sy agy vala code execute ni hoga
// agar hum pehly hi response ko send kar rahy hai to next() ni likhtygy varna error aye ga
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
// middleware 1

app.use((req, res, next)=>{
// res.send("hello mery jan")
 console.log('m1')
  next()  
 })



app.use((req, res, next) => {
  console.log(req.headers)
  req.harry=56;
  fs.appendFileSync("logged.txt",`${Date.now()} is a  ${req.method}/n`)
  console.log(`${req.method} ${req.url}`)
  next() // Pass control to the next middleware function
});


// middleware 2
app.use((req, res, next)=>{
  console.log('m2')
  next()
})















app.get('/', (req, res) => {
  res.send('Hello World!' + req.harry)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})