const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like ur main.js file, or main.
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = app.listen(process.env.PORT || 3005);
