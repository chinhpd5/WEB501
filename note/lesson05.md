# Props trong React

- `props` là viết tắt của "`properties`" – tức thuộc tính.
- Là cách truyền dữ liệu từ `component` cha sang `component` con trong `React`.
- `props` giúp `component` tái sử dụng và linh hoạt hơn bằng cách truyền dữ liệu đầu vào khác nhau.
> `Component` nhận `props` như tham số của hàm.

```jsx
function Welcome(props) {
  return <h2>Xin chào, {props.name}!</h2>;
}

function App() {
  return (
    <div>
      <Welcome name="An" />
      <Welcome name="Bình" />
    </div>
  );
}
```   

Hoặc 

```jsx
const user = {
  name: "Lan",
  age: 20
};

function UserCard({ name, age }) {
  return <p>{name} - {age} tuổi</p>;
}

function App() {
  return <UserCard name={user.name} age={user.age} />;
}
```