let arr = [1, 2, 3, 4, 5, 6];


function reverseArray(arr, start, end) {
  while (start < end) {
    var temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function printArray(arr, size) {
    for (var i = 0; i < size; i++) {
      console.log(arr[i]);
    }
  }
  console.log("//Original Array")
  printArray(arr,6)
  reverseArray(arr,0,6-1)
  console.log("//Reversed Array")
  printArray(arr,6)
