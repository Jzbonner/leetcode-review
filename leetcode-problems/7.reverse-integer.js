/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if ( x < 0 ) {
        return -1 * reverse(-x)
    }

    const solution = (x+"").split('').reverse().join('')
    if (solution > 2**31 - 1) {
        return 0
    } else {
        return solution 
    }
};
// @lc code=end

