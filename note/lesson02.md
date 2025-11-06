# Làm việc với mảng

Mảng là một kiểu dữ liệu có cấu trúc, dùng để lưu trữ nhiều giá trị trong một biến duy nhất, và các giá trị này được đánh số thứ tự `index` từ 0 trở đi.

```js
let fruits = ["Táo", "Cam", "Chuối"];
console.log(fruits[0]);
```
> Trong `JavaScript`, Mảng có thể chứa các giá trị hỗn hợp: chuỗi, số, boolean, object, v.v.

## Khai báo mảng
```js
let arr1 = [1, 2, 3];        
let arr2 = new Array(4, 5, 6);
```

- `length` : Số phần tử trong mảng
```js
let a = [1, 2, 3];
console.log(a.length); // 3
```
## Các phương thức cơ bản làm việc với mảng

| **Phương thức** | **Chức năng**                                   | **Ví dụ**                                | **Kết quả**      |
| --------------- | ----------------------------------------------- | ---------------------------------------- | ---------------- |
| `push()`        | Thêm phần tử vào cuối                           | `[1,2].push(3)`                          | `[1, 2, 3]`      |
| `pop()`         | Xóa phần tử cuối                                | `[1,2,3].pop()`                          | `[1, 2]`         |
| `shift()`       | Xóa phần tử đầu                                 | `[1,2,3].shift()`                        | `[2, 3]`         |
| `unshift()`     | Thêm phần tử vào đầu                            | `[1,2].unshift(0)`                       | `[0, 1, 2]`      |
| `splice()`      | Xoá/thêm/thay thế phần tử tại vị trí bất kỳ     | `[1,2,3,4].splice(1,2,1.5)`              | `[1, 1.5, 4]`    |
| `slice()`       | Cắt ra một mảng con                             | `[1,2,3,4].slice(1,3)`                   | `[2, 3]`         |
| `indexOf()`     | Tìm vị trí phần tử đầu tiên                     | `[1,2,3].indexOf(2)`                     | `1`              |
| `includes()`    | Kiểm tra mảng có chứa phần tử không             | `[1,2,3].includes(2)`                    | `true`           |
| `join()`        | Gộp mảng thành chuỗi                            | `["a","b","c"].join("-")`                | `"a-b-c"`        |
| `reverse()`     | Đảo ngược thứ tự phần tử                        | `[1,2,3].reverse()`                      | `[3, 2, 1]`      |
| `sort()`        | Sắp xếp (mặc định theo chuỗi)                   | `[10,2,5].sort((a,b)=>a-b)`              | `[2, 5, 10]`     |

## Các phương thức nâng cao làm việc với mảng

```js
const students = [
  { name: "Hà", age: 20, gender: "Nữ", mark: 8.5 },
  { name: "Long", age: 21, gender: "Nam", mark: 6.8 },
  { name: "Trang", age: 19, gender: "Nữ", mark: 9.2 },
  { name: "Minh", age: 22, gender: "Nam", mark: 7.4 },
  { name: "Hương", age: 20, gender: "Nữ", mark: 3.9 }
];
```

### forEach
`forEach()` là một phương thức duyệt qua từng phần tử trong mảng, và thực thi một `logic` cho mỗi phần tử.
> `forEach()` không trả về mảng mới.
```js
array.forEach(function(element, index, array) {
  // hành động thực hiện với mỗi phần tử
});
```
> `element`: phần tử đang xét
> `index` (tùy chọn): chỉ số phần tử
> `array` (tùy chọn): chính mảng gốc

### find
`find()` là phương thức dùng để tìm phần tử đầu tiên trong mảng thỏa mãn một điều kiện. Nếu không tìm thấy, nó trả về `undefined`.
```js
array.find(function(element, index, array){
  return // điều kiện;
})
```

### every
`every()`: Trả về `true` nếu tất cả phần tử trong mảng thỏa mãn điều kiện, `false` nếu chỉ cần 1 phần tử KHÔNG thỏa mãn điều kiện.
```js
array.every((element, index, array) => {
  return điều_kiện;
});
```
> `every` trả về giá trị `boolean`: `true/false`
> Nếu tất cả phần tử thỏa mãn điều kiện: `true`
> Chỉ cần 1 phần tử KHÔNG thỏa mãn điều kiện: `false` và kết thúc vòng lặp

### some
`some()`: Trả về `true` nếu có ít nhất 1 phần tử thỏa mãn điều kiện, `false` nếu tất cả các phần tử KHÔNG thỏa mãn điều kiện.
```js
array.every((element, index, array) => {
  return điều_kiện;
});
```
> `some` trả về giá trị `boolean`: `true/false`
> Chỉ cần 1 phần từ thỏa mãn điều kiện: `true` và kết thúc vòng lặp
> Nếu tất cả phần tử KHÔNG thỏa mãn điều kiện: `false`

