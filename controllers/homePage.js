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
const Clothes = require('../models/ModelSchemas')
const Shoes = require('../models/ModelSchemas')
const Restaurants = require('../models/ModelSchemas')


/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// const templateRouter = express.Router()
const clothesRouter = express.Router()
const shoesRouter = express.Router()
const restaurantsRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 * 
// templateRouter.get('/', (req, res) => {
//   res.json('hello world')
// })
*/
// -----------------CLOTHES------------------
// #INDEX
clothesRouter.get('/clothes', (req, res) => {
  Clothes.find().then((clothes) => {
    res.json(clothes)
  })
})
// #SHOW
clothesRouter.get('/clothes/:clothesId', (req, res) => {
  Clothes.findById(req.params.clothesId).then((clothes) => {
    res.json(clothes)
  })
})
// #CREATE
clothesRouter.post('/clothes', (req, res) => {
  Clothes.create(req.body).then(() => {
    res.status(200).end()
  })
})
// #UPDATE
clothesRouter.put('/clothes/:clothesId', (req, res) => {
  Clothes.findByIdAndUpdate(req.params.clothesId, req.body).then(() => {
    res.status(200).end()
  })
})
// #DELETE
clothesRouter.delete('/clothes/:clothesId', (req, res) => {
  Clothes.findByIdAndRemove(req.params.clothesId).then(() => {
    res.status(200).end()
  })
})
// -----------------SHOES---------------------
// #SHOW
shoesRouter.get('/shoes/:shoesId', (req, res) => {
  Shoes.findById(req.params.shoesId).then((s) => {
    res.json(s)
  })
})
// #CREATE
shoesRouter.post('/shoes', (req, res) => {
  Shoes.create(req.body).then(() => {
    res.status(200).end()
  })
})
// #UPDATE
shoesRouter.put('/shoes/:shoesId', (req, res) => {
  Shoes.findByIdAndUpdate(req.params.shoesId, req.body).then(() => {
    res.status(200).end()
  })
})
// #DELETE
shoesRouter.delete('/shoes/:shoesId', (req, res) => {
  Shoes.findByIdAndRemove(req.params.shoesId).then(() => {
    res.status(200).end()
  })
})
// #INDEX
shoesRouter.get('/shoes', (req, res) => {
  Shoes.find().then((shoes) => {
    res.json(shoes)
  })
})
// --------------RESTAURANTS------------------
// #SHOW
restaurantsRouter.get('/restaurants/:restaurantId', (req, res) => {
  Restaurants.findById(req.params.restaurantId).then((restaurants) => {
    res.json(restaurants)
  })
})
// #CREATE
restaurantsRouter.post('/restaurants', (req, res) => {
  Restaurants.create(req.body).then(() => {
    res.status(200).end()
  })
})
// #UPDATE
restaurantsRouter.put('/restaurants/:restaurantId', (req, res) => {
  Restaurants.findByIdAndUpdate(req.params.restaurantId, req.body).then(() => {
    res.status(200).end()
  })
})
// #DELETE
restaurantsRouter.delete('/restaurants/:restaurantId', (req, res) => {
  Restaurants.findByIdAndRemove(req.params.restaurantId).then(() => {
    res.status(200).end()
  })
})
// #INDEX
restaurantsRouter.get('/restaurants', (req, res) => {
  Restaurants.find().then((restaurants) => {
    res.json(restaurants)
  })
})


/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  shoesRouter,
  clothesRouter,
  restaurantsRouter
}
