const jwt = require("jsonwebtoken");
exports.checkAuthentication = async (req, res, next) => {
    const { token } = req.headers;
    if (!token)
        return res
            .status(401)
            .json({ success: false, msg: "Please login to continue" });
    const data = jwt.verify(token, process.env.JWT_SECRET);
    console.log(data);
    req.user = data.id;
    next()
};
