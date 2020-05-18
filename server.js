const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
console.log("here boy",$NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname, 'build'));
}

// app.use(express.static(__dirname, 'build'));

// Define API routes here

// Send every other request to the React app
// app.get("/ping", () => {
  // return res.send('pong');
// });

// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
