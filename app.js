const express = require("express");
const morgan = require('morgan')

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");

//listen to request
// app.use((req,res ,next)=>{
//   console.log('new request made');
//   console.log('host: ',req.hostname);
//   console.log('path: ',req.path);
//   console.log('method: ',req.method);
//   next();
// })

//middle ware to serve static css file
app.use(express.static('public'))
app.use(morgan('dev'))


app.get("/", (req, res) => {
  // res.send('<p>Home page</p>')
  //   res.sendFile("./views/index.html", { root: __dirname });
  const blogs = [
    {
      title: "Discover Earth today",
      snippet: "the weather is very cold today",
    }, 
    { title: "Meet my new Friend", snippet: "the weather is very cold today" },
    {
      title: "Contius developmet of JS",
      snippet: "the weather is very cold today",
    },
  ];
  res.render("index", { title: "Home" , blogs });
});

app.get("/about", (req, res) => {
  // res.send('<p>The About Page</p>')
  //   res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//redirects

// app.get("/about-us", (req, res) => {
//   res.redirect("/about");
// });

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

app.use((req, res) => {
  //   res.status(404).sendFile("./views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});

//listen to server
app.listen(5000);
