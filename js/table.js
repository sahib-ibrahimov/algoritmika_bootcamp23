class Table extends Element {
  thead = null;
  tbody = null;
  constructor(parent) {
    super('table', parent);
  }
  createHeader(arr) {
    if(this.thead !== null) {
      console.error('thead is already created');
      return;
    }
    this.thead = new Element('thead', this);
    const tr = new Element('tr', this.thead);
    arr.forEach( head => {
      const th = new Element('th', tr);
      th.text = head;
    });
  }
  createBody() {
    if(this.tbody !== null) {
      console.error('thead is already created');
      return;
    }
    this.tbody = new Element('tbody', this);
  }
  addRow(arr) {
    if(this.tbody === null) {
      console.error('body is not created');
      return;
    }
    const tr = new Element('tr', this.tbody);
    arr.forEach( cont => {
      const td = new Element('td', tr);
      td.text = cont;
    });
  }
  rows() {
    return this.tbody.children;
  }
  cells(row) {
    return this.tbody.children[row].children;
  }
  getLastRow() {
    const rows = this.tbody.children;
    return rows[rows.length-1];
  }
  colFormat(num, func, className1, className2) {
    for(const tr of this.rows()) {
      const td = tr.children[num];
      if( func(td.innerText) ) td.classList.add(className1);
      else td.classList.add(className2);
    }
  }
}
