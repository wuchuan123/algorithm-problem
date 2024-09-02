const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
console.log(readline,'readline')

void (async function () {
  const [n, m] = (await readline()).split(" ").map(Number);
  console.log(n,m,'n')
  const features = new Array(n + 1);
  for (let i = 1; i <= n; i++) {
    features[i] = parseInt(await readline());
    console.log(features[i],'features[i]')
    console.log(features,'features')
  }

  const cases = [];
  for (let i = 1; i <= m; i++) {
    const priority = (await readline())
      .split(" ")
      .map((id) => features[id - 0]) // id-0是为了将字符串id转为数值id
      .reduce((a, b) => a + b);
        console.log(priority,'priority')
    cases.push([priority, i]);
    console.log(cases,'cases')
  }

  cases
    .sort((a, b) => (a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]))
    .forEach(([_, id]) => console.log(id)); // forEach入参使用了数组解构语法
})();
