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
const Clothes = require('../models/Clothes')

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

/* Step 4
 * 
 * TODO: Put all request handlers here
 * 
// templateRouter.get('/', (req, res) => {
//   res.json('hello world')
// })
*/
// -----------------CLOTHES------------------
// #SHOW
clothesRouter.get('/:clothesId', (req, res) => {
  Clothes.findById(req.params.clothesId).then((clothes) => {
    console.log("Looking at " + clothesId )
    res.json(clothes)
  })
})
// #CREATE
clothesRouter.post('/', (req, res) => {
  Clothes.create(req.body).then(() => {
    res.status(200).end()
  })
})
// #UPDATE
clothesRouter.put('/:clothesId', (req, res) => {
  Clothes.findByIdAndUpdate(req.params.clothesId, req.body).then(() => {
    res.status(200).end()
  })
})
// #DELETE
clothesRouter.delete('/:clothesId', (req, res) => {
  Clothes.findByIdAndRemove(req.params.clothesId).then(() => {
    res.status(200).end()
  })
})
// #INDEX
clothesRouter.get('/', (req, res) => {
  Clothes.find().then((clothes) => {
    console.log(clothes)
    res.json(clothes)
  })
})

/* Step 5
 *
 * Export the router from the file.
 *
 */
module.exports = {
  clothesRouter
}
