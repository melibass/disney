const { createTransport } = require("nodemailer");

var transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    
    auth: {
      user: process.env.USER_NODEMAILER,
      pass: process.env.PASS_NODEMAILER,
    },
});
module.exports = { transporter };