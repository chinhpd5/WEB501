function ShowName(props) {
  console.log(props);
  return (
    <div>
      <h1>Xin chào {props.name} </h1>
      <h2>Tuổi: {props.age}</h2>
    </div>
  )
}


function App() {

  return (
    <div>
      <ShowName name="chinhpd5" age="20"/>
      <ShowName name="Phí Đức Chính" age="21"/>
    </div>
  )
}

export default App
