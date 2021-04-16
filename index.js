require('dotenv').config();
const express = require('express');
const app = express();

// setting passport
const passport = require('passport')
const fs = require('fs')
// kodingan untuk membuat folder "images" secara otomatis
if (!fs.existsSync('public/images', {recursive: true})) {
  fs.mkdirSync('public/images', {recursive: true})
}

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static('public'));
app.use(passport.initialize())
app.use('/', require(`./route/authRoute`))
app.use('/like', require('./route/postsLikesRoute'))
app.use('/mainfeed', require('./route/mainFeedRoute'))
app.use('/comment', require('./route/posts_commentsRoute'))
app.use('/category', require('./route/categoriesRoute'))
app.use('/postcategory', require('./route/postsCategoriesRoute'))
app.use('/post', require('./route/postRoute'))
app.use('/follow', require('./route/followersRoute'))
app.use('/interest', require('./route/userInterestRoute'))
app.use('/user', require('./route/resetPasswordRoute'), require(`./route/userRoute`), require('./route/search'))
app.use('/admin', require(`./route/userAdminRoute`))
app.use('/', require('./route/indexRoute'))

app.get('/', (req, res) => {
  res.render('index');
});

// app.use("/", (req, res, next) => {
//   res.status("404").json({
//     error: {
//       status: "404 Not Found",
//       message: "Route not found"
//     }
//   })
// })

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});