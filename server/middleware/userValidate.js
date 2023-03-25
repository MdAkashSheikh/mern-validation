const Joi = require("joi")

exports.runValidation = (schema) => {
    // console.log(schema)
    return (req, res, next) => {

        const {error} = schema.validate(req.body, {
            abortEarly: false, 
            errors: {
                wrap: {
                    label: ""
                }
            }
        })
        if(error) {
            const errorList = error.details.map((err)=> {
                return err.message
            })
            return res.status(400).json({
                message: "Invalis Input.",
                error: errorList
            })
        }
        next()
    }
}
