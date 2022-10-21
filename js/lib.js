const [LOG, WARN, ERR] = [0, 1, 2];

function print(obj, stat=LOG) {
  let msg = obj;
  if( Array.isArray(obj) ) msg = obj.toString();
  switch (stat) {
    case LOG:   console.log(msg);   break;
    case WARN:  console.warn(msg);  break;
    case ERR:   console.error(msg); break;
    default:    console.log(msg);
  }
}

function debug(obj=' ') {
  console.warn(obj);
}

const isAlfa = ch => (('a' <= ch) && (ch <= 'z')) || (('A' <= ch) && (ch <= 'Z'));
const isDigit = ch => ('0' <= ch) && (ch <= '9');

const even = n => !(n % 2);
const odd = n => n % 2;

const random = (max=100, min=0) => Math.trunc( Math.random() * (max-min) + min);

function reverse(str) {
  let t = '';
  for(let i=str.length-1; i>=0; --i) t += str[i];
  return t;
}

function isPolindrom(str) {
  for(let i=0, j=str.length-1; i<j; ++i, --j)
    if(str[i] !== str[j])
      return false;
  return true;
}

function count(str, ch) {
  let cem = 0;
  for(let i=0; i<str.length; ++i)
    if(str[i] === ch) ++cem;
  return cem;
}

function isNumber(str) {
  return !isNaN( Number(str) );
  // let point = false;
  // for(let i=0; i<str.length; ++i)
  //   if( !isDigit(str[i]) ) {
  //     if( (str[i] === '.') && !point ) {
  //       point = true;
  //     } else return false;
  //   }
  // return true;
}
