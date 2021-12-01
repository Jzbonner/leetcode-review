## Leetcode Problem Review 
This is a dedicated space for keeping track of notes relating to coding practice for leetcode and potential technical interview questions. Each problem contains pseudocode to better understand the concepts behind the problem, basic and modern solution examples and key takeaways

### Two Sum - Takeaways 
* Array.push() and Array.pop() are an easy way to manipulate array beginning and end values
* Nested for loops provide a brute solution 
* Using objects make it easier to create a modern solution 

```javascript 
// Basic Solution 
const twoSum = (nums, target) => {
    let result = []

    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                result.push(i)
                result.push(j)
            }
        }
    } 
    return result
}
```

```javascript 
//Optimal Solution

````
Problem states that there are only two index values being compared at a time and that every input only has one solution. This encourages the use of an iterative nested for loop that has two instantiated variables. The first `for loop` starts with the first index of the passed array parameter and provides the first testable variable in the addition equation (i.e. 'this =>' nums[i] + nums[j] == target). The second `for loop` starts at the second index of the passed array parameter and provides the second testable variable of the addition equation (i.e. nums[i] + 'this =>' nums[j] == target). Once the target is found you want to push those index values to the previously declared results array.

### Reverse Integer - Takeaways


### Palindrome - Takeaways
For this problem it is important to understand that this can be done by converting the initial value to a string and also by revering the integer value itself. You want to ensure that you understand the initial constraint, that all negative numbers will return a `false` boolean; logic only needs to be mapped out for numbers greater than 0. The integer-to-string method requires the use of multiple `if` loops. While the integer only solution requires the use of an `if` loop and a `while` loop. 

```javascript 
/**
 * @param {number} x
 * @return {boolean}
 *
 * TALKING POINTS: 
 * 1. constraint for initial examples is that x must return
 *    false if it is a negative number
 * 
 * 2. all numbers 0 to 9 should return true 
 * 
 * 3. if loop => that checks for equivalency (i.e. ==) 
 *    between the integer and the reverse
 */

// basic solution 
 const isPalindrome = function(x) {
    // solution for reversing by converting to string
    if (x < 0) return false; 

    reverseCheck = x.toString().split("").reverse().join(""); 

    if (x == reverseCheck) return true; 
    return false; 
};
```

```javascript
// optimal solution 
const isPalindrome = function(x) {
    // solution for revering without converting to string 
    if (x < 0) return false; 
    let digit, result = 0
    let initialInt = x; 

    while (x) {
        digit = x % 10; 
        result = (result * 10) + digit; 
        x = x/10|0; 
    }
    
    reverseInt = result; 

    if (initialInt == reverseInt) return true; 
    return false; 
```
