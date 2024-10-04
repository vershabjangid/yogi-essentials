let express = require('express')
let app = express();
let cors = require('cors')
const nodemailer = require("nodemailer");


app.use(cors())
app.use(express.json())

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "yogiessentialspvtltd@gmail.com",
        pass: "bbaonjyuyeorlasx",
    },
});


app.post("/email", async (req, res) => {
    console.log(req.body)
    let data = {
        Name: req.body.Name,
        Phone: req.body.Phone,
        Email: req.body.Email
    }

    const info = await transporter.sendMail({
        from: 'Yogi Essentials', // sender address
        to: `${data.Email}`, // list of receivers
        subject: "Yogi Essential", // Subject line
        text: "thank you for contacting", // plain text body
        html: "<b>thank you for contacting us <br/> Your Request has been received <br/> we contact you soon</b>", // html body
    });
    res.send({
        Status: 1,
        Message: "Request Sended Successfully"
    })
})

app.post("/email-receive", async (req, res) => {

    let data = {
        Name: req.body.Name,
        Email :req.body.Email,
        Phone : req.body.Email
    }
    const info = await transporter.sendMail({
        from: 'Yogi Essentials', // sender address
        to: "yogiessentialspvtltd@gmail.com", // list of receivers
        subject: `Yogi Essential Enquiry from ${req.body.Phone}`, // Subject line
        text: `${data}`, // plain text body
        html: `<b>${req.body.Email}<br/>${req.body.Phone}<br/>${req.body.Name}</b>`, // html body
    });
    res.send({
        Status: 1,
        Message: "Request Sended Successfully"
    })
})

app.listen('5000')