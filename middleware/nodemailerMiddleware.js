require('dotenv').config();
const nodemailer = require('nodemailer');

// These id's and secrets should come from .env file.
const { USER_EMAIL, USER_PASSWORD } = process.env

async function sendMailer(host, data) {
    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: USER_EMAIL,
            pass: USER_PASSWORD
        },
    });

    const mailOptions = {
        from: USER_EMAIL,
        to: data[0].email,
        subject: 'Reset Password',
        html: `<h3>Hello ${data[0].fullName}</h3><br><p>If you want to reset password, klik <a href="http://${host}/user/reset/${data[0].id}">here</a></p>`,
    };

    const result = await transport.sendMail(mailOptions);
    return result;
}

module.exports = sendMailer