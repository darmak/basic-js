const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newString = "";
  if(!members){
    return false;
  }
  for(let i = 0;i < members.length;i++){
    if(typeof(members[i]) === "string"){
      let check = 0;
      let arr = members[i].split("");
      for(let j = 0;j < arr.length;j++){
        if(arr[j] === " "){
          continue;
        } else {
          if(check === 0){
            newString += arr[j].toUpperCase();
            check++;
          }
        }
      }
    }
  }
  if(newString === ""){
    return false;
  } else {
   let run = newString.split("").sort().join("");
    return run;
  }
};
