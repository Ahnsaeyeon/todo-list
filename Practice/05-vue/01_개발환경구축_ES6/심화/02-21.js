const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num = Math.random(); //0~1사이의 난수 발생
    if (num >= 0.8) {
      return reject(num);
    }
    return resolve(num);
  }, 2000);
});

p.then((result) => {
  console.log("처리 결과 : ", result);
});
p.catch((error) => {
  console.log("오류 : ", error);
});
console.log("## Promise 객체 생성!");
