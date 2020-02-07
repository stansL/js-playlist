const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {
    res.json({msg:"Server get"});
});

router.post('/',(req,res) => {
    res.json({msg:"Server post"});
});


router.delete('/',(req,res) => {
    res.json({msg:"Server deletion"});
});



module.exports = router;