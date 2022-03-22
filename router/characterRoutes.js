const express=require('express');
const router= express.Router();

const {
    create,
    edit,
    gone,
    list,
    detail,
    
} = require("../controllers/characters");


//creo un character
router.post("/create", create);
//lista de characters
router.get('/', list)

//detalle de character
router.get('/:id', detail);
//edito un personaje
router.put('/edit/:id', edit);
//elimino un character
router.delete('/delete/:id', gone);

module.exports= router;