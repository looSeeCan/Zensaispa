const express = require("express");
console.log(express);

const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const anotherPage = require("./routes/another_page");
app.use("/", anotherPage); /// "/" mount to localhost3000. so basically: localhost3000/another_page

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});

//TODO: continue attempting Heroku. and/or ngrok
