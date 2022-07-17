const express = require('express'),
      path = require('path'),
      nodemMailer = require('nodemailer'),
      app = express,
      bodyParser = require('body-parser'),
 { application } = require('express');
app.set('view engine', 'ejs');
app.use(expresss.static('/style'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req,res) =>{
    res.render('index');
})

app.post('/send-email', (req,res) =>{
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'nnamdichimmezirim@xx.com',
            pass: 'meeeee'
        }
    });
    let mailOptions = {
        from: '"Krunal Lathiya" <Krunal Lathiya@gmail.com>',
        to: req.body.to,
        subject: req.body.subject, 
        text: req.body.body,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
            res.render('index');
        });
})
app.listen = (3000,(req, res) =>{
    console.log('My server is running on port 3000')
});