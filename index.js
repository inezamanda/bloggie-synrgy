require('dotenv').config();

const express = require('express');
const app = express();
var bodyParser = require('body-parser')

// setting multer
const multer = require(`./middleware/multerMiddleware`);
// setting passport
const passport = require('passport')
const passportMiddleware = require(`./middleware/passportMiddleware`)
// const restrict = passport.authenticate('jwt', { session: false })
const authRoute = require(`./route/authRoute`)

app.use(express.json());
app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(multer)
app.use(passport.initialize())

app.get('/', (req, res) => {
  res.render('index');
});

app.use(authRoute)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
