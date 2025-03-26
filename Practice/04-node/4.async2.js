function displayA() {
  console.log("A");
}
function displayB(displayC) {
  setTimeout(() => {
    console.log("B");
    displayC();
  }, 2000);
}
function displayC() {
  console.log("C");
}
displayA();
displayB(displayC);
