// y =  x^2, x < 0
//     _/x`, x >= 0

const f = x => (x < 0) ? x**2 : Math.sqrt(x);
print( f( parseInt( prompt('x:') ) ) );

// function f(x) {
//   if(x < 0) {
//     return x**2;
//   } else {
//     return Math.sqrt(x);
//   }
// }
// const x = parseInt( prompt('x:') );
// const y = f(x);
// print(y);
