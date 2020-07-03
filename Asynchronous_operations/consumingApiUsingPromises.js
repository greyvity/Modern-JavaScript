const {
  loginUser,
  getItems,
  getItemDetails,
  confirmTransaction,
  makeTransaction,
} = require("./api");

const names = ["Jeff", "Peter", "Harry", "Sormon"];

const randomNameIndex = Math.floor(Math.random() * names.length);
loginUser(names[randomNameIndex])
  .then((user) => getItems(user))
  .then((posts) => getItemDetails(posts))
  .then((item) => confirmTransaction(item.title))
  .then((userInput) => makeTransaction(userInput))
  .then((message) => console.log(message))
  .catch((err) => {
    console.log(err.message);
  });
