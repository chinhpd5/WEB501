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

doingCallback();
// call back hell

// promise