require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({extended : true}))
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.static('views'));

app.get('/', (req, res) => {
  res.render('index');
});

// setting passport
const passport = require(`./lib/passport`)
app.use(passport.initialize())

const router = require(`./route/authRoute`)
app.use(router)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
