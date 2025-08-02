console.log("Hello");
console.log("Before set timeout");

setTimeout(() => {
  console.log("In set timeout");
}, 3000); // 3 seconds

console.log("After set timeout");
