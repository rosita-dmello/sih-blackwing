const nodemailer = require('nodemailer');
const dotenv = require('dotenv').config();

const sendEmail = async (toEmail, subject, body) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PASSWORD,
            clientId: process.env.NODEMAILER_CLIENT_ID,
            clientSecret: process.env.NODEMAILER_CLIENT_SECRET,
            refreshToken: process.env.NODEMAILER_REFRESH_TOKEN
        },
    });

    let mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to:toEmail,
        subject: subject,
        text: body
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;