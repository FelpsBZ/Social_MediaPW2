const express = require('../../node_modules/express');
const loginController = require('./controllers/loginControllers');
const registerController = require('./controllers/registerControllers')
const toPostControllers = require('./controllers/toPostControllers')
  // Pasta onde os arquivos serão armazenados



const router = express.Router();
router.use(express.json());
// gets
router.post('/login', loginController.velLogin);
router.post('/register', registerController.registerUser)
router.get('/getAll', loginController.getAll)
router.get('/toPost', toPostControllers.uploadPost)


module.exports = router;
