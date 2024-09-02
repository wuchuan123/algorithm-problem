/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const lines = [];
rl.on("line", (line) => {
  lines.push(line);

  if (lines.length === 5) {
    const arr = lines.map((line) => line.split(" "));
    console.log(getResult(arr));
    lines.length = 0;
  }
});

function getResult(arr) {
  const nums = [];
  const colors = [];

  for (let [num, color] of arr) {
    nums.push(num);
    colors.push(color);
  }

  nums.sort((a, b) => cards(a) - cards(b));

  if (isShunzi(nums) && isTonghua(colors)) return 1;
  else if (isSitiao(nums)) return 2;
  else if (isHulu(nums)) return 3;
  else if (isTonghua(colors)) return 4;
  else if (isShunzi(nums)) return 5;
  else if (isSantiao(nums)) return 6;
  else return 0;
}

function cards(num) {
  switch (num) {
    case "J":
      return 11;
    case "Q":
      return 12;
    case "K":
      return 13;
    case "A":
      return 14;
    default:
      return parseInt(num);
  }
}

// 顺子
function isShunzi(nums) {
  if (nums.join("") === "2345A") return true;

  for (let i = 1; i < nums.length; i++) {
    const num1 = cards(nums[i - 1]);
    const num2 = cards(nums[i]);

    if (num1 + 1 !== num2) return false;
  }
  return true;
}

// 同花
function isTonghua(colors) {
  // 同花牌的所有花色都一样
  return new Set(colors).size === 1;
}

// 四条
function isSitiao(nums) {
  // 四条由两部分组成，一个部分四张相同牌，一个部分一张牌
  return countNums(nums, 2, 4);
}

// 葫芦
function isHulu(nums) {
  // 葫芦由两部分组成，一个部分三张牌相同，一个部分两张牌相同
  return countNums(nums, 2, 3);
}

// 三条
function isSantiao(nums) {
  // 三条由三部分组成，第一个部分由三张相同牌组成，第二个，第三个部分分别是两种不同的牌
  return countNums(nums, 3, 3);
}

function countNums(nums, partCount, maxSameNumCount) {
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] ?? 0) + 1;
  }

  if (Object.keys(count).size != partCount) return false;

  return Object.values(count).includes(maxSameNumCount);
}