const URL = 'https://acb-api.algoritmika.org/api/transaction';
let new_transaction = true;

function editBtn(id) {
  const btn = document.createElement('button');
  btn.innerText = 'edit';
  const td = document.createElement('td');
  btn.addEventListener('click', (e) => {
    const row = e.target.parentElement.parentElement.children;
    $('#from').value = row[0].innerText;
    $('#to').value = row[1].innerText;
    $('#amount').value = row[2].innerText;
    $('#id').value = row[3].innerText;

    $('.id').style['display'] = 'table-row';
    new_transaction = false;
  });
  td.append(btn);
  return td;
}

function delBtn(id) {
  const btn = document.createElement('button');
  btn.innerText = 'delete';
  const td = document.createElement('td');
  btn.addEventListener('click', (e) => {
    if( confirm('confirm delete?') ) {
      fetch(`${URL}/${id}`, {
        method: 'DELETE'
      }).then(r => {
        switch (r.status) {
          case 200:
            alert('transaction removed');
            reload();
            break;
          case 404:
            alert('transaction not found');
            break;
          default:
            alert('unknown error');
        }
      })
    }
  });
  td.append(btn);
  return td;
}

function reload() {
  fetch(URL).then(r => r.json()).then(data => {
    const div = $('.list');
    div.innerHTML = '';

    const table = new Table(div);
    table.addClass('data');

    const headers = Object.keys(data[0]).slice();
    headers.push('edit');
    headers.push('delete');

    table.createHeader( headers );
    table.createBody();
    data.forEach( item => {
      table.addRow( Object.values(item).slice() );
      table.getLastRow().append( editBtn(item.id) );
      table.getLastRow().append( delBtn(item.id) );
    });
  });
}

$('#transaction').addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData( e.target );
  const eURL = URL + (new_transaction ? '' : '/'+$('#id').value);
  const method = new_transaction ? 'POST' : 'PUT';

  const transaction = {
    from: data.get('from'),
    to: data.get('to'),
    amount: data.get('amount')
  }

  fetch(eURL, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(transaction)
  }).then(r => {
    switch (r.status) {
      case 200: case 201:
        alert('success');
        reload();
        e.target.reset();
        break;
      case 400:
        alert('error');
        break;
      default:
        alert('unknown error');
    }
  })
});

$('#transaction').addEventListener('reset', (e) => {
  $('.id').style['display'] = 'none';
  new_transaction = true;
});

$('#reload').addEventListener('click', reload);
