const _ = require('lodash');

const my0ddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(my0ddEvenArray);
