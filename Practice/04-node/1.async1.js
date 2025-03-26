function pizza(likePizza) {
  const promise = new Promise((resolve, reject) => {
    const e = new Error("피자를 주문하지 않습니다.");
    if (!likePizza) {
      return reject(e);
    }
    let result = "피자를 주문했습니다";
    resolve(result);
  });
  return promise;
}

pizza(true)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
pizza(false)
  .then((result) => console.log(result))
  .catch((err) => console.log(err.message));
