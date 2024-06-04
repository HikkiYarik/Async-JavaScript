function renderUsers(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((user) => {
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
      `Username: ${user.username}<br/>Email: ${user.email}<br/>Phone: ${user.phone}<br/> Website: ${user.website}`
    );

    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = user.name;

    userBtn.appendChild(title);
    cardBody.appendChild(userBtn);
    card.appendChild(cardBody);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
  initPopovers();
}

btn.addEventListener("click", (e) => {
  getUsers(renderUsers);
});
