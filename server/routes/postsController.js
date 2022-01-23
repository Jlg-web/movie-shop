const express = require('express');
const router = express.Router();
const objectId = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

// Create
// POST : Création d'une ressource
router.post('/', (req, res) => {
    const newRecord = new PostsModel({
        title: req.body.title,
        image: req.body.image,
        synopsis: req.body.synopsis,
        director: req.body.director,
    });

    newRecord.save((err, docs) => {
        if(!err) res.json(docs);
        else console.log("Error creating new data :" + err)
    })
})

// Read
// GET : Récupération d’une ressource
router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if(!err) res.json(docs);
        else console.log("Error to get data : " + err)
    })
});

// Update
// PUT : Remplacement d’une ressource
router.put("/:_id", (req, res) => {
    if(!objectId.isValid(req.params._id))
    return res.status(400).json("ID unknow :" + req.params._id)

    const updateRecord = {
        title: req.body.title,
        image: req.body.image,
        synopsis: req.body.synopsis,
        director: req.body.director,
    }

    PostsModel.findByIdAndUpdate(
        req.params._id,
        {$set: updateRecord},
        {new: true},
        (err, docs) => {
            if(!err) res.json(docs);
            else console.log("Update error: " + err)
        }
    ) 
})

// DELETE
// DELETE : Suppression d’une ressource
router.delete("/:_id", (req, res) => {
    if(!objectId.isValid(req.params._id))
    return res.status(400).json("ID unknow :" + req.params._id)
    PostsModel.findByIdAndRemove(
        req.params._id,
        (err, docs) => {
            if(!err) res.json(docs);
            else console.log("Delete error: " + err)
        })
});
 

module.exports = router; 