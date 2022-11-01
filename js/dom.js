const $ = s => document.querySelector(s);
const $a = s => document.querySelectorAll(s);

class Element {
  elem = null;
  constructor(tag, parent) {
    this.elem = document.createElement(tag);
    parent.append(this.elem);
  }
  self() {
    return this.elem;
  }
  append(obj) {
    this.elem.append(obj);
  }
  set text(str) {
    this.elem.innerText = str;
  }
  get text() {
    return this.elem.innerText;
  }
  get children() {
    return this.elem.children;
  }
  addClass(className) {
    if(!this.elem.classList.contains(className))
      this.elem.classList.add(className);
  }
  delClass(className) {
    if(this.elem.classList.contains(className))
      this.elem.classList.remove(className);
  }
  hide() {
    this.elem.style.display = 'none';
  }
  show() {
    this.elem.style.display = '';
  }
}
