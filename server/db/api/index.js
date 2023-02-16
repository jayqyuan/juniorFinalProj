const { Campuses } = require('../index');
const { Students } = require('../index');
const express = require("express");

const router = require('express').Router()

// get all campuses and students
router.get('/students', async(req, res, next)=>{
    try{
        const students = await Students.findAll({
          include: Campuses
        })
        res.send(students)
    }catch(e){
        next(e)
    }
})

router.get("/campus", async (req, res, next) => {
  try {
    const campus = await Campuses.findAll({
      include: Students
    });
    res.send(campus);
  } catch (e) {
    next(e);
  }
});

//get individual campus and student

router.get('/campus/:id', async(req, res, next)=>{
    try{
        const campus = await Campuses.findByPk(req.params.id,{
          include: Students
        })
        res.send(campus)
    }catch(e){
        next(e)
    }
})

router.get("/students/:id", async (req, res, next) => {
  try {
    const student = await Students.findByPk(req.params.id, {
      include: Campuses
    });
    res.send(student);
  } catch (e) {
    next(e);
  }
});

//create new student and campus

router.post('/students', async (req, res, next)=>{
  
  try {
    res.status(201).send(await Students.create(req.body))
  } catch (error) {
    console.log('no data')
  }
})

router.post('/campus', async(req, res, next)=>{
  console.log(req.body, "this is requestBody");
  try {
    res.status(201).send(await Campuses.create(req.body))
  } catch (error) {
    console.log('no data ')
  }
})


// delete individual campus and student 

router.delete('/campus/:id', async(req, res, next)=>{
  console.log(req.params.id, 'this is req.params')
  try {
    await Campuses.destroy({
      where:{
        id: req.params.id
      }
    })
  } catch (error) {
    console.log(error.message)
  }
})

router.delete('/students/:id', async(req, res, next)=>{
  try {
    await Students.destroy({
      where:{
        id: req.params.id
      }
    })
  } catch (error) {
    console.log(error.message)
  }
})

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});



module.exports = router