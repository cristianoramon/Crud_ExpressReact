import jwt from "jsonwebtoken";

export default function verificaToken(req:any,res:any,next:any){ 
    const headerAuth = req.headers["authorization"];  
    const token = headerAuth?.split(" ")[1]; 

    console.log(token);  
    if (!token) {
        // return res.status(401).json({error:"Token não informado"});
        return res.status(401).send();
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (err:any, decoded:any) => {
        if (err) {
            return res.status(401).send();
        }
    });

    next();
}