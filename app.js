const express = require('express'),
      path = require('path'),
      nodeMailer = require('nodemailer'),
      bodyParser = require('body-parser');

const app = express();
      app.set('view engine', 'ejs');
      app.use(express.static(path.join(__dirname, 'public')));
      app.use(bodyParser.urlencoded({extended: true}));
      app.use(bodyParser.json());

    app.get('/', function (req, res) {
      res.render('index');
    });
    app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
              user: 'xxx@xx.com',
              pass: 'xxxx'
          }
      });
      let mailOptions = {
          from: '"Michael smith" <mikeross@gmail.com>',
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
      });

      const port = 3000;
          app.listen(port, function(){
            console.log('Server is running at port: ',port);
          });
