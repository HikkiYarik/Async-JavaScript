// получаем нашу форму
const form = document.forms["addUser"];
// Кнопка отправки через Send
postUsersBtn.addEventListener("click");
// создаём функцию "создать пост"
function createPost(body, callback) {
  e.preventDefault();
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open("POST", "https://jsonplaceholder.typicode.com/posts");
    request.addEventListener("load", () => {
      const response = JSON.parse(request.responseText);
      if (request.status >= 400) {
        reject(request.response);
      } else {
        resolve(request.response);
        addUsersBtn.classList.remove("disabled");
      }
      callback(response);
    });
    request.setRequestHeader("Content-type", "application/json; charset=UTF-8");
    request.send(JSON.stringify(body));
  });
}
// шаблон для поста в котором он будет строится
function newPostTemplate(post) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const userBtn = document.createElement("button");
  userBtn.setAttribute("type", "button");
  userBtn.classList.add("btn", "btn-info", "btn-lg");
  userBtn.setAttribute("data-bs-toggle", "popover");
  userBtn.setAttribute("data-bs-html", "true");
  userBtn.setAttribute(
    "data-bs-title",
    "Additional information about the user: "
  );
  userBtn.setAttribute(
    "data-bs-content",
    `Username: ${post.username}<br/>Email: ${post.email}<br/>Phone: ${post.phone}<br/> Website: ${post.website}`
  );
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.name;

  userBtn.appendChild(title);
  cardBody.appendChild(userBtn);
  card.appendChild(cardBody);
  return card;
}
// функция рендера поста
function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = newPostTemplate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}
// кнопка добавления поста в html
addUsersBtn.addEventListener("click", postNewUser);
// Запостить юзера
function postNewUser(e) {
  e.preventDefault();
  const name = form.elements.namedItem("name").value;
  const username = form.elements.namedItem("username").value;
  const email = form.elements.namedItem("email").value;
  const phone = form.elements.namedItem("phone").value;
  const website = form.elements.namedItem("website").value;

  const newPost = {
    name: name,
    username: username,
    email: email,
    phone: phone,
    website: website,
    user_id: `id_${Math.random() * Math.random()}`,
  };
  createPost(newPost, (response) => {
    console.log(response);
    const card = newPostTemplate(response);
    container.insertAdjacentElement("afterbegin", card);
    initPopovers();
  });
}
// функция проверки ответа сервера

function checkedPost() {}
