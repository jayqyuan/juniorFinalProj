const { Campuses } = require('../models/campuses');
const { Students } = require('../models/students');

const router = require('express').Router()

router.get('/students', async(req, res, next)=>{
    try{
        const students = await Students.findAll()
        res.send(students)
    }catch(e){
        next(e)
    }
})

router.get("/campus", async (req, res, next) => {
  try {
    const campus = await Campuses.findAll();
    res.send(campus);
  } catch (e) {
    next(e);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router