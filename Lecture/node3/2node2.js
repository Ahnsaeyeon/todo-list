function a() {
  console.log("a");
}

function b(params) {
  setTimeout(() => {
    console.log("b");
    c();
  }, 2000);
  
}
function c(params) {
  console.log("c");
}

a();
b();
