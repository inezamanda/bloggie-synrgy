require('dotenv').config();

const {JWT_SECRET} = process.env
const { nanoid } = require(`nanoid`);
const { Users } = require(`../models`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const BaseController = require('./baseController');

class UserController extends BaseController {
    constructor() {
        super(Users)
    }

    async register (email, password, username, fullName, image_profile, about, interest, role) {
        const encryptedPassword = await bcrypt.hash(password,10);
        const id = nanoid()
        const payload = {
            id, email, username, fullName, image_profile, about, interest, role
        };
        
        await Users.create({
           ...payload,
           password: encryptedPassword,
        });

        payload.token = jwt.sign({ id }, JWT_SECRET);
        return payload;
    }
}

module.exports = UserController