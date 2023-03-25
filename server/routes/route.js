const { registerUser } = require('../controllers/control');
const { runValidation, schema } = require('../middleware/userValidate');
const { registerSc } = require('../middleware/validateSc');


const router = require('express').Router()

router.post('/register',  runValidation(registerSc), registerUser)

module.exports = router;