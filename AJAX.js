//кнопка добавления пользователей method GET
const getUsersBtn = document.querySelector(".get-users-btn");
//кнопка отправки пользователя из формы на сервер method POST
const postUsersBtn = document.querySelector(".btn-sendUser");
//кнопка добавления пользователя после положительного ответа сервера
const addUsersBtn = document.querySelector(".btn-addUser");
//контейнер для пользователей
const container = document.querySelector(".users-container");
//адрес с которого берём юзеров
const requestURL = "https://jsonplaceholder.typicode.com/users";
//функция для всплывающих окон
function initPopovers() {
  const popoverTriggerList = document.querySelectorAll(
    '[data-bs-toggle="popover"]'
  );
  const popoverList = [...popoverTriggerList].map(
    (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
  );
}
//функция sendRequest она же послатьЗапрос или иначе getUsers - получить юзеров;
//аргументы колбек(наш renderUsers), метод(GET), url(адрес, requestURL)
function sendRequest(callback, method, url) {
  //вернуть новый промис
  return new Promise((resolve, reject) => {
    // создать новый xhr
    const request = new XMLHttpRequest();
    // получить url методом GET
    request.open(method, url);
    // request.setRequestHeader("Content-Type", "application/json");
    // вешаем обработчик событий "при загрузке"
    request.addEventListener("load", () => {
      // где парсим request в json в переменную response
      const response = JSON.parse(request.responseText);
      // и делаем проверку статуса ответа от сервера при load-загрузке
      // если статус request 400 и более (что значит неудачно) отклоняем вызов request c помощью reject
      // в другом случае (если успешно) одобряем вызов вызов request c помощью resolve

      if (request.status >= 400) {
        reject(request.response);
      } else {
        resolve(request.response);
      }
      // передаём в callback он же renderUsers(response) наш response
      callback(response);
    });
    // send в конце обязательно не забываем. Принять данные с помощью get мало, нужно их ещё потом и send
    request.send();
  });
}
