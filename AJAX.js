const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

function getPosts(callback) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/posts");
  request.addEventListener("load", () => {
    const response = JSON.parse(request.responseText);
    callback(response);
  });
  request.addEventListener("error", () => {
    console.log("error");
  });
  request.send();
}

getPosts((response) => {
  console.log(response);
});
