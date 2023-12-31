const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const path = require("path");
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partial_path = path.join(__dirname, "../template/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partial_path);

app.use(express.static(static_path));

app.get("", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errMsg: "opps!s Page Not Found",
  });
});

app.listen(port, () => {
  console.log("listening to port 8000");
});
