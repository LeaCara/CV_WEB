
/*jshint esversion: 6 */
const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //console.log(req);
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h1>Contact Me at https://leacara.github.io/CV_WEB/</h1>");
});

app.get("/help", function(req, res){
  res.send("<h1>Contact Me at https://leacara.github.io/CV_WEB/</h1>");
});

app.get("/about", function(req, res){
  res.send("<h1>Hi!</h1><p>My name is Leandro Carancini, an Electronic Engineer, nice to meet you</p>");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
