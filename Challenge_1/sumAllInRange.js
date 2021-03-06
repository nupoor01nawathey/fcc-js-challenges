// Intermediate Algorithm Scripting: Sum All Numbers in a Range

function sumAll(arr) {
    let sum = 0;
    for(var i=Math.min(...arr); i<=Math.max(...arr); i++) {
        sum += i;
    }
    return sum;
  }
  
console.log(sumAll([1, 4]));

module.exports = {sumAll};