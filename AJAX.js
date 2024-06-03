const btn = document.querySelector(".get-users-btn");
const container = document.querySelector(".container");

function getUsers(callback) {
  const request = new XMLHttpRequest();
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.addEventListener("load", () => {
    const response = JSON.parse(request.responseText);
    callback(response);
  });
  request.addEventListener("error", () => {
    console.log("error");
  });
  request.send();
}

getUsers((response) => {
  console.log(response);
});
