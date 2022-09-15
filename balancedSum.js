function balancedSum(arr) {
  let sum = arr.reduce((acc, val) => acc + val)
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++){
    sum -= arr[i];
    if (sum === leftSum) {
      return 'YES';
    }
    leftSum += arr[i];
  }
  return 'NO'
}
console.log(balancedSum([2,0,0,0]))