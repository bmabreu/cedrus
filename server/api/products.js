const router = require('express').Router()
const {Products} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  Products.findAll()
    .then(products => res.json(products))
    .catch(next)
})

router.post('/', (req, res, next) => {
  Products.create(req.body)
    .then(newProduct => res.json(newProduct))
    .catch(next)
})

router.delete('/:productId', (req, res, next) => {
  let productId = req.params.productId
  Products.destroy({
    where: {
      id: productId
    }
  })
    .then(destroyProduct => res.json(destroyProduct))
    .catch(next)
})
