require('dotenv').config();

const {JWT_SECRET} = process.env
const { nanoid } = require(`nanoid`);
const { Users } = require(`../models`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const multer = require(`multer`);
const BaseController = require('./baseController');

// create JWT
const generateToken = () => {
  const payload = {
    id : this.id,
    email : this.email
  };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

// const register = async(req,res,next) => {
//     try {
//         const {
//            email, username, password, role
//         } = req.body;
       
//         const encryptedPassword = await bcrypt.hash(password,10);
//         const image_profile = req.file ? req.file.path : undefined;
//         const whatRole = (role === undefined || role === 'user') ?  'user' : 'admin';
        
//         const user = await Users.create({
//            id: nanoid(),
//            email,
//            username,
//            password: encryptedPassword,
//            role: whatRole,
//         });

//         res.status(201).json({
//            success : true,
//            status : `Register success`,
//            data : {email, username, image_profile, role}
//         });
//     }
//     catch(error) {
//        next(error)
//     }
// }


module.exports = {
    register
}