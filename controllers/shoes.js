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
const Shoes = require('../models/ModelSchemas')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
// const templateRouter = express.Router()
const shoesRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 * 
// templateRouter.get('/', (req, res) => {
//   res.json('hello world')
// })
*/

// -----------------SHOES---------------------
// #SHOW
shoesRouter.get('/:shoesId', (req, res) => {
  Shoes.findById(req.params.shoesId).then((shoes) => {
    res.json(shoes)
  })
})
// #CREATE
shoesRouter.post('/', (req, res) => {
  Shoes.create(req.body).then(() => {
    res.status(200).end()
  })
})
// #UPDATE
shoesRouter.put('/:shoesId', (req, res) => {
  Shoes.findByIdAndUpdate(req.params.shoesId, req.body).then(() => {
    res.status(200).end()
  })
})
// #DELETE
shoesRouter.delete('/:shoesId', (req, res) => {
  Shoes.findByIdAndRemove(req.params.shoesId).then(() => {
    res.status(200).end()
  })
})
// #INDEX
shoesRouter.get('/', (req, res) => {
  Shoes.find().then((shoes) => {
    res.json(shoes)
  })
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  shoesRouter
}
