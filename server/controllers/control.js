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

const getData = async(req, res) => {
    try {
        const allData = await User.find({}).sort('-date');
        res.send({allData})
    } catch (err) {
        res.status(404).send(err)
    }
}

const deleteData = async(req, res) => {
    const id = req.params.id;
    try {
        await User.findByIdAndRemove(id);
        res.send('Success')
    } catch (err) {
        res.status(404).send(err)
    }
}

module.exports = {
    registerUser,
    getData,
    deleteData
}
