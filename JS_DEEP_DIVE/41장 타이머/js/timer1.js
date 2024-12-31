setTimeout(() => console.log("I'm here!"), 5000);

setTimeout((name) => console.log(`It's ${name}.`), 1000, "Lee");

setTimeout(() => console.log("Hi, there!"));

const timerId = setTimeout(() => console.log("Do you hear me?"), 100);

clearTimeout(timerId);
