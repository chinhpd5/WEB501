// call back

function sayhello(){
  console.log('xin chào');
}

function greeting (callback){
  callback()
}

// greeting(sayhello)

// greeting(()=>{
//   console.log(`Đây cũng là xin chào`);
// })

function delay(ms,callback){
  return setTimeout(()=>{
    callback('Đang chờ ...')
  },ms)
}


function doingCallback(){
  console.log(1);
  delay(2000,(data)=>{
    console.log(data);
    console.log(3);

    delay(2000,(data)=>{
      console.log(data);
      console.log(4);

      delay(2000,(data)=>{
        console.log(data);
        console.log(5);
      });
    });

  });
  
}

// doingCallback();
// call back hell

// promise

const myPromise = new Promise((resolve, reject)=>{
  const isCheck = true;
  if(isCheck){
    resolve('Thành công')
  }else{
    reject('Thất bại')
  }
})

// myPromise
//   .then((res)=>{
//     console.log(res);
//     // đồng bộ
//     return `${res} ...` // các tác bất đồng bộ tiếp theo
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
//   .finally(()=>{
//     console.log("Kết thúc");
//   })


const getData = () => {
  fetch(`http://localhost:3000/events`)
    .then(res => {
      console.log(res);
      return res.json();
    })
    .then(data => {
      console.log(data);
      // hiển thị ra danh sách
      // rendertable()
    })
    .catch(err => {
      console.log(err);
    })
}

getData();