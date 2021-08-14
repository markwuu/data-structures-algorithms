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

console.log(find_pair_target_sum([1, 2, 3, 4, 6], 6)); //[1, 3]
console.log(find_pair_target_sum([2, 5, 9, 11], 11)); //[0, 2]