### map
`map()` là một phương thức của mảng trong `JavaScript`, dùng để tạo ra một mảng mới bằng cách biến đổi từng phần tử trong mảng gốc thông qua một hàm. 
```js
array.map((element, index, array) => {
  // trả về giá trị mới cho phần tử đó
  return //logic
});

```
> Luôn trả về một mảng mới thông qua `return` cùng số lượng phần tử.
> Không thay đổi mảng gốc.

### filter
`filter()` là một phương thức giúp lọc ra các phần tử trong mảng thỏa mãn điều kiện cho trước.
```js
array.filter((element, index, array) => {
  return điều_kiện;
});
```
> Nó trả về một mảng mới, chỉ chứa các phần tử đúng điều kiện qua `return`.
> `find` trả về kết quả đầu tiên tìm được
> `filter` trả về 1 mảng chứa các kết quả tìm được (Thỏa mãn điều kiện)

### reduce
`reduce()` là phương thức dùng để rút gọn `(reduce)` một mảng thành một giá trị duy nhất bằng cách lặp qua từng phần tử và tích lũy kết quả.
> Giá trị trả về có thể là:
> + một con số (tổng),
> + một chuỗi,
> + một mảng mới,
> + hoặc thậm chí là một object mới.

```js
array.reduce((accumulator, currentValue, index, array) => {
  return giá_trị_mới;
}, giá_trị_khởi_tạo);
```
> `accumulator`: giá trị tích lũy (giá trị cuối cùng sẽ return)
> `currentValue`: phần tử hiện tại đang duyệt
> `giá_trị_khởi_tạo`: bắt đầu tích lũy từ đâu (nếu không có, `accumulator` = phần tử đầu tiên)

## Bài tập
```js
const students = [
  { id: 1, name: "Nam", age: 18, gender: "male", mark: 8 },
  { id: 2, name: "Lan", age: 17, gender: "female", mark: 6 },
  { id: 3, name: "Hùng", age: 19, gender: "male", mark: 4 },
  { id: 4, name: "Mai", age: 18, gender: "female", mark: 9 },
  { id: 5, name: "An", age: 16, gender: "male", mark: 7 },
];
```
- Câu 1: `forEach` (Duyệt mảng & in ra thông tin)
```
Nam - 18 tuổi - Điểm: 8
Lan - 17 tuổi - Điểm: 6
...
```
- Câu 2: `filter` (Lọc sinh viên đậu - Tạo mảng mới gồm các sinh viên có `mark >= 7`.)
- Câu 3: `map` (Tạo bảng danh sách)
Tạo mảng mới chứa các chuỗi định dạng:
```
"Lan (nữ) - 17 tuổi - Điểm: 6"
... từ mảng students
```
- Câu 4: `reduce` để tính tổng điểm và tìm sinh viên có tuổi lớn nhất và nhỏ nhất
- Câu 5: Viết hàm `findStudentByName(name)` để tìm và trả về `object` sinh viên có `name === tên nhập và`o. Nếu không tìm thấy, trả về `"Không tìm thấy"`

# Module

`Module` là tệp chứa mã (code) tách biệt có thể tái sử dụng, `import/export` lẫn nhau, giúp:
- Chia nhỏ chương trình lớn → dễ bảo trì
- Tránh trùng tên biến, hàm → tránh xung đột
- Tăng tính tái sử dụng giữa nhiều project

## Cấu trúc Module

Mỗi file `.js` là một `module` riêng biệt
> Có phạm vi riêng, không ảnh hưởng đến `global scope`.

```js
// utils.js
export function sayHi(name) {
  console.log(`Hi, ${name}`);
}
```

```js
// main.js
import { sayHi } from './utils.js';
sayHi("Nam");
```

## Các loại Export

### Named Export
Khai báo nhiều thứ và gọi đúng tên khi `import`.
```js
// math.js
export const PI = 3.14;
export function sum(a, b) {
  return a + b;
}
```
```js
// main.js
import { PI, sum } from './math.js';
```
> Có thể `export` nhiều hàm/biến
> Phải gọi đúng tên

### Default Export
Chỉ `export` một giá trị duy nhất.
```js
// message.js
export default function () {
  console.log("Xin chào!");
}
```

```js
import greet from './message.js'; // tên tự đặt được
greet();
```
> Không cần dùng `{}`
> Tên khi `import` có thể tùy ý
> Mỗi `module` chỉ có 1 `default export`

