function foreach(arr, func) {
  for(let i=0; i<arr.length; i++) {
    func(arr[i], i, arr);
  }
}

function map(arr, func) {
  const arr2 = [];
  for(let i=0; i<arr.length; i++) {
    const x = func(arr[i], i, arr);
    arr2.push(x);
  }
  return arr2;
}

function find(arr, func) {
  for(let i=0; i<arr.length; i++) {
    if( func(arr[i], i, arr) ) {
      return arr[i];
    }
  }
}

function filter(arr, func) {
  const arr2 = [];
  for(let i=0; i<arr.length; i++) {
    if( func(arr[i], i, arr) ) {
      arr2.push( arr[i] );
    }
  }
  return arr2;
}

const arr = [1, 2, 3, 4, 5];

print('foreach');
foreach(arr, item => { print(item); } );
printLn();

print('map');
print( map(arr, item => item * 2) );
printLn();

print('find');
print( find(arr, item => item > 2) );
printLn();

print('filter');
print( filter(arr, item => item < 3) );
printLn();
