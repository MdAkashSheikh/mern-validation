const User = require('../model/registerSchema')

const registerUser = async(req, res)=> {
    try {
        console.log(req.body)

        const result = await User.create({
            "name": req.body.name,
            "phone": req.body.phone,
            "email": req.body.email,
            "password": req.body.password
        })

        const newUser = new User(result);
        newUser.save();
        res.send(req.body);

    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    registerUser
}
