// function getPosts(id) {
//   return new Promise((resolve, reject) => {
//     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//       .then((response) => response.json())
//       .then((post) => resolve(post))
//       .catch((err) => reject(err));
//   });
// }

// getPosts(1).then((post) => console.log(post));
// function getPost(id) {
//   const [userType, userId] = id.split("-");
//   return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//     (response) => response.json()
//   );
// }

// getPost("user-1")
//   .then((post) => console.log(post))
//   .catch((err) => console.log(err));

// function getPost(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split("-");
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//       (response) => response.json()
//     );
//   });
// }

async function getPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}
// getPost(1)
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

async function getAll() {
  const [res1, res2] = await Promise.all([getPost(1), getPost(2)]);
  console.log(res1, res2);
}
getAll();
