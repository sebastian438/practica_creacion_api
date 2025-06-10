const { Router } = require('express');
const { isAdmin } = require('../middlewares/isAdmin.js');
const { getInAdmin } = require('../controllers/admin.controllers.js')

const router = Router()

router.get('/', isAdmin, getInAdmin);

module.exports = router;