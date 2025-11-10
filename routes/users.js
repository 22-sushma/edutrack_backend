const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const usersController = require('../controllers/usersController');

router.get('/me', auth, usersController.me);
router.get('/:id', auth, usersController.getById);

module.exports = router;
