
function birthdayCakeCandles(candles) {
  let max = candles[0]
  let sumOfTallestCandles = 0
  for(let i=0;i<candles.length;i++){
      if(candles[i]>max){
          max = candles[i]
      }
  }
  for(let i = 0; i<candles.length;i++){
      if(candles[i] == max){
          sumOfTallestCandles +=1
      }
  }
return sumOfTallestCandles  // Write your code here
}
console.log(birthdayCakeCandles([3,4,5,5,1]))