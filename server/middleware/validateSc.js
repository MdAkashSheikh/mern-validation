const Joi = require("joi");

module.exports = {
    registerSc: Joi.object({
        name: Joi.string().min(3).max(30).required(),
        phone: Joi.string().min(11).max(14).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).max(10).required()
    })
}