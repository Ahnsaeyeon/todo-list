let p = new Promise((resolve, reject) => {
  console.log("first!");
  return resolve();
});

p.then((msg) => {
  console.log("second");
})
  .then((msg) => {
    console.log("third");
  })
  .catch((error) => {
    console.log("오류 발생 ==> " + error);
  });
