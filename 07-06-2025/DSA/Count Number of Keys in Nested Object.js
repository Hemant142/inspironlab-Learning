// Count Number of Keys in Nested Object
// Input:
// {
//   x: 1,
//   y: {
//     a: 2,
//     b: {
//       c: 3
//     }
//   }
// }
// Output: 4

let input = {
  x: 1,
  z: {
    a: 2,
  },
  y: {
    a: 2,
    b: {
      c: 3,
    },
  },
};
console.log(
  CountNumberofKeysinNestedObject(input),
  "CountNumberofKeysinNestedObject(input)"
);

function CountNumberofKeysinNestedObject(input, isRoot = true) {
  let count = 0;
  for (let key in input) {
    if (!isRoot) {
      count++;
    }
    if (typeof input[key] == "object") {
      if (isRoot) {
        count++;
      }
      count += CountNumberofKeysinNestedObject(input[key], (isRoot = false));
    }
  }
  return count;
}

// console.log(count, "count");
