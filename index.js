require('dotenv').config();
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('views'));

app.use('/comment', require('./route/posts_commentsRoute'))
app.use('/', require('./route/indexRoute'))

app.get('/', (req, res) => {
  res.render('index');
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
