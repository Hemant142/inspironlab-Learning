// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6 // Subarray [4,-1,2,1]
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(
  MaximumSumSubarrayKadanesAlgorithm(arr),
  "MaximumSumSubarrayKadanesAlgorithm(arr)"
);
function MaximumSumSubarrayKadanesAlgorithm(arr) {
  let max = -Infinity;
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let subArr = [];
    for (let j = i; j < arr.length; j++) {
      subArr.push(arr[j]);
      sum += arr[j];

      if (max < sum) {
        max = sum;
        resultArr = [...subArr];
      }
    }
  }
  return { max, resultArr };
}
