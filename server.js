const express = require("express");
console.log(express);

const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

const anotherPage = require("./routes/another_page");
console.log("////////////////////////////////////////////", anotherPage);
app.use("/", anotherPage); /// "/" mount to localhost3000. so basically: localhost3000/another_page

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
