/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    
  let res = ~~((high - low) / 2);
  if (low % 2 != 0 || high % 2 != 0) {
    res += 1;
  }
  return res;

};
