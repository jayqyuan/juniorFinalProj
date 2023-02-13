const db = require('./database')
const Student = require('./models/students')
const Campus = require('./models/campuses')

Student.BelongsTo(Campus);
Campus.hasMany(Student, {foreignKey: 'campusId'})

module.exports = {
    db,
    Student, 
    Campus
}