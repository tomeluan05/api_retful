const router = require('express').Router()

router.get('/clientes', (req, res)=>{
    res.send({
        ok: 'Está ok'
    })
})


module.exports = router;