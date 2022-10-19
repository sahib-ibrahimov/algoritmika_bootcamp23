function print(obj) {
  console.log(obj);
}

function debug(obj=' ') {
  console.warn(obj);
}

const isAlfa = ch => (('a' <= ch) && (ch <= 'z')) || (('A' <= ch) && (ch <= 'Z'));
const isDigit = ch => ('0' <= ch) && (ch <= '9');

const even = n => !(n % 2);
const odd = n => n % 2;

const random = (max=100, min=0) => Math.trunc( Math.random() * (max-min) + min);

function count(str, ch) {
  let cem = 0;
  for(let i=0; i<str.length; ++i)
    if(str[i] === ch) ++cem;
  return cem;
}

function isNumber(str) {
  for(let i=0; i<str.length; ++i)
    if( !isDigit(str[i]) )
      return false;
  return true;
}
