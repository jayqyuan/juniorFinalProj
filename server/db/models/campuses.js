const Sequelize = require ('sequelize')
import db from '../database'

const Campuses = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue:'https://d2n9ha3hrkss16.cloudfront.net/uploads/stage/stage_image/86302/optimized_large_thumb_stage.jpg'  
    },
    adress:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT('long'),
    }
});

module.exports = {
    Campuses
}