const { registerUser, getData } = require('../controllers/control');
const { runValidation, schema } = require('../middleware/userValidate');
const { registerSc } = require('../middleware/validateSc');


const router = require('express').Router()

router.post('/register',  runValidation(registerSc), registerUser)
router.get('/get-data', getData)

module.exports = router;