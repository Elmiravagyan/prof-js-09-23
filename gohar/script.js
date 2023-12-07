function A(name) {
    this.name = name;  
 }
 
 function B(name) {
    this.name = name;
    return 'Hello'; 
 }
 
 function C(name) {
    this.name = name;
    return new String('Help');
 }
 
 function D(name) {
    this.name = name;
    return { x: 11 };
 }
 
 let a = new A('A'); // { name: 'A' }, undefined
 let b = new B('B'); // { name: 'B' } =>  error, 
 let c = new C('C'); // 
 let d = new D('D');
 console.log(d)