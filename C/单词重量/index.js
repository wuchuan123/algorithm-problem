const rl = require("readline").createInterface({ input: process.stdin });
rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log(
    (arr.reduce((pre, acc) => {
      return acc.length + pre;
    }, 0) / arr.length).toFixed(2)
  );
});
