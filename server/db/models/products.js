const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  // column names go here
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      'http://demo.drfuri.com/mrbara14/wp-content/uploads/sites/15/2016/07/a1.jpg'
  },
  status: {
    type: Sequelize.ENUM,
    values: ['Open', 'Shared'],
    defaultValue: 'Open',
    allowNull: false
  }
})

module.exports = Product
