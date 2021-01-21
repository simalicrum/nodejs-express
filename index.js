const express = require("express");
const app = express();
const port = 8000;

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile("index.html", {
    root: __dirname,
  });
});

app.get(["/about", "/about.html"], (req, res) => {
  res.sendFile("about.html", {
    root: __dirname,
  });
});

app.get(["/contact-me", "/contact-me.html"], (req, res) => {
  res.sendFile("contact-me.html", {
    root: __dirname,
  });
});

app.get("*", (req, res) => {
  res.sendFile("404.html", {
    root: __dirname,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
