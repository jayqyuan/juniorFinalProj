const Sequelize = require ('sequelize')
const db = require('../database')

const Campuses = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:
      "https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/86302/optimized_large_thumb_stage.jpg",
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true,
  },
  description: {
    type: Sequelize.TEXT,
  },
});

module.exports = {
    Campuses
}