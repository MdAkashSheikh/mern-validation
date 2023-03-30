const { registerUser, getData, deleteData } = require('../controllers/control');
const { runValidation, schema } = require('../middleware/userValidate');
const { registerSc } = require('../middleware/validateSc');


const router = require('express').Router()

router.post('/register',  runValidation(registerSc), registerUser)
router.get('/get-data', getData)
router.delete('/delete-data/:id', deleteData)

module.exports = router;