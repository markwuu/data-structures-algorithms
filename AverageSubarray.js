// Brute force approach
// Time complexity O(N^2) due to for loop within a for loop
const findAverageOfSubarray = (K, array) => {
    let sum;
    let averageSumArray = [];
    for (let i = 0; i < array.length - K + 1; i++){
        console.log(array[i])
        sum = 0.0;
        for (let j = i; j < i + K; j++) {
            console.log(array[j]);
            sum += array[j];
            console.log(sum)
        }
        averageSumArray.push(sum/K);
    }
    return averageSumArray;
}

console.log(findAverageOfSubarray(5, [1,2,3,4,5,6,7,8,9,10]))

//1,2,3,4,5 average => 3
//2,3,4,5,6 average => 4
//3,4,5,6,7 average => 5
//4,5,6,7,8 average => 6
//5,6,7,8,9 average => 7
//6,7,8,9,10 average => 8
