// Flatten a Nested Object
// Input:
// {
//   a: 1,
//   b: {
//     c: 2,
//     d: {
//       e: 3
//     }
//   }
// }
// Output:
// {
//   'a': 1,
//   'b.c': 2,
//   'b.d.e': 3
// }

let input = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

console.log(FlattenaNestedObject(input), "FlattenaNestedObject(input)");

function FlattenaNestedObject(input, prefix = "") {
  let obj = {};
  for (let key in input) {
    if (typeof input[key] !== "object") {
      if (prefix) {
        obj[prefix + "." + key] = input[key];
      } else {
        obj[key] = input[key];
      }
    } else {
      if (prefix) {
        let temp = FlattenaNestedObject(input[key], prefix + "." + key);
        obj = { ...obj, ...temp };
        obj;
      } else {
        obj = { ...obj, ...FlattenaNestedObject(input[key], key) };
      }
    }
  }
  return obj;
}
