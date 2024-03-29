require('dotenv').config();

const { JWT_SECRET } = process.env
const { nanoid } = require(`nanoid`);
const { Users } = require(`../models`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const BaseController = require('./baseController');

class UserController extends BaseController {
    constructor() {
        super(Users)
    }

    async register (email, password, username, fullName, imageProfile, about, interest, role, location, occupation) {
        const encryptedPassword = await bcrypt.hash(password,10)
        const id = nanoid()
        const payload = {
            id, email, username, fullName, imageProfile, about, interest, role, location, occupation
        }

        await Users.create({
            ...payload,
            password: encryptedPassword,
        })

        payload.token = jwt.sign({ id }, JWT_SECRET)
        return payload
    }

    async login(email, password) {
        const user = await Users.findOne({
            where: { email }
        })

        const checkPassword = await bcrypt.compare(password, user.password)

        if (checkPassword) {
            const payload = {
                id: user.id,
                email: user.email,
                token: jwt.sign({ id: user.id }, JWT_SECRET)
            };
            return payload;
        } else {
            return false
        }
    }
}

module.exports = UserController