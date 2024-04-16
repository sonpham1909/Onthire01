var express = require('express');
var router = express.Router();
var xeMayCtroll =require('../controllers/xeMayController');

router.get('/xemay',xeMayCtroll.getList);

router.get('/xemay/:id',xeMayCtroll.getOne);


router.post('/xemay',xeMayCtroll.createOne);

module.exports = router;