function renderUsers(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const userBtn = document.createElement("a");
    userBtn.setAttribute("type", "button");
    userBtn.classList.add("btn", "btn-info", "btn-lg");
    userBtn.setAttribute("data-bs-toggle", "popover");
    userBtn.setAttribute(
      "data-bs-title",
      "Дополнительная информация про человека:"
    );
    userBtn.setAttribute("data-bs-content", `${user.username}`);

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = user.name;

    userBtn.appendChild(title);
    cardBody.appendChild(userBtn);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getUsers(renderUsers);
});
