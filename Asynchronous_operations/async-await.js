const {
  loginUser,
  getItems,
  getItemDetails,
  confirmTransaction,
  makeTransaction,
} = require("./api");

const names = ["Jeff", "Peter", "Harry", "Sormon"];

const fetching = async () => {
  try {
    const randomNameIndex = Math.floor(Math.random() * names.length);
    const user = await loginUser(names[randomNameIndex]);
    if (user) {
      const posts = await getItems(user);
      const item = await getItemDetails(posts);
      const userInput = await confirmTransaction(item.title);
      const message = await makeTransaction(userInput);
      console.log(message);
    }
  } catch (err) {
    console.log(err.message);
  }
};

fetching();
