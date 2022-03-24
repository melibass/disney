const express=require('express');
const router= express.Router();

const {
    create,
    edit,
    gone,
    list,
    detail,
    
    
} = require("../controllers/characters");

/**
 * @openapi 
 * /characters:
    get:
      tags:
      - Personajes
      summary: Muestro todos los personajes de la base de datos
     
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/characters'
        required: true
      responses:
        200:
          description: (OK) Toda la info se muestra correctamente
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/createdCharacterOk'
        400:
          $ref: '#/components/responses/BadRequest'
        401:
          $ref: '#/components/responses/Unauthorized' 
        404:
          $ref: '#/components/responses/NotFound'
        500:
          $ref: '#/components/responses/ServerError'

          */


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