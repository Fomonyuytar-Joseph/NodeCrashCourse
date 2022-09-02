const express = require("express");

//express app
const app = express();

//listen to request
app.get("/", (req, res) => {
  // res.send('<p>Home page</p>')
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  // res.send('<p>The About Page</p>')
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

//listen to server
app.listen(5000);
