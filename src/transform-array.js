const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }
  
  let array = arr.slice(0);
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]){
   case '--discard-next': 
      array[i] = undefined;
      if(i+1 < array.length) {
        array[i+1] = undefined;
      }
      break

    case '--discard-prev': 
      array[i]= undefined;
      if(i-1 > 0) {
        array[i-1] =undefined;
      }
      break

    case '--double-next' :
      if(i+1 < array.length) {
        array[i] = array[i+1];
      } else {
        array[i] = undefined;
      }
      break

    case '--double-prev' :
      if(i-1 > 0) {
        array[i] = array[i-1];
      } else {
        array[i] = undefined;
      }
      break
    } 
  
    }
  
    for(let i=0;i<array.length;i++) {
      if(array[i] === undefined) {
        array.splice(i,1);
        i--;
      }
    }
  return array;
};
