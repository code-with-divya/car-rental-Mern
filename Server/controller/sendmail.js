import nodemailer from "nodemailer"
import dotenv from "dotenv"
let testaccount =await nodemailer.createTestAccount()

dotenv.config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAILID,
        pass: process.env.PASSWORD
    }
});

export const Sendmail = async (req, res) => {

    const { email, subject, message } = req.body
    console.log(email, subject, message )

    try {
        const mailOptions = {
            from: 'shivkumarloharkar2002@gmail.com', // sender address
            to: email, // list of receivers
            subject: subject || 'Aapla bajar Feedback', // Subject line
            text: message, // plain text body
        };
        const info = await transporter.sendMail(mailOptions);

        console.log('Email sent successfully:', info.response);

        res.json(info)

    }
    catch (e) {
        console.log(e)
    }
}


