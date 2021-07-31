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

console.log(findAverageOfSubarraySolutionTwo(5, [1,2,3,4,5,6,7,8,9,10]))
