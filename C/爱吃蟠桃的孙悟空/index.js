const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
  const cnts = (await readline()).split(" ").map(Number);
  const h = parseInt(await readline());

  console.log(getResult(cnts, h));
})();

function getResult(cnts, h) {
  // 每个小时只能选一颗桃树，因此 h 小时最多只能选 h 棵树，如果桃树数量cnts.length > h，那么h小时肯定吃不完
  if (cnts.length > h) {
    return 0;
  }

  // 拥有最多桃子的那颗桃树上的桃子数量
  let max = Math.max(...cnts);

  // 如果桃树数量就是h棵，那么只能一小时吃完一颗树，才能保证h小时内吃完。此时，吃桃速度至少是max
  if (cnts.length == h) {
    return max;
  }

  // 如果只有1棵桃树，且这颗树上只有1个桃，那么吃桃速度可以是1
  let min = 1;

  // 当桃树数量少于h棵时，以max速度吃桃肯定可以吃完，但是不一定是最优解
  let ans = max;

  // 二分法
  while (min <= max) {
    // 取中间值作为吃桃速度进行尝试
    const mid = (min + max) >> 1;

    // 如果以mid速度，可以在h小时内吃完cnts所有桃，那么mid就是一个可能解
    if (check(mid, h, cnts)) {
      ans = mid;
      // 继续尝试更小的速度
      max = mid - 1;
    } else {
      // 以mid速度无法在h小时内吃完cnts所有桃，那么mid就取小了，下次应该取更大的吃桃速度
      min = mid + 1;
    }
  }

  return ans;
}

function check(speed, limit, cnts) {
  // 已花费时间
  let cost = 0;

  for (const cnt of cnts) {
    // 以speed速度吃完一颗桃树需要的时间，累加进cost
    cost += Math.ceil(cnt / speed);

    // 如果已花费时间超过了limit限制，那么说明无法以speed速度在limit时间内吃完所有桃树，此时可以直接返回false
    if (cost > limit) {
      return false;
    }
  }

  // 可以以speed速度，在limit小时内吃完所有cnts桃树
  return true;
}
