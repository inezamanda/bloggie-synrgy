require('dotenv').config();

const {JWT_SECRET} = process.env
const { nanoid } = require(`nanoid`);
const { Users } = require(`../models`);
const bcrypt = require(`bcrypt`);
const jwt = require(`jsonwebtoken`);
const multer = require(`multer`);

// create JWT
const generateToken = () => {
  const payload = {
    id : this.id,
    email : this.email
  };
  const token = jwt.sign(payload, JWT_SECRET);
  return token;
}

const register = async(req,res,next) => {
    try {
       const {
           email, username, password, name,occupation, about, interest, role
       } = req.body;
       
       const image_profile = req.file.path;

       const encryptedPassword = await bcrypt.hash(password,10)

       const user = await Users.create({
           id: nanoid(),
           email,
           username,
           password: encryptedPassword,
           role,
           name,
           image_profile: image_profile,
           occupation,
           about,
           interest
       });

       res.status(201).json({
           success : true,
           status : `Register success`,
           data : {email, username, name, image_profile, occupation, about, interest, role}
       });
   }
   catch(error) {
       next(error)
   }
}

module.exports = {
    register
}