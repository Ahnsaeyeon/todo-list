let likePizza = false;

const pizza = new Promise((resolve, reject) => {
  if (likePizza) resolve("피자를 주문합니다");
  else reject("피자를 주문하지 않습니다");
});

pizza
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));


  function fetchData(params) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success =;
        },2000);
    })
  }

  fetchData().then((result)=> {

  }).catch((error)=> {
    
  }).finally(()=>{
    console.log('데이터 요청 완료');
    
  })