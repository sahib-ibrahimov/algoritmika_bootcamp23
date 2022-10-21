const novbe = [];

do {
  let str = prompt();
  if((str === '=') || (str === null)) break;
  else if(str === '') {
    if(novbe.length === 0)
      console.warn('novbe bosdur');
    else
      console.log( novbe.shift() );
  }
  else novbe.push(str);
} while(true);

if(novbe.length === 0)
  console.warn('novbe bosdur');
else {
  console.warn('novbede qalanlar: ');
  for(let i=0; i<novbe.length; i++)
    console.log(novbe[i]);
}
