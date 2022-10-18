/*
  mehsullar cap
  ist secim edir
  qiymetin capi
*/

function menu() {
  print('Magazaya xos gelisiz!');
  print(`1. alma: ${alma} manat\n2. armud: ${armud} manat`);
}

let total = 0;
let alma = 1.5, armud = 3.2;

menu();

const user = parseInt( prompt('Secim edin:') );
if(user === null || isNaN(user)) {
  print('duzgun secim etmediz');
} else if(user === 1) {
  print('alma secdiz');
  total += alma;
} else if(user === 2) {
  print('armud secdiz');
  total += armud;
} else {
  print('secdiyiniz mehsul movcud deyil');
}

if (confirm('seciminizi tesdiqleyin')) {
  console.warn('seciminiz tesdiqlendi');
  console.log(`yekun mebleg: ${total} manat`);
} else {
  console.warn('seciminizden imtina etdiz');
}
