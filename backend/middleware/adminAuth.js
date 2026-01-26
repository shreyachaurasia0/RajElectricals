import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try{
        const { authorization } = req.headers;
        
        if(!authorization){
            return res.status(401).json({success: false, message: "No authentication token, authorization denied"});
        }
        
        const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : authorization;
        
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        
        const adminEmail = process.env.ADMIN_EMAIL;
        
        // Verify that the token email matches the admin email
        if(token_decode.email !== adminEmail){
            return res.status(403).json({success: false, message: "Not authorized as admin"});
        }
        
        req.user = token_decode;
        next();
    }
    catch (error){
        console.log("Admin Auth Error:", error);
        res.status(401).json({success: false, message: "Invalid token"});
    }
}

export { adminAuth };