# Bất đồng bộ và xử lý bất đồng bộ trong JavaScript
Mục tiêu bài học:
- Thế nào là bất đồng bộ trong JavaScript
- Tại sao phải xử lý bất đồng bộ
- Callback
- Promise
- Async/await

## Bất đồng bộ là gì?
`JavaScript` là ngôn ngữ đơn luồng `(single-thread)`, nhưng lại hỗ trợ xử lý nhiều tác vụ cùng lúc mà không bị chặn dòng lệnh chính. Đó là cơ chế bất đồng bộ `(asynchronous)`.

Các tác vụ gây bất đồng bộ:
- Timer (setTimeout, setInterval)
- Network / HTTP request (call api)
- Đọc file
- Event listener (addEventListener)
- ...

Công dụng của bất đồng bộ:
- Tăng hiệu suất: Không chờ tác vụ chậm mới xử lý tiếp
- Tránh đơ UI: Trình duyệt vẫn phản hồi người dùng
- Quản lý tác vụ dài hạn như gọi API, sự kiện, ...

## Tại sao cần xử lý bất đồng bộ
- Phụ thuộc kết quả trước
- Logic yêu cầu thứ tự rõ ràng
- Tránh sai sót hoặc lỗi UI

## Các cách xử lý bất đồng bộ
- Callback
- Promise
- Async/Await

## Callback
`Callback` là một hàm được truyền vào như tham số cho hàm khác, và sẽ được gọi lại trong hàm đó.

Ví dụ: 
```js
const sayHello = ()=>{
  console.log(`Xin chào`);
}

const greeting = (callback)=>{
  // logic code
  callback()
}

greeting(sayHello)

greeting((name)=>{
  console.log(`Xin chào ${name}`);
})
```

Xử lý bất đồng bộ bằng `callback`
```js
// tạo 1 tác vụ bất đồng bộ
function delay(ms,callback){
  setTimeout(()=>{
    callback('Waiting ...')
  },ms)
}

function doingCallback (){
  console.log("Bắt đầu");
  delay(2000,(data)=>{
    console.log(data);
    console.log("Kết thúc");
  })
}
```
Nhược điểm: Khó hiểu và tạo `Callback hell`

## Promise
`Promise` là một đối tượng đại diện cho một giá trị sẽ có trong tương lai — có thể là thành công (`resolve`) hoặc thất bại (`reject`).

Ví dụ:
```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Thành công!");
  } else {
    reject("Thất bại!");
  }
});

// sử dụng
promise
  .then((result) => {
    console.log("Kết quả:", result);
  })
  .catch((error) => {
    console.error("Lỗi:", error);
  });
  .finally(()=>{
    console.log("Kết thúc")
  })

```

`Promise` xử lý bất đồng bộ
```js
function delayPromise(ms){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const isCheck = true;
      if(isCheck){
        resolve('Waiting')
      }else{
        reject("Thất bại")
      }
    },ms)
  })
}

function doingPromise(){
  console.log("Bắt đầu");
  delayPromise(2000)
    .then((data)=>{
      console.log(data);
      console.log("Kết thúc");
    })
    .catch((error) => {
      console.log(error)
    })
    .finally()
}
```

## Async/await
`async / await` là cú pháp mới của `ES2017` giúp viết code bất đồng bộ giống như code đồng bộ.

```js
async function doingAsync(){
  try {
    console.log("Bắt đầu");
    const data = await delayPromise(1000);
    console.log(data);
    console.log("Kết thúc");
  } catch (error) {
    console.log(error);
  }
}
```
