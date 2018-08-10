const router = require('express').Router()
const {User} = require('../db/models')
module.exports = router

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
})

router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(newUser => res.json(newUser))
    .catch(next)
})

router.delete('/:userId', (req, res, next) => {
  let userId = req.params.userId
  User.destroy({
    where: {
      id: userId
    }
  })
    .then(destroyUser => res.json(destroyUser))
    .catch(next)
})
