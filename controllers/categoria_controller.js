
const {Model } = require('sequelize');
const { QueryError } = require('sequelize');
const Sequelize = require ('sequelize');
const Categoria = require ('../models').Categoria;
// const Categoria =require('../models/categoria');




module.exports={

    ListarCategoria(req,res){
        console.log('yes')
        return Categoria.findAll({
       })
                
   
        .then(Categoria => res.status(200).send(Categoria))
        .catch(error => res.status(400).send(error.toString()))
   },


    CreateCategoria(req, res){
        return categoria.create({
             id_categoria:req.body.id_categoria,
             descripcion: req.body.descripcion,
             titulo: req.body.titulo,
             
        })
         
        .then(categoria => res.status(200).send(categoria))
        .catch(error => res.status(400).send(error))
   },
   
}
