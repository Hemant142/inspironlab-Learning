// Rotate Array by k Steps

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

let arr = [1, 2, 3, 4, 5, 6, 7],
  k = 3;

console.log(RotateArraybykSteps(arr, k), "RotateArraybykSteps(arr,k)");
function RotateArraybykSteps(arr, k) {
  let first = arr.slice(arr.length - k, arr.length);
  let last = arr.slice(0, arr.length - k);
  return [...first, ...last];
}
