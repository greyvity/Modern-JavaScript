// any function/s inside another function as parameters is/are callback functions.
// we can use callbacks to perform synchronous as well as asynchronous operations.

console.log("Start");

const userLogin = () => {
  setTimeout(() => {
    console.log("Logged in");
  }, 2000);
};

userLogin();

console.log("End");
