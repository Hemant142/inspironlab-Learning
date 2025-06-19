// Find the First Duplicate

// Input: [2, 1, 3, 5, 3, 2]
// Output: 3

let arr = [2, 1, 3, 5, 3, 2];

console.log(FindtheFirstDuplicate(arr), "FindtheFirstDuplicate");
function FindtheFirstDuplicate(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      return arr[i];
    }
    set.add(arr[i]);
  }
}
