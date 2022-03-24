const express=require('express');
const router = express.Router();

const {
    add,
   list,
   detail,
   edit,
   gone,
   search

} = require("../controllers/movies");

//listado de movies

router.get('/', list);


//creado de Pelicula
router.post('/create', add)

//elimino pelicula
router.delete('/:id', gone)
//detalle de pelicula
router.get('/detail/:id', detail)

//edito pelicula
router.put('/:id', edit)
//busco pelicula
router.get('/', search);

module.exports= router;