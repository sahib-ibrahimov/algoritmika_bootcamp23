class TableSort {
  sorted = [false, false, false];
  constructor(table) {
    this.table = table;
    this.tbody = table.querySelector('tbody');
    this.data = new Array();
    const rows = this.tbody.children;
    for(let i=0; i<rows.length; i++) {
      const temp = new Array();
      const cells = rows[i].children;
      for(let j=0; j<cells.length; j++) {
        const d = cells[j].innerText;
        const pd = parseFloat(d);
        temp.push( (pd == d) ? pd : d );
      }
      this.data.push(temp);
    }
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
  clear() {
    this.tbody.remove();
    this.tbody = new Element('tbody', this.table);
  }
  fill() {
    this.data.forEach( item => {
      this.addRow(item);
    });
  }
  sort(i) {
    if( this.sorted[i] ) {
      this.sortHighToLow(i);
    } else {
      this.sortLowToHigh(i);
    }
    this.sorted[i] = !this.sorted[i];
    this.clear();
    this.fill();
  }
  sortLowToHigh(i) {
    this.data.sort( (first, second) => {
      if( first[i] > second[i] ) return 1;
      if( first[i] < second[i] ) return -1;
      if(first[0] > second[0]) return 1;
      else return -1;
    });
  }
  sortHighToLow(i) {
    this.data.sort( (first, second) => {
      if( first[i] < second[i] ) return 1;
      if( first[i] > second[i] ) return -1;
      if(first[0] > second[0]) return 1;
      else return -1;
    });
  }
}
