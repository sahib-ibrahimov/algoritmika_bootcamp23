function printList(goods, costs) {
  printLn(25);
  print('N  Mehsul \t Qiymet')
  goods.forEach( (item, index) => {
    print(`${index+1}. ${item} \t${costs[index]} manat`);
  });
  printLn(25);
}

let total = 0;
const mehsullar = ['alma', 'armud', 'banan'];
const qiymetler = [2, 1.5, 3];

print('Magazaya xos gelmisiniz!');

do {
  printList(mehsullar, qiymetler);
  const user = parseInt( prompt('Secim edin:') );
  if(user === null || isNaN(user)) break;
  if((user < 1) || (user > mehsullar.length)) {
    print('secdiyiniz mehsul movcud deyil', WARN);
    continue;
  }
  total += qiymetler[user-1];
} while(true);

print(`yekun mebleg: ${total} manat`, WARN);

if (confirm('seciminizi tesdiqleyin')) {
  print('seciminiz tesdiqlendi');
} else {
  print('seciminizden imtina etdiz', ERR);
}
