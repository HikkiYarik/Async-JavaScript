const btn = document.querySelector(".get-users-btn");
const container = document.querySelector(".container");

function initPopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
}

function sendRequest(callback) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("GET", "https://jsonplaceholder.typicode.com/users");
    request.addEventListener("load", () => {
      const response = JSON.parse(request.responseText);
      if (request.status >= 400) {
        reject(request.response);
      } else {
        resolve(request.response);
      }
      callback(response);
    });
    request.addEventListener("error", () => {
      reject(request.response);
    });
    request.send();
  });
}
// sendRequest("GET", "https://jsonplaceholder.typicode.com/users")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// sendRequest("POST", "https://jsonplaceholder.typicode.com/users", body)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
