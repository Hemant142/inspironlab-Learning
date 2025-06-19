// Get All Keys in Nested Object

// Input:
// {
//   name: "Hemant",
//   details: {
//     age: 25,
//     education: {
//       degree: "B.Tech",
//       year: 2020
//     }
//   }
// }
// Output:
// ["name", "details.age", "details.education.degree", "details.education.year"]

let input = {
  name: "Hemant",
  details: {
    age: 25,
    education: {
      degree: "B.Tech",
      year: 2020,
    },
  },
};

console.log(GetAllKeysInNestedObject(input), " GetAllKeysInNestedObject");
function GetAllKeysInNestedObject(input, prefix = "") {
  let res = [];
  for (let key in input) {
    if (typeof input[key] == "object") {
      if (prefix) {
        res = res.concat(
          GetAllKeysInNestedObject(input[key], prefix + "." + key)
        );
      } else {
        res = res.concat(GetAllKeysInNestedObject(input[key], key));
      }
    } else {
      if (prefix) {
        res.push(prefix + "." + key);
      } else {
        res.push(key);
      }
    }
  }
  return res;
}
