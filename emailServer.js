import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    }
});
  
var mailOptions = {
    from: 'maddison53@ethereal.email',
    to: 'xxx@gmail.com',
    subject: 'Sending Email using Node.js',
    // text: 'That was easy!',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

send();

async function send() {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
    });
}