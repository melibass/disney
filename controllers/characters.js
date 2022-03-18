const db = require("../models");


module.exports={
    create: async(req,res)=>{
        const { name_char, age, history, img_char, weight, title, img_mov, release_date, rating } = req.body;
        const character = await db.Characters.create({
            name_char,
            age,
            history,
            img_char,
            weight,
            Movies: [{
                title,
                img_mov,
                release_date,
                rating
            }]
        },
        {
            include: ["Movies"] 
        }).catch(error=> console.log(error))

        return res.status(200).json({
            meta: {
                status: 200,
                ok: true,
            },
            data: character,
        });
    },

    edit: async(req,res) =>{
        const { name_char, age, history, img_char, weight } = req.body;

        //busco el character a editar
        const originalData = await db.Characters.findByPk(req.params.id);
        await db.Characters.update(
            //modificamos los datos
            {
                name_char: name_char || originalData.name_char,
                age: age || originalData.age,
                history: history || originalData.history,
                img_char: img_char || originalData.img_char,
                weight: weight || originalData.weight
            },
            {
                where: {
                    id: req.params.id,
                }
            }
        );
        return res.status(201).json({
            meta: {
                status: 201,
                ok: true,
            },
            data: {
                editedCharacter: await db.Characters.findByPk(req.params.id), // devuelvo el personaje editado una vez lo encuentro
                originalCharacter: originalData, // se envian los datos originales
            },
        });

    },

    gone: async (req,res)=> {
        const goneCharacter = await db.Characters.findByPk(req.params.id)
        await db.Characters.destroy({
            where: {
                id: req.params.id
            }
        })
        if (goneCharacter) {
            return res.status(200).json(goneCharacter)
        } else {
            return res.status(400).json({
                message: "We couldn't find a character that matches the id given",
            })
        }
    },

    list: async(req,res)=> {
        const listedCharacters= await db.Characters.findAll({
            attributes: ['name_char', 'img_char']
        })
        if (listedCharacters) {
            return res.status(200).json({
                meta: {
                    status: 200,
                    ok: true,
                },
                data: listedCharacters,
            });
        } else {
            res.status(400).json(
                { message: "error" })
        }
    },

    detail: async (req,res) =>{
        const characterDetails = await db.Characters.findByPk(req.params.id, {
            include:[{
                association: 'Movies',
                attributes: ['title', 'img_mov']
        }]
        })
        if (characterDetails) {
            return res.status(200).json({
                meta: {
                    status: 200,
                    ok: true,
                },
                data: characterDetails,
            });
        } else {
            return res.status(400).json({
                meta: {
                    status: 400,
                    ok: false
                },
                message: "We couldn't find a character that matches the id given"
            })
        }
    }, catch (error) {
        console.log(error)
    }
    }

      
    