const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const host = '127.0.0.1';
const port = process.env.PORT || 5000;

app.use(cors({ origin: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  req.accepts('text/html');
  res.render('index');
});

app.use('/api', require('./routes'));

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
