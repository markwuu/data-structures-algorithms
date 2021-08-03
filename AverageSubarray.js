// Solution 1: Brute force approach
// Time complexity O(N*K) due to for loop within a for loop
const findAverageOfSubarraySolutionOne = (K, array) => {
    let sum;
    let averageSumArray = [];
    for (let i = 0; i < array.length - K + 1; i++){
        sum = 0.0;
        for (let j = i; j < i + K; j++) {
            sum += array[j];
        }
        averageSumArray.push(sum/K);
    }
    return averageSumArray;
}

//1,2,3,4,5 average => 3
//2,3,4,5,6 average => 4
//3,4,5,6,7 average => 5
//4,5,6,7,8 average => 6
//5,6,7,8,9 average => 7
//6,7,8,9,10 average => 8
// console.log(findAverageOfSubarraySolutionOne(5, [1,2,3,4,5,6,7,8,9,10]))

// Solution 2: Optimized approach
// Time complexity O(N) due to only traversing the array once.
const findAverageOfSubarraySolutionTwo = (K, array) => {
    let windowStart = 0;
    let sum = 0.0;
    let result = [];

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){ //loop thru array
        sum += array[windowEnd]; //Add onto the sum as we traverse array

        if(windowEnd >= K - 1){ //Once window reaches desired width
            result.push(sum / K); //push average into results
            sum -= array[windowStart]// remove windowstart from sum
            windowStart +=1;// move windowstart pointer forward
        }
    }

    return result;
}

// console.log(findAverageOfSubarraySolutionTwo(5, [1,2,3,4,5,6,7,8,9,10]))

//Find maximum sum of subarray
//Optimized solution with sliding window technique
const findMaximumSumOfSubarraySolutionOne = (K, array) => {
    let windowStart = 0;
    let windowSum = 0;
    let maxSum = 0;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        windowSum += array[windowEnd]

        if(windowEnd >= K - 1){ //once window reaches desired width
            if(maxSum < windowSum){
                maxSum = windowSum;
            }
            windowSum -= array[windowStart]; //remove windowStart value from windowSum
            windowStart +=1; //move windowStart pointer forward
        }
    }
    return maxSum;
}

// console.log(findMaximumSumOfSubarraySolutionOne(2, [2, 3, 4, 1, 5]));
// output: 9;
// [5,1,3] sum = 9

//Requirements
//Find the length of the smallest continguous subarray whose sum is greater than or equal to S.
//Edge case: Return 0 if no subarray exists
const smallestSubarraySum = (array, S) => {
    console.log(array)
    console.log(S)

    //declare variables => windowSum, minLength, windowStart
    //loop thru array
    //Add elements from beginning of array until windowSum is >= S.
    //Keep track of smallest window so far with minLength
    //Each iteration check two things
    //1. Check if current window is smallest so far, and keep track of length
    //2. Subtract 1st element of window to shrink sliding window.
    let windowSum = 0;
    let minLength = Infinity;
    let windowStart = 0;

    for(let windowEnd = 0; windowEnd < array.length; windowEnd++){
        windowSum += array[windowEnd];
        while(windowSum >= S){
            minLength = Math.min(minLength, windowEnd - windowStart + 1);
            windowSum -= array[windowStart];
            windowStart += 1;
        }
    }

    if(minLength === Infinity){
        return 0;
    }
    return minLength;
}

//[5, 2] => length is 2
console.log(smallestSubarraySum([2, 1, 5, 2, 3, 2], 7));

const findLongestSubstring = (string, K) => {
    console.log(string)
    let maxLength = 0;
    let wStart = 0;
    let charMap = {};

    for(let wEnd = 0; wEnd < string.length; wEnd++){
        console.log(string[wEnd])
        let rightChar = string[wEnd];
        if(!(charMap[rightChar])) charMap[rightChar] = 0;
        charMap[rightChar] += 1;

        while(Object.keys(charMap).length > K){
            let leftChar = string[wStart];
            charMap[leftChar] -= 1;
            if(charMap[leftChar] === 0) delete charMap[leftChar];
            wStart += 1;
        }
        maxLength = Math.max(maxLength, wEnd - wStart + 1);
    }
    return maxLength
}

findLongestSubstring('hello', 1);
