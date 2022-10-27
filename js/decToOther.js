function decToOther(num, base=2) {
  const arr = 'abcdefghijklmnopqrstuvwxyz';
  const str = [];
  while(num >= 1) {
    const r = num % base;
    str.push( ( r < 10 ) ? r : arr[ r - 10 ] );
    num = Math.floor(num / base);
  }
  return str.reverse().join('');
}

print( decToOther(255, 16) );
