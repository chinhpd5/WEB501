// đúng tên biến và nằm trong {}
import {myName as newName, sayHello} from './test.js'
// có thể khác tên biến và KHÔNG {}
import xyz from './test.js'
console.log(xyz);


const students = [
  { name: "Hà", age: 20, gender: "Nữ", mark: 8.5 },
  { name: "Long", age: 21, gender: "Nam", mark: 6.8 },
  { name: "Trang", age: 19, gender: "Nữ", mark: 9.2 },
  { name: "Minh", age: 22, gender: "Nam", mark: 7.4 },
  { name: "Hương", age: 20, gender: "Nữ", mark: 3.9 }
];

// forEach
students.forEach((item,index, array)=>{

  // console.log(item);
  // console.log(index);
  // console.log(array);
  // console.log(
  //   `Họ và tên: ${item.name}, tuổi: ${item.age}`
  // );
})

// map: duyệt qua các phần tử trong mảng và trả về mảng mới, 
// các tử trong mảng mởi trả về thông qua return

const newStudents = students.map((item)=>{
  let rank ='';
  if(item.mark > 9)
    rank = 'Giỏi'
  else if(item.mark > 7)
    rank = 'Khá'
  else if(item.mark > 5)
    rank = 'Trung bình'
  else
    rank = 'Yếu'

  return {
    ...item, // spread
    // rank: rank
    rank
  }
})

// console.log(newStudents);

// filter: duyệt mảng, trả về mảng mới, có điều kiện ở return

const menStudent = students.filter((item)=>{
  // return item.gender == 'Nữ'
  return item.age >= 20
})

// console.log(menStudent);
// lọc các bạn có tuổi lớn hơn hoặc bằng 20

// reduce

let total = 0;

students.forEach(item => {
  total+=item.mark
})

// console.log(total);

const totalReduce = students.reduce((preValue, item, index,array)=>{
  return preValue += item.mark
},0)

// console.log(totalReduce);

console.log(newName);
sayHello();




