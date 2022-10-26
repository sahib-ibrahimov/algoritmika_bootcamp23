const MAX = 3; // istifadecilerin sayi

const user = {
  name: null,
  age: 0
}

const arr = [];

for(let i=0; i<MAX; i++) {
  const temp = {...user};
  temp.name = prompt(`${i+1}-ci istifadecinin adi:`);
  temp.age = parseInt( prompt(`${i+1}-ci istifadecinin yasi:`) );
  arr.push(temp);
}

let total = 0;
arr.forEach( user => {
  total += user.age;
});
total /= arr.length;
print(`orta yas: ${total}`);
