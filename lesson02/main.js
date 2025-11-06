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
  console.log(
    `Họ và tên: ${item.name}, tuổi: ${item.age}`
  );
})