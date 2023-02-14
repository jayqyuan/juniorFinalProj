const { Campuses } = require('../index');
const { Students } = require('../index');

const router = require('express').Router()

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

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router