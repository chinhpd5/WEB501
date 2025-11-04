
var name = 'chinhpd5';  // global: var let const : có thể

{
  // console.log(name);
  let myName ="chinhpd5"; // block: let const không thể
  // console.log(myName); // block: var có thể
}

// console.log(myName);

function test(){
  let myAge = 20; // function: var let const không thể
}

// console.log(myAge);

// hàm
function myFunction(){
  //logic code
  console.log("Xin chào các bạn");
}

// myFunction();

const myFunction2 = function () {
  console.log("Đây là hàm thứ 2");
}

// myFunction2();

const myFunction3 = (name) => {
  return `Chào mừng bạn ${name}`
}

// rút gọn của arrow function
const myFunction4 = name => `Chào mừng bạn ${name}, chúc mừng bạn`;

// console.log(myFunction3('chinhpd5'));
console.log(myFunction4('chinhpd5'));



