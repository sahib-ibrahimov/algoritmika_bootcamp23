class User {
  constructor(id,userName) {
    this.id = id;
    this.userName = userName;
  }
  rename(userName) {
    this.userName = userName;
  }
  toString() {
    return `${this.id}.${this.userName}`;
  }
}

class UsersList {
  constructor() {
    this.users = new Array();
    this.currentId = 0;
  }
  addUser(name){
    const user = new User(this.currentId, name);
    this.users.push(user);
    this.currentId++;
  }
  removeUser(id){
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].id === id) {
        this.users.splice(i, 1);
        break;
      }
    }
  }
  renameUser(id, name){
    for(let i=0; i<this.users.length; i++) {
      if(this.users[i].id === id){
        this.users[i].rename(name);
        break;
      }
    }
  }
  getAllUsersString(){
    return this.users.join('; ');
  }
}

class Application {
  constructor() {
    this.userList = new UsersList();
  }
  init() {
    while (true) {
      let emr = prompt("Emr daxil edin:");
      if(emr === null) break;
      emr = emr.split(" ");

      switch (emr[0]) {
        case "create":
          this.userList.addUser(emr[1]);
          break;
        case "rename":
          this.userList.renameUser( parseInt(emr[1]), emr[2]);
          break;
        case "remove":
          this.userList.removeUser( parseInt(emr[1]) );
          break;
        default:
          console.warn("Emr duzgun daxil edilmeyib");
      }
      console.log( this.userList.getAllUsersString() );
    }
  }
}

const app = new Application();
app.init();
