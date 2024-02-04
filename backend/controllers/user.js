const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log(req.body)
    try {
        const user = await User.findOne({ email });

        if (!user)
            return res
                .status(404)
                .json({ success: false, msg: "invalid credentials" });
        
                console.log(password,user.password)
        let check = await bcrypt.compare(password,user.password)

        if (!check)
            return res.json({ success: false, msg: "invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "3d",
        });

        res.json({ token, user, success: true, msg: "login successful" });
    } catch (error) {
        res.status(500).json({ success: false, msg: "internal server error" });
    }
};

// * Registering the User
exports.registerUser = async (req, res) => {
    const { email, password, lastName, firstName, plan } = req.body;

    try {
        if (!email || !password || !lastName || !firstName || !plan)
            return res
                .status(400)
                .json({ success: false, msg: "all fields are required" });
console.log(req.body)
        let user = await User.findOne({ email });
        if (user)
            return res
                .status(400)
                .json({ success: false, msg: "cannot register this email" });

        let hashedPass = await bcrypt.hash(password, 10);
        console.log(hashedPass);
        user = await User.create({
            email,
            password: hashedPass,
            lastName,
            firstName,
            plan,
            subscribed:true,
        });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "3d",
        });
        res.json({
            success: true,
            user,
            msg: "account created successfully",
            token,
        });
    } catch (error) {
        res.status(500).json({ success: false, msg: error.message });
    }
};
