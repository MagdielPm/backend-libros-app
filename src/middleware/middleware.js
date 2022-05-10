import jwt from "jwt-simple";
import moment from "moment";

const TOKEN_KEY = "Token-Auth";

export const verifyMyActiveToken = (req, res, next) => {
  if (!req.headers["user_token"]) {
    return res.json({
      error: "You have to include the header",
    });
  }

  const token = req.headers["user_token"];
  let playload = null;
  try {
    playload = jwt.decode(token, TOKEN_KEY);
  } catch (error) {
    return res.json({
      message: "Invalid token",
      error: error,
    });
  }

  if (moment().unix() > playload.expiresAt) {
    return res.json({
      message: "Expired Token",
    });
  }
  req.id = playload.id;

  next();
};
