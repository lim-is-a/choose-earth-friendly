/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('./connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})
const Shoes = new mongoose.Schema({
    name: String,
    description: String,
    url: String,
})

/* Step 3
 *
 * TODO: export the schema
 */
//module.exports = mongoose.model('Sample', SampleModelSchema);
module.exports = mongoose.model('Shoes', Shoes);
