function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if ( typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}
let sum1 = [1, 2, '3', '4', 'five', 6];
console.log(sumOfNumbers(sum1)); 
