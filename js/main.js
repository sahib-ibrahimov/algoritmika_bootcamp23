function isSimple(n) {
  if(!(n % 2) && (n !== 2)) return false;
  for(let i=3; i<n/2; i+=2) {
    if(n % i === 0) return false;
  }
  return true;
}

const n = parseInt( prompt() );
const arr = [];
for(let i=2; i<=n; i++)
  if(isSimple(i)) arr.push(i);
print(arr);

print( simpleList(n) )
