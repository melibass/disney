const { createTransport } = require("nodemailer");

var transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    
    auth: {
      user: "mbassano@gmail.com",
      pass: "dnasialqwahalsin",
    },
});
module.exports = { transporter };