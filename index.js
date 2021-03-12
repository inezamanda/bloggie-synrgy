require('dotenv').config();
const express = require('express');
const app = express();

// setting passport
const passport = require('passport')
const authRoute = require(`./route/authRoute`)
const fs = require('fs')
// kodingan untuk membuat folder "images" secara otomatis
if (!fs.existsSync('images')) {
  fs.mkdirSync('images')
}

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('views'));
// app.use(multer)
app.use(passport.initialize())
app.use('/like', require('./route/postsLikesRoute'))
app.use('/comment', require('./route/posts_commentsRoute'))
app.use('/category', require('./route/categoriesRoute'))
app.use('/post', require('./route/postRoute'))
app.use('/users', require('./route/resetPasswordRoute'))
// app.use('/interest', require('./route/userInterestRoute'))
app.use(authRoute)
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