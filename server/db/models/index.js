const User = require('./user')
const Products = require('./products')
const Reviews = require('./reviews')
const Orders = require('./orders')

// User.hasMany(Reviews)
// Orders.belongsTo(User)
// User.hasMany(Orders)
// Products.hasMany(Reviews)

// Reviews.belongsTo(User)
// Reviews.belongsTo(Products)

module.exports = {
  User,
  Products,
  Reviews,
  Orders
}
