const db = require('./database')
const { Campuses } = require('./models/campuses')
const { Students } = require('./models/students')


Students.belongsTo(Campuses)
Campuses.hasMany(Students, { foreignKey: "campusId", constraints: false });

module.exports = {
    db,
    Students, 
    Campuses,
}