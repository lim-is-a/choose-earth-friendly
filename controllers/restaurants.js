/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the model files
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `templateModel` to something more sensible (e.g:
 * `Shops`)
 *
 * NOTE: You may need to import more than one model to create the 
 * controller you need.
 * 
 */
// const templateModel = require('../models/template.js')
const Restaurants = require('../models/Restaurants')


/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// const templateRouter = express.Router()
const restaurantsRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 * 
// templateRouter.get('/', (req, res) => {
//   res.json('hello world')
// })
*/

// --------------RESTAURANTS------------------
// #SHOW
restaurantsRouter.get('/:restaurantId', (req, res) => {
  Restaurants.findById(req.params.restaurantId).then((restaurants) => {
    console.log("Looking at " + restaurantId)
    res.json(restaurants)
  })
})
// #CREATE
restaurantsRouter.post('/', (req, res) => {
  Restaurants.create(req.body).then(() => {
    res.status(200).end()
  })
})
// #UPDATE
restaurantsRouter.put('/:restaurantId', (req, res) => {
  Restaurants.findByIdAndUpdate(req.params.restaurantId, req.body).then(() => {
    res.status(200).end()
  })
})
// #DELETE
restaurantsRouter.delete('/:restaurantId', (req, res) => {
  Restaurants.findByIdAndRemove(req.params.restaurantId).then(() => {
    res.status(200).end()
  })
})
// #INDEX
restaurantsRouter.get('/', (req, res) => {
  Restaurants.find().then((restaurants) => {
    console.log(restaurants)
    res.json(restaurants)
  })
})


/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  restaurantsRouter
}
