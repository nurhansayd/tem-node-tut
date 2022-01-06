/*const names = require('./names')
const sayHi = require('./functions')
sayHi(names.nurhan)
*/


const lo = require('lodash')

const items = [1,2,3,4,5];
const newItems = lo.flattenDeep(items)

console.log(newItems);
