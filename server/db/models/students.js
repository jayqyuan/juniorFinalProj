const Sequelize = require('sequelize')
const db = require('../database')

const Students = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://miro.medium.com/max/1400/1*2bjwCLaA8TfH40OXcyLNvA.png",
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 4.0,
    },
  },
  // campusId:{
  //   type: Sequelize.INTEGER,
  //   defaultValue: 1
  // }
});

module.exports = {
    Students
}