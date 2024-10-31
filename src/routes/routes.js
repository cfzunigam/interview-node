const express = require('express');
const router = express.Router();
// importar controller

router.get('/item', function(req, res){
    res.send('item ok')
});

module.exports = router;