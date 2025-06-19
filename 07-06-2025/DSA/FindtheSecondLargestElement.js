// Find the Second Largest Element
// Input: [12, 35, 1, 10, 34, 1]
// Output: 34

let arr = [12, 35, 1, 10, 34, 1];

function secondLargestElement(arr) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let max = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (max < arr[j]) {
        max = arr[j];
        if (max > largest) {
          largest = max;
        }
        if (max > secondLargest && max < largest) {
          secondLargest = max;
        }
      }
    }
  }
  return secondLargest;
}

console.log(
  secondLargestElement(arr),
  "secondLargestElement([12, 35, 1, 10, 34, 1])"
);
