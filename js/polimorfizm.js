class NV {
  yerdeyisme() {
    console.log('yerdeyisme');
  }
}

class Avto extends NV {
  yerdeyisme() {
    super.yerdeyisme();
    console.log('quruda');
  }
}

class Minik extends Avto {
  yerdeyisme() {
    super.yerdeyisme();
    console.log('4 tekerli');
  }
}

class Plane extends NV {
  yerdeyisme() {
    super.yerdeyisme();
    console.log('havada');
  }
}

const avto = new Avto();
const plane = new Plane();
const minik = new Minik();

avto.yerdeyisme();
debug();

plane.yerdeyisme();
debug();

minik.yerdeyisme();
