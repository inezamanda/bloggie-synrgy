require('dotenv').config();

const {JWT_SECRET} = process.env
const passport = require(`passport`)
const { Strategy : JwtStrategy, ExtractJwt } = require("passport-jwt")
const { Users } = require(`../models`)

const options = {
    // extract JWT from request, and took the token from header called Authorization
    jwtFromRequest : ExtractJwt.fromHeader(`authorization`),
    secretOrKey : JWT_SECRET
}

passport.use(new JwtStrategy(options, async(payload, done) => {
    Users.findByPk(payload.id)
    .then(user => done(null, user))
    .catch(err => done(err, false))
}))

module.exports = passport