const req = require('express/lib/request');
const db = require('../models');
const { Op } = require('sequelize');

module.exports= {

   
    //agregar pelicula
    add: async (req,res) => {
        const { name_char, age, history, img_char, weight, title, img_mov, release_date, rating, name_gr } = req.body
    const movie = await db.Movies.create({
        title,
        img_mov,
        release_date,
        rating,
        Genres: [{
            name_gr,
        }],
        Characters: [{
            name_char,
            img_char,
            age,
            history,
            weight
        }]
    },
    {
        include: ["Characters", "Genres"] 
    }).catch(error=> console.log(error))

    return res.status(200).json({
        meta: {
            status: 200,
            ok: true,
        },
        data: movie,
    });
},
  
    //listar pelicula
    list: async (req,res) => {

        const listedMovies= await db.Movies.findAll({
            attributes: ['title', 'img_mov', 'release_date']
    })

    if (listedMovies) {
        return res.status(200).json({
            meta: {
                status: 200,
                ok: true,
            },
            data: listedMovies,
        });
    } else {
        res.status(400).json(
            { message: "error" })
    }

    },

    //detalle de pelicula

    detail: async (req,res) =>{
        const movieDetails = await db.Movies.findByPk(req.params.id, {
            include:[{
                association: 'Characters',
                attributes: ['name_char', 'img_char']
        }]
        })
        if (movieDetails) {
            return res.status(200).json({
                meta: {
                    status: 200,
                    ok: true,
                },
                data: movieDetails,
            });
        } else {
            return res.status(400).json({
                meta: {
                    status: 400,
                    ok: false
                },
                message: "We couldn't find a movie that matches the id given"
            })
        }
    }, catch (error) {
        console.log(error)
    },

    edit: async(req,res)=>{
        const { title, img_mov, release_date, rating } = req.body;
        //busco la peli a editar
        const originalData = await db.Movies.findByPk(req.params.id);
        await db.Movies.update(
            //aca empiezo a modificar los datos
            {
                title: title || originalData.title,
                img_mov: img_mov || originalData.img_mov,
                release_date: release_date || originalData.release_date,
                rating: rating || originalData.rating
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        return res.status(201).json({
            meta:{
                status:201,
                ok: true,
            },
            data: {
                editedMovie: await db.Movies.findByPk(req.params.id), // devuelvo la peli actualizada
                originalMovie: originalData, //envio los datos originales
            }
        })

    },

    gone: async (req,res) =>{
        const movieToDelete = await db.Movies.findByPk(req.params.id);
        await db.Movies.destroy(
            {
                where:{
                    id: req.params.id
                }
            })
            if (movieToDelete) {
                return res.status(200).json(movieToDelete)
            } else {
                return res.status(400).json({
                    message: "We couldn't find a movie that matches the id given",
                })
            }
    },

    search: async (req, res) => {
       const movieMatched= await db.Movies.findAll({
                include: ['Characters'],
                where:{
                    title: { [Op.like]:'%'+ req.query.keyword +'%'}
                }
            })
            if (movieMatched) {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        ok: true,
                    },
                    data: movieMatched,
                });
            } else {
                return res.status(400).json({
                    meta: {
                        status: 400,
                        ok: false
                    },
                    message: "We couldn't find a movie that matches the search"
                })
            }
            }, catch (error) {
            console.log(error)
            },
            
            
            
            

}
