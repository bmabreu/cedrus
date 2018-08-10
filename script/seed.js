'use strict'

const db = require('../server/db')
const {User, Products, Reviews} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Smith',
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Doe',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const products = await Promise.all([
    Products.create({
      name: 'Lawnmower',
      description: 'It mows lawns',
      price: 5.0,
      status: 'Open'
    }),
    Products.create({
      name: 'Chainsaw',
      description: 'A chainsaw',
      price: 4.0,
      status: 'Open'
    })
  ])

  const reviews = await Promise.all([
    Reviews.create({
      name: 'Cody Smith',
      review: 'This was awesome!',
      rating: 5
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${products.length} products`)
  console.log(`seeded ${reviews.length} reviews`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
