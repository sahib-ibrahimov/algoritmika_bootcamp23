const arr = [];
for(let i=0; i<10; i++) arr.push( random() );
print(arr);

function insertionSort(arr) {
  for(let i=0; i<arr.length; i++) {
    let min = i;
    for(let j=i+1; j<arr.length; j++) {
      if(arr[j] < arr[min]) min = j;
    }
    const t = arr[i];
    arr[i] = arr[min];
    arr[min] = t;
  }
}

function insertionSort2(arr) {
  const arr2 = [];
  while(arr.length > 0) {
    let min = 0;
    for(let i=0; i<arr.length; i++) {
      if(arr[i] < arr[min]) min = i;
    }
    arr2.push( arr[min] );
    arr.splice(min, 1);
  }
  return arr2;
}

function bubbleSort(arr, func) {
  for(let i=0; i<arr.length-1; i++) {
    for(let j=i+1; j<arr.length; j++) {
      if(func(arr[i], arr[j]) > 0) {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
}

const func = (current, next) => {
  if (odd(current) && even(next)) return -1;
  if (odd(next) && even(current)) return 1;

  if (current > next) return 1;
  if (current < next) return -1;
  return 0;
}

// insertionSort(arr)
// print( insertionSort2(arr) );

// arr.sort(func);
// bubbleSort(arr,func);

print(arr);
