const find_pair_target_sum = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while(left < right) {
        let currentSum = array[left] + array[right];

        if(currentSum === target) {
            return [left, right];
        }

        if(currentSum > target) {
            right -= 1;
        } else {
            left += 1;
        }
    }

    return [-1, -1];
}

// console.log(find_pair_target_sum([1, 2, 3, 4, 6], 6)); //[1, 3]
// console.log(find_pair_target_sum([2, 5, 9, 11], 11)); //[0, 2]

const find_length_after_duplicate_removal = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let integerHashMap = {};

    while(left < right) {
        let leftChar = arr[left];
        let rightChar = arr[right];

        if(!(leftChar in integerHashMap)) {
            integerHashMap[leftChar] = 0;
        }
        if(!(rightChar in integerHashMap)) {
            integerHashMap[rightChar] = 0;
        }

        integerHashMap[leftChar] = 1;
        integerHashMap[rightChar] = 1;

        left += 1;
        right -=1;
    }

    return Object.keys(integerHashMap).length;
}

console.log(find_length_after_duplicate_removal([2, 3, 3, 3, 6, 9, 9])) //4
