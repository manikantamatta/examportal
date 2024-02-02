console.log(1);
process.nextTick(() => console.log(4));
setImmediate(() => console.log(2));
setTimeout(()=> console.log(3), 0);

console.log(5);