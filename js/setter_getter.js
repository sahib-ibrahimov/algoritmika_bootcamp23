class User {
  #name = null;
  #age = 0;
  constructor(name) {
    this.#name = name;
  }
  set age(age) {
    if((0 < age) && (age < 100)) {
      this.#age = age;
    } else {
      console.warn('yas duzgun deyil');
    }
  }
  get age() {
    return this.#age !== 0 ? this.#age : 'yas duzgun teyin edilmeyib';
  }
}

const user1 = new User('eli');
user1.age = -15;
console.log( user1.age );
