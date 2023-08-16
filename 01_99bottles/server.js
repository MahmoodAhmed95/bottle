// Load express
const express = require("express");

// Create our express app
const app = express();

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get("/", function (req, res) {
  res.redirect("/bottles/99");
});
app.get(`/bottles/:bottleOfPops`, function (req, res) {
  if (req.params.bottleOfPops == 1) {
    res.send(
      `${req.params.bottleOfPops} on the wall <a href="/">Start Over</a> pass it round`
    );
  }
  res.send(
    `${req.params.bottleOfPops} on the wall <a href="/bottles/${
      req.params.bottleOfPops - 1
    }">Take one down</a> pass it round`
  );
});
// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log("Listening on port 3000");
});
