const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

if (require.main === module) {
  app.listen(8888, () => {
    console.log("Server running on port 8888");
  });
}

module.exports = app;
