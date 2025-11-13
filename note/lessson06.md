# Hooks

- `Hooks` là tính năng được giới thiệu từ `React` `16.8`.
- Cho phép `component` dạng hàm (function `component`) có thể sử dụng `state`, vòng đời, và các logic khác mà trước đây chỉ có trong `class component`.


## useState – Quản lý state trong function component

Cú pháp:
```jsx
const [state, setState] = useState(initialValue);
```
| Thành phần     | Ý nghĩa                         |
| -------------- | ------------------------------- |
| `state`        | Giá trị hiện tại của biến state |
| `setState`     | Hàm để thay đổi giá trị `state` |
| `initialValue` | Giá trị khởi tạo của `state`    |

Ví dụ:
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0); // khởi tạo count = 0

  return (
    <div>
      <p>Giá trị: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
    </div>
  );
}
```

## useEffect – Xử lý hiệu ứng phụ (side-effect)
- Gọi `API`
- Gắn/Tháo `event`
- Set `document.title`, `localStorage`,...

Cú pháp:
```jsx
useEffect(() => {
  // code chạy sau mỗi lần render (hoặc khi deps thay đổi)
}, [dependencies]);
```
| Dependency (deps)    | Ý nghĩa                                       |
| -------------------- | --------------------------------------------- |
| Không có `[]`        | Chạy sau mỗi lần render                       |
| Có `[]` rỗng         | Chỉ chạy 1 lần duy nhất (sau render đầu tiên) |
| Có giá trị `[count]` | Chạy lại mỗi khi `count` thay đổi             |

Ví dụ:
```jsx
import { useState, useEffect } from "react";

function TitleChanger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Bạn đã click ${count} lần`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>Click</button>
  );
}
```
