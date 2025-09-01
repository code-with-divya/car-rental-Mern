import jwt from "jsonwebtoken";
import Usermodel from "../models/userschema.js"
import { Create_token } from "../Middleware/createtoken.js";
import bcrypt from "bcrypt"
import axios from "axios"
import { oauth2client } from "../Googleconfig/googleconfig.js";


export const Userregister = async (req, res) => {

    const { name, email, password } = req.body
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);




    try {
        const userdata = await Usermodel.create({
            "name": name,
            "email": email,
            "password": hashedPassword,
        })
        res.status(200).json({
            status: true,
            msg: "user added",
            data: userdata,
        })
    }
    catch (e) {
        res.send(e)
    }
}

export const Userlogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.json({ msg: "please fill credential" })
    }

    try {
        const user = await Usermodel.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "Invalid email" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid password" });
        }

        // const userlogin = await Usermodel.findOne({ email: email, password: password })
        // if (!userlogin) {
        //     res.status(400).json({ message: 'Invalid email or password' });
        // }

        const token = Create_token(user)
        return res
            .status(200)
            .cookie("token", token
                //     ,{
                //     httpOnly:true,
                //     secure: 'false',
                //     sameSite: 'Strict',
                //     maxAge : 1 * 60 * 60 * 1000 // hr * mm * mm * 1000 = 1 hr in millisecond
                // }
            )
            .json({
                token: token,
                data: user,
            })
    }
    catch (e) {
        res.send(e)
    }
}

export const getallusers = async (req, res) => {
    const userdata = await Usermodel.find()

    res.json({
        status: true,
        msg: "all user fetched",
        data: userdata
    })
}

export const googleLogin = async (req, res) => {
    const code = req.query.code;
    try {
        const googleRes = await oauth2client.getToken(code);
        oauth2client.setCredentials(googleRes.tokens);
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
        );
        const { email, given_name, family_name } = userRes.data;
        // console.log("googleLogin.", userRes);
        let user = await Usermodel.findOne({ email });

        if (!user) {
            user = await Usermodel.create({
                name: given_name,
                email: email
            });
        }



        const token = Create_token(user)
        return res
            .status(200)
            // .cookie("token", token
            //     //     ,{
            //     //     httpOnly:true,
            //     //     secure: 'false',
            //     //     sameSite: 'Strict',
            //     //     maxAge : 1 * 60 * 60 * 1000 // hr * mm * mm * 1000 = 1 hr in millisecond
            //     // }
            // )
            .json({
                token: token,
                data: user,
            })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}