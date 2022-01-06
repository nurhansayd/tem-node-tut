const path = require('path')

console.log(path.sep);

const filePath = path.join(`${__dirname}`, '/content/first.txt')
console.log(filePath);

const base = path.basename(filePath)
console.log(base);


const absolute = path.resolve(__dirname , 'content' , 'second.txt')
console.log(absolute);