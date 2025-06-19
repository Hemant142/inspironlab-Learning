// Write a JavaScript function to extract all name values from a nested object structure like: solve it by flattening the structure.
// const input = [{name: "text1", data: {name: "text2", data: {name:"text3"}}}, {name: "text4"}]
// Expected output: ["text1", "text2", "text3", "text4"]

const input = [
  { name: "text1", data: { name: "text2", data: { name: "text3" } } },
  { name: "text4" },
];
function ExtractAllName(input) {
  let arr = [];
  for (let i = 0; i < input.length; i++) {
    arr.push(input[i].name);
    if (input[i].data) {
      arr = arr.concat(ExtractAllName([input[i].data]));
    }
  }
  return arr;
}

console.log(ExtractAllName(input));
// <============== Id data become set changes=====================>
const input1 = [
  { name: "text1", data: { name: "text2", data1: { name: "text3" } } },
  { name: "text4" },
];

function extraclAllName(input1) {
  let result = [];
  for (let i = 0; i < input1.length; i++) {
    let data = input1[i];
    for (let key in data) {
      if (key == "name") {
        result.push(data[key]);
      } else {
        result = result.concat(extraclAllName([data[key]]));
      }
    }
  }
  return result;
}
console.log(extraclAllName(input1));
