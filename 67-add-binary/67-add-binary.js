/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

/*

well... according to google.....


What are the rules for adding two binary number?
There are 3 basic rules for adding binary numbers:
0 + 0 = 0.
0 + 1 = 1.
1 + 1 = 10. If the sum of 2 bits is greater than 1, we need to shift a column on the left. In decimal system, 1 + 1 = 2. Binary notation of 2 is 10 (1 * 2^1 + 0 * 2^0). So we keep 0 in the 1's column and shift (carry over) 1 to the 2's column.



*/
var addBinary = function(a, b) {
    // reverse the strings
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    let res = '';
    let carry = 0;
    
    for(let i=0; i<Math.max(a.length, b.length); i++) {
        const digit_a = i < a.length ? a.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        const digit_b = i < b.length ? b.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        
        const total = digit_a + digit_b + carry;
        const str = String(total % 2);
        carry = Math.floor(total / 2);
        res = str + res;
    }
    
    if(carry)
        res = '1' + res;
    
    return res;
};