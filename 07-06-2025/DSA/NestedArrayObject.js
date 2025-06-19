const input = [
  { name: "text1", data: { name: "text2", data: { name: "text3" } } },
  { name: "text4" },
];

// write program:
// output ["text1", "text2", "text3", "text4"]

// let arr=[{name: "text1", data: {name: "text2", data: {name:"text3"}}}, {name: "text4"}]
let result = [];
for (let i = 0; i < input.length; i++) {
  let obj = input[i];

  function decode(obj) {
    if (obj.name) {
      result.push(obj.name);
    }
    if (obj.data) {
      decode(obj.data);
    }
  }
  decode(obj);
}

console.log(result);
