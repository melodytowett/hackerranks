function naturalNUmbers(nums) {
  let sum = 0;
  for (let i = 0; i <= nums; i++){
    if (i % 3 == 0 || i % 5 == 0) {
      sum+=i
    }
  }
  return sum
}
console.log(naturalNUmbers(1000))