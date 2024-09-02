/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  let count = 0;
  const stack = [];
  for (let c of line) {
    if (c != "(" && c != ")") continue;
    console.log(c,'c')
    if (stack.length && c === ")") {
      if (stack.at(-1) === "(") {
        
        stack.pop();
        count++;
        continue;
      } else {
        return console.log(-1);
      }
    }
    stack.push(c);
  }
  if (stack.length) return console.log(-1);
  return console.log(count);
});
