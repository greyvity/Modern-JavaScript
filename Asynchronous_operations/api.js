// a simple api using Promises that we will consume using promises in promises.js and using async..await in async_await.js

//----------dummy data----------//
const users = [
  {
    name: "Jeff",
    status: "Online",
    posts: [
      { title: "My vlog", description: "First vlog" },
      { title: "poem", description: "life: Lorem ipsum dolor sit amet." },
      { title: "bored", description: "I AM BORED" },
      { title: "heartly endeavors", description: "song: my heart is a melody" },
    ],
  },
  {
    name: "Harry",
    status: "Offline",
    posts: [
      { title: "My vlog", description: "First vlog" },
      { title: "My second vlog", description: "second vlog" },
      { title: "exercise", description: "its important: very very important" },
      { title: "poem", description: "sunlight is cold and blue" },
    ],
  },
  {
    name: "Serry",
    status: "Offline",
    posts: [
      { title: "My vlog", description: "First vlog" },
      { title: "melody", description: "there are a billion songs man" },
      { title: "my password", description: "************" },
      { title: "email", description: "hafticPanda@gesmail.com" },
    ],
  },
];

//----------helper functions(promises)----------//
const loginUser = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.name === name);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("could not log in"));
      }
    }, 1000);
  });
};

const getItems = (user) => {
  return new Promise((resolve, reject) => {
    resolve(user.posts);
  });
};

const getItemDetails = (items) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(items.length);
      const randomNumber = Math.floor(Math.random() * items.length);
      console.log(randomNumber);
      resolve(items[randomNumber]);
    }, 1000);
  });
};

const confirmTransaction = (title) => {
  return new Promise((resolve, reject) => {
    const randomize = Math.random();
    console.log(`Are you sure you want to download ${title}?`);
    resolve(randomize < 0.4 ? "yes" : "no");
  });
};

const makeTransaction = (userInput) => {
  return new Promise((resolve, reject) => {
    console.log(userInput);
    if (userInput === "yes") {
      console.log("download successful");
    } else if (userInput === "no") {
      console.log("action Cancelled");
    }
  });
};

//-------exporting--------//
module.exports = {
  loginUser,
  getItems,
  getItemDetails,
  confirmTransaction,
  makeTransaction,
};
