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
// console.log(smallestSubarraySum([2, 1, 5, 2, 3, 2], 7));

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

// findLongestSubstring('hello', 1);

//Find the maximum number of fruits given two baskets where a basket
//can only hold 1 distinct fruit.
//Limitations: Start on any fruit, but once you start you cannot stop. kind of like pringles.
const find_maximum_fruits_two_distinct_baskets = (fruits) => {
    let maxLength = 0;
    let wStart = 0;
    let fruitFrequency = {};

    for(let wEnd = 0; wEnd < fruits.length; wEnd++){
        let rightFruit = fruits[wEnd];
        if(!(fruitFrequency[rightFruit])) fruitFrequency[rightFruit] = 0;
        fruitFrequency[rightFruit] += 1;

        while(Object.keys(fruitFrequency).length > 2) {
          let leftFruit = fruits[wStart];
          fruitFrequency[leftFruit] -= 1;
          if(fruitFrequency[leftFruit] === 0){
            delete fruitFrequency[leftFruit];
            wStart += 1;
          }
        }
        maxLength = Math.max(maxLength, wEnd - wStart + 1);
    }

    return maxLength;
}

// console.log(find_maximum_fruits_two_distinct_baskets(['A', 'B', 'C', 'B', 'B', 'C']));

const max_substring_no_repeates = (string) => {
    let maxLength = 0;
    let wStart = 0;
    let charIndexMap = {};

    for (let wEnd = 0; wEnd < string.length; wEnd++){
        let rightChar = string[wEnd];

        if(rightChar in charIndexMap){
            wStart = Math.max(wStart, charIndexMap[rightChar] + 1);
        }

        charIndexMap[rightChar] = wEnd;
        maxLength = Math.max(maxLength, wEnd - wStart + 1);
    }

    return maxLength;
}

// console.log(max_substring_no_repeates('abccde'));

const length_of_longest_substring = (str, k) => {
    let wStart = 0;
    let maxRepeatingCharacter = 0;
    let frequencyMap = {};
    let maxLength = 0;

    for(let wEnd = 0; wEnd < str.length; wEnd++){
        let rightChar = str[wEnd];
        if(!(rightChar in frequencyMap)){
            frequencyMap[rightChar] = 0;
        }
        frequencyMap[rightChar] += 1; //Add chars to frequency map
        maxRepeatingCharacter = Math.max(maxRepeatingCharacter, frequencyMap[rightChar]); //keep track of max repeating char

        if((wEnd - wStart + 1 - maxRepeatingCharacter) > k){ //Checks windowSize - maxrepeating char, shrink window if it exceeds acceptable size
            let leftChar = str[wStart];
            frequencyMap[leftChar] -= 1;
            wStart += 1;
        }

        maxLength = Math.max(maxLength, wEnd - wStart + 1);
    }
    return maxLength;
}

// console.log(length_of_longest_substring('aabccbb', 2));

function length_of_longest_substring_of_ones(arr, k) {
    let wStart = 0;
    let maxLength = 0;
    let numberOfOnesSeen = 0;

    for (let wEnd = 0; wEnd < arr.length; wEnd++){
        if(arr[wEnd] === 1) {
            numberOfOnesSeen += 1;
        }

        if((wEnd - wStart + 1 - numberOfOnesSeen) > k){
            if(arr[wStart] === 1){
                numberOfOnesSeen -= 1;
            }
            wStart += 1;
        }

        maxLength = Math.max(maxLength, wEnd - wStart + 1);
    }

    return maxLength;
}

// console.log(length_of_longest_substring_of_ones([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
// console.log(length_of_longest_substring_of_ones([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3));

const containsStringPermutation = (string, pattern) => {
    let  wStart = 0;
    let matchedChars = 0;
    const patternFrequencyMap = {};

    //Create the pattern frequency hash map
    for(let i = 0; i < pattern.length; i++){
        if(!(pattern[i] in patternFrequencyMap)){
            patternFrequencyMap[pattern[i]] = 0;
        }
        patternFrequencyMap[pattern[i]] += 1;
    }

    //iterate through the string
    for(let wEnd = 0; wEnd < string.length; wEnd++){
        let rightChar = string[wEnd];
        if(rightChar in patternFrequencyMap){
            patternFrequencyMap[rightChar] -= 1;

            if(patternFrequencyMap[rightChar] === 0){
                matchedChars += 1;
            }
        }

        //Return true when we have a permutation
        //matchedChars will match the length of of the keys frequency map
        //bc we only increment and decrement matchedChars
        //when the frequency hits 0.
        if(matchedChars === Object.keys(patternFrequencyMap).length){
            return true;
        }

        //shrink the sliding window once window reaches size of pattern word
        if(wEnd >= pattern.length - 1) {
            leftChar = string[wStart];
            wStart += 1;
            if(leftChar in patternFrequencyMap){
                if(patternFrequencyMap[leftChar] === 0) {
                    matchedChars -= 1;
                }
                patternFrequencyMap[leftChar] += 1;
            }
        }
    }
    return false;
}

// console.log(containsStringPermutation('oidbcaf', 'abc'));


//R:
//Given a string and a pattern
//find all anagrams of the pattern
//Return the starting indices of the pattern

//E:
//Input: String="ppqp", Pattern="pq"
//Output: [1, 2], pq, qp
//Input: String="abbcabc", Pattern="abc"
//Output: [2, 3, 4], bca, cab, abc

//A:
//Declare variables
//wStart = 0, indexArray = [], patternFrequency = {}, matched = 0,
//Loop through pattern and create patternFrequency hash map
//Loop through string and decrement/increment patternFrequency map
//if frequency hits 0, then increment matched to 1
//matched === length of patternFrequency key length means we have an anagram match
//store the wStart in the indexArray answer
//if none found then return -1

//C:
const findIndexOfAllAnagrams = (str, pattern) => {
    let wStart = 0;
    let indexArray = [];
    let patternFrequency = {};
    let matched = 0;

    for(let i = 0; i < pattern.length; i++) {
        let patternChar = pattern[i];
        if(!(patternChar in patternFrequency)){
            patternFrequency[patternChar] = 0;
        }
        patternFrequency[patternChar] += 1;
    }
    patternFrequency

    for(let wEnd = 0; wEnd < str.length; wEnd++) {
        let rightChar = str[wEnd];
        rightChar
        if((rightChar in patternFrequency)){
            //order matters here
            patternFrequency[rightChar] -= 1;
            if(patternFrequency[rightChar] === 0) {
                matched += 1;
            }
        }

        if(matched === Object.keys(patternFrequency).length) {
            indexArray.push(wStart);
        }

        if(wEnd >= pattern.length - 1) {
            let leftChar = str[wStart];
            wStart += 1;
            if((leftChar in patternFrequency)){
                //order matters here
                //we need to check if patternFrequency[leftChar] is zero to decrement matched
                //BEFORE we increment the frequency (otherwise it will always be > 0)
                if(patternFrequency[leftChar] === 0) {
                    matched -= 1;
                }
                patternFrequency[leftChar] += 1;
            }
        }

    }
    return indexArray;
}

console.log(findIndexOfAllAnagrams('ppqp', 'pq'))
console.log(findIndexOfAllAnagrams('abbcabc', 'abc'))
