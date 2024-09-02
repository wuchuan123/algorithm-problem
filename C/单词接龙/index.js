/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
let k, n;
rl.on("line", (line) => {
  lines.push(line);

  if (lines.length === 2) {
    [k, n] = lines.map(Number);
  }

  if (n && lines.length === n + 2) {
    lines.shift();
    lines.shift();

    console.log(getResult(lines, k));

    lines.length = 0;
  }
});

function getResult(words, k) {
  const chain = words.splice(k, 1);
  console.log(chain,'chain')

  const prefix = {};

  for (let word of words) {
    const w = word[0];
    prefix[w] ? prefix[w].push(word) : (prefix[w] = [word]);
  }

  for (let key in prefix) {
    prefix[key].sort((a, b) =>
      a.length != b.length ? b.length - a.length : a > b ? 1 : -1
    );
  }

  while (true) {
    let tail = chain.at(-1).at(-1);

    if (prefix[tail] && prefix[tail].length > 0) {
      chain.push(prefix[tail].shift());
    } else {
      break;
    }
  }

  return chain.join("");
}