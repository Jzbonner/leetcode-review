## Leetcode Problem Review 
This is a dedicated space for keeping track of notes relating to coding practice for leetcode and potential technical interview questions. Each problem contains pseudocode to better understand the concepts behind the problem, basic and modern solution examples and key takeaways

#### Two Sum - Takeaways 
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
Problem states that there are only two index values being compared at a time and that every input only has one solution. This encourages the use of an iterative nested for loop that has two instantiated variables. The first `for loop` starts with the first index of the passed array parameter and provides the first testable variable in the addition equation (i.e. 'this =>' nums[i] + nums[j] == target). The second `for loop` starts at the second index of the passed array parameter and provides the second testable variable of the addition equation (i.e. nums[i] + 'this =>' nums[j] == target). Once the target is found you want to push those index values to the previously declared results array.

#### Reverse Integer - Takeaways
