// const express = require("express");
// console.log(express);

// const path = require("path");

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const anotherPage = require("./routes/another_page");
// app.use("/", anotherPage); /// "/" mount to localhost3000. so basically: localhost3000/another_page

// app.listen(PORT, () => {
//   console.log(`Server is listening on http://localhost:${PORT}`);
// });

import express from "express";
import path from "node:path";
const app = express();

///app.use. This needs to be used to render gstatic css
///because i am using express static middleware to point to /src/public. I have to update the path in the html file according to the path below.
app.use(express.static(path.join(process.cwd(), "src", "public")));

app.get("/", (req, res) => {
  ///process.cwd full path of this folder
  const filePath = `${process.cwd()}/src/public/index.html`;
  res.sendFile(filePath);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
