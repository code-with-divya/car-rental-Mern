import jwt from "jsonwebtoken"


const SECREATE_KEY="OWIRSJASKLFJLK23"


export const Authenticate = async (req, res, next) => {
    console.log("req.header", req.headers,
        "req.cookies", req.cookies);

    let token = req.cookies.token;
    // if (!token) {
    //     token = req.headers["authorization"]?.split(" ")[1]; 
    // }
    if (!token) {
        return res.status(401).json({ error: "No access token provided" });
    }

    try {
        const decoded = jwt.verify(token,SECREATE_KEY)
        console.log('authinticate user',decoded)
        req.user = decoded
        next()
    }catch(err){
        res.status(403).json(err,"error access token")
    }
}

