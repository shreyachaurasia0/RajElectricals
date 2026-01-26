import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ success: false, message: "No token, authorization denied" });
    }

    const token = authorization.startsWith("Bearer ") ? authorization.slice(7) : authorization;

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Handle both string tokens and object tokens
    if (typeof token_decode === "string") {
      // If token is a plain string (user email), use it as userId
      req.user = { id: token_decode, _id: token_decode };
    } else if (typeof token_decode === "object") {
      // If token is an object, attach it as req.user
      req.user = token_decode;
    }

    next();
  } catch (error) {
    console.log("Auth Error:", error);
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

export default authUser;