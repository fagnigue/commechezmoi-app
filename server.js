const express = require('express');

const app = express();

app.use(express.static('./dist/CommeChezMoi2'));

app.get('/*', function (req, res) {
  res.sendFile('index.html', { root: 'dist/commechezmoi-app' }
  );
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`)