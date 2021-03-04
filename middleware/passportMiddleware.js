require('dotenv').config();

const {JWT_SECRET} = process.env
const passport = require(`passport`)
const { Strategy , ExtractJwt } = require("passport-jwt")
const { Users } = require(`../models`)

passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
}, async (payload, done) => {
    Users.findByPk(payload.id)
      .then(user => done(null, user))
      .catch(err => done(err, false))
}))

const jwt = passport.authenticate(`jwt`, { session : false });

module.exports = jwt;