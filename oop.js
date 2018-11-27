class ClassName {
  constructor() {
    this.prop1 = 'init1';
    this.prop2 = 'init2';
    console.log('constructor');
  }
  get props() {
    return this.prop2;
  }
  set props(val) {
    this.prop2 = val;
  }
  methodInst() {
    console.log(this.prop2);
  }
  static methodStat() {
    console.log(this.prop1);
  }
}

const oop = new ClassName();

oop.methodInst();
// export default oop; use for react-native; 