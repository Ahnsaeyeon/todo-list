// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

let data = [];

async function getPosts() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("끝");
  }
}
getPosts();
