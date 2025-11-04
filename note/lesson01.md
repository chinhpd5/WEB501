# Lesson 1: Biến, Hàm

## Khai báo biến
- `var`: khai báo theo cách cũ, có hoisting.
- `let`: khai báo trong `block`, có thể thay đổi giá trị.
- `const`: khai báo trong `block`, KHÔNG thay đổi giá trị (với kiểu dữ liệu `primitive`)

```js
var myName = 'chinhpd5';
let myAge = 20;
const myGender = true;
```

## Quy tắc đặt tên biến
- Tên biến phân biệt chữ hoa và chữ thường.
- Không bắt đầu bằng số.
- Không chứa khoảng trắng hoặc ký tự đặc biệt (ngoại trừ `_` và `$`).
- Kiểu đặt `PascalCase`, `camelCase`, `snake_case`, `kebab-case`
> `Pascal Case`: 
> + Các từ được viết liền nhau không có dấu cách hoặc dấu gạch dưới (_)
> + Chữ cái đầu của mỗi từ đều được viết hoa.
> + Ví dụ: `StudentName`, `UserAccountManager`, ...

> `Camel Case`:
> + Từ đầu tiên viết thường toàn bộ.
> + Chữ cái đầu tiên của mỗi từ tiếp theo được viết hoa.
> + Ví dụ: `studentName`, `userAccountManager`, ...

## Hàm
Hàm `(function)` là một khối mã được định nghĩa để thực hiện một nhiệm vụ cụ thể. Hàm giúp chia nhỏ chương trình thành các phần riêng biệt, dễ đọc, dễ quản lý và tái sử dụng.
Cách đặt tên hàm giống với các đặt tên biến.
>Nên đặt tên hàm theo camelCase

### 5.1. Declaration Function (Khai báo hàm truyền thống)
```js
function tenHam() {
  // nội dung hàm
}

tenham();
```
> + Có thể gọi trước khi khai báo (do hoisting).
> + Là cách khai báo truyền thống và rõ ràng.
> Ví dụ:
```js
sayHello();

function sayHello() {
  console.log("Hello world!");
}
```
#### Tham số trong hàm (parameter)
Tham số là biến được khai báo trong định nghĩa của hàm. Khi bạn gọi hàm, bạn sẽ truyền đối số `(argument)` vào các tham số này để hàm xử lý.
> Tham số `(parameter)`: Là biến định nghĩa trong hàm.
> Đối số `(argument)`: Là giá trị thực tế được truyền vào khi gọi hàm.
```js
function tinhTong(a, b) {   // a và b là THAM SỐ
  console.log(a + b); // Kết quả: 8
}

tinhTong(5, 3); // 5 và 3 là ĐỐI SỐ
```

#### return trong hàm
Trả về giá trị từ một hàm.
```js
function tinhTong(a, b) {
  return a + b; // trả về tổng của a và b
}
let kq = tinhTong(3, 5);
console.log(kq); //8
```
> Khi `return` được gọi: 
> + Hàm dừng lại ngay lập tức.
```js
function test() {
  console.log("Bắt đầu");
  return;
  console.log("Dòng này sẽ không chạy");
}
test(); // Chỉ in "Bắt đầu"
```
> + Giá trị đi sau `return` sẽ được trả về cho nơi gọi hàm.
```js
function tinhTong(a, b) {
  return 10;
  return a + b; // trả về tổng của a và b
}
let kq = tinhTong(3, 5);
console.log(kq); 10
```

#### Default Parameter
Tham số mặc định cho phép bạn gán sẵn giá trị cho tham số trong khai báo hàm. Nếu người dùng không truyền giá trị khi gọi hàm, thì giá trị mặc định sẽ được sử dụng.
```js
function tenHam(thamSo = giaTriMacDinh) {
  // thân hàm
}

function greet(name = "Guest") {
  console.log("Xin chào, " + name);
}

greet(); // "Xin chào, Guest"
greet("Hà");   
```

### 5.2. Expression Function (Hàm gán cho biến)

```js
const tenHam = function(thamSo1, thamSo2) {
  // nội dung
  return giaTri;
};
tenHam();
```
> + Không thể gọi trước khi khai báo.

### 5.3. Arrow Function*
```js
const tenHam = (thamSo1, thamSo2) => {
  // nội dung
  return giaTri;
};
tenHam();
```

Viết ngắn gọn hơn nếu chỉ có 1 dòng return:
```js
const add = (a, b) => a + b;
```

## Destructuring
`Destructuring` là cú pháp cho phép “phân rã” giá trị từ `mảng` hoặc `object` thành các biến riêng biệt một cách ngắn gọn và rõ ràng.

```js
const [a, b, c] = [1, 2, 3];
console.log(a); // 1

const person = { name: "An", age: 20 };
const { name, age } = person;
console.log(name); // "An"
```

### REST
`Rest` (...) là cú pháp dùng để gom các giá trị “còn lại” thành một mảng hoặc object.

```js
function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log(sum(1, 2, 3)); // 6
```

`Rest` trong `Destructuring` (Phân rã)
```js
let [first, ...others] = [1, 2, 3, 4];
console.log(first);   // 1
console.log(others);  // [2, 3, 4]


let { name, ...info } = {
  name: "Hà",
  age: 20,
  email: "ha@example.com"
};
console.log(name); // "Hà"
console.log(info); // { age: 20, email: "ha@example.com" }
```
> Chỉ có thể có một rest, và phải nằm cuối cùng

### Spread
`Spread` (...) là cú pháp giúp “tách rời” (trải ra) các phần tử của `mảng` hoặc `object` tại nơi bạn cần các giá trị rời rạc.

```js
let x = [1, 2];
let y = [3, 4];
let z = [...x, ...y]; // [1, 2, 3, 4]

let a = { x: 1 };
let b = { y: 2 };
let c = { ...a, ...b }; // { x: 1, y: 2 }
```

## Optional Chaining (`?. `)
Tránh lỗi khi truy cập sâu vào object mà có thể bị `undefined` hoặc `null`
```js
object?.property
array?.[index]
```
> Nếu phía trước dấu `?.` là `undefined` hoặc `null` → trả về `undefined` mà không bị lỗi.
> Nếu không → tiếp tục truy cập như bình thường.

## Nullish Coalescing Operator (`??`)
Cung cấp giá trị mặc định chỉ khi giá trị bên trái là `null` hoặc `undefined` (khác với `||`).
```js
let result = value ?? defaultValue;
```
