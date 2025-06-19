// Search in Nested Array of Objects

// Input:
// [
//   { id: 1, name: "Hemant" },
//   { id: 2, name: "Yadav", children: [
//     { id: 3, name: "Sub-Yadav" }
//   ]}
// ]
// Search: name === "Sub-Yadav"
// Output: { id: 3, name: "Sub-Yadav" }
let arr = [
  { id: 1, name: "Hemant" },
  {
    id: 2,
    name: "Yadav",
    children: [
      { id: 3, name: "Sub-Yadav", children: [{ id: 4, name: "Yavnika" }] },
    ],
  },
  //   { id: 4, name: "Pooja", children: [{ id: 4, name: "Yavnika" }] },
];

function SearchinNestedArrayofObjects(arr) {
  let res = [];
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i].children)) {
      res.push({ id: arr[i].id, name: arr[i].name });
      res = res.concat(SearchinNestedArrayofObjects(arr[i].children));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}
let arrName = SearchinNestedArrayofObjects(arr);
let search = "Yavnika";
let res = arrName.filter(
  (ele) => ele.name.toLowerCase() === search.toLocaleLowerCase()
);
console.log(res);
