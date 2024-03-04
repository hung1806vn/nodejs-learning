console.log("starting");

setTimeout(() => {
    console.log("first callback");
}, 2000)

setTimeout(() => {
    console.log("second callback");
}, 0)

console.log("finish");