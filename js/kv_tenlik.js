// ax^2 + bx + c = 0

const [a, b, c] = prompt('a b c:').split(' ').map( item => parseFloat(item) );

if(a === 0) alert('a sifir ola bilmez!');
// isNaN

const D = b**2 - 4*a*c;
if(D > 0) {
  const x1 = (-b+Math.sqrt(D))/(2*a);
  const x2 = (-b-Math.sqrt(D))/(2*a);
  alert(`x1=${x1}; x2=${x2}`);
} else if(D === 0) {
  const x = -b/(2*a);
  alert(`x=${x}`);
} else {
  alert('tenliyin koku yoxdur');
}
