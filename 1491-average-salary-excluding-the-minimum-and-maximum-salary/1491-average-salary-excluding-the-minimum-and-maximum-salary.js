/**
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let res = 0;
    let avg = 0;
        const sortVar = salary.sort(function (a,b){
            return a-b;
        });
      let mew = [...sortVar];
      
      let sortVar1 = [];
      sortVar1 = salary.sort();
      if(sortVar1.length == 3){
        res = sortVar1[1];
        
      }
      else{      
        for(let i = 1; i<sortVar.length-1;i++){
            avg += mew[i];
            res = (avg/(sortVar.length-2));
          }
    }
    return res
};