// promises are a thing since `late 1970s when it was first coined by Barbara Liskov and Liuba Shrira.
/* “The Promise object is used for deferred and asynchronous computations. 
  A Promise represents an operation that hasn’t completed yet, 
  but is expected in the future.” source: MDN Promise Reference */

/* contents 
  module 1: promises
  module 2: executor function and promises
  module 3: using .then and .catch
  module 4: using .then with callbacks
  module 5: promise chaining
*/

console.log("Start");

//-----------------
// $------promises------$ //
//-----------------
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this message was also delayed 2 seconds");
  }, 2000);
});

console.log("   module 1: " + promise); // it will only log the promise object and the value will be pending.

//-----------------
// $------executor function and promises------$ //
//-----------------
const executorFunction = (resolve, reject) => {
  setTimeout(() => {
    resolve("this message was delayed 2 seconds");
    // reject("failed");
  }, 2000);
};

const executorPromise = new Promise(executorFunction);
console.log("   module 2: " + executorPromise); // it will only log the promise object and the value will be pending.

//-------------------------
// $------Using and .then and .catch------$ //
//-------------------------
const methodPromise = new Promise(executorFunction)
  .then((message) => {
    // .then gives the aciton to perform after the promise is fulfilled
    console.log(message);
  })
  .catch((err) => {
    // .catch gives the action to perform after the promise in rejected i.e. an error occurs
    console.log(err);
  });

//-------------------------
// $------Using .then with callbacks------$ //
//-------------------------
const handleSuccess = (resolved) => {
  console.log(resolved);
};

const handleFailure = (rejected) => {
  console.log(rejected.message);
};

const userLoginPromise = new Promise((resolve, reject) => {
  const number = Math.random();
  if (number <= 0.5) {
    resolve("logged in");
  } else {
    reject(new Error("could not log in"));
  }
}).then(handleSuccess, handleFailure);
/* here .then can take in an additional paramenter(the second parameter) to handleRejection.
the callbacks can be anonymous functions as well.
first parameter is the will be invoked if the the promise is resolved
and the second parameter will be resolved if the promise is rejected */

console.log("   module 3: " + userLoginPromise);

//-------------------------
// $------Promise chaining------$ //
//-------------------------

// we can use nesting as well but since chaining is simpler and clearner, its prefferred over nesting

const getitems = () => {
  const items = [1, 2, 3, 4, 5];
  console.log(items);
  return items;
};
const getPostDetails = (item) => {
  console.log(item);
  return item;
};
const confirmTransaction = (item) => {
  console.log(`Are you sure you want to buy ${item}?`);
  const randomize = Math.random();
  return randomize < 0.4 ? "yes" : "no";
};
const makeTransaction = (userInput) => {
  console.log(userInput);
  if (userInput === "yes") {
    console.log("transaction successful");
  } else if (userInput === "no") {
    console.log("transaction Cancelled");
  }
};
const userSignInPromise = new Promise((resolve, reject) => {
  resolve("hello");
})
  .then((message) => getitems())
  .then((items) => getPostDetails(items[0]))
  .then((item) => confirmTransaction(item))
  .then((resolved) => makeTransaction(resolved));

console.log("End");
