// Input: [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]

let arr = [0, 1, 0, 3, 12];
function MoveAllZerostotheEnd(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == 0 && arr[j] != 0 && arr[j] !== undefined) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        break;
      }
    }
  }
  return arr;
}
console.log(MoveAllZerostotheEnd(arr), "MoveAllZerostotheEnd(arr)");
