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

app.use("/", (req, res, next) => {
  res.status("404").json({
    error: {
      status: "404 Not Found",
      message: "Route not found"
    } 
  })
})

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
