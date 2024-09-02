const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
/**
 * 平均数=总数/份数
 * 总数=平均数*份数
 *  */ 
void (async function () {
  const minAverageLost = parseInt(await readline());
  const nums = (await readline()).split(" ").map(Number);

  const n = nums.length;

  const preSum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }
  console.log(preSum,'preSum')
  let ans = [];
  let maxLen = 0;
// [0,0]
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      // sum 是 区间 [i, j-1] 的和
      let sum = preSum[j] - preSum[i];
      
      let len = j - i;
      let lost = len * minAverageLost;
      console.log(sum,'sum')
      console.log(i,'i')
      console.log(j,'j')
      console.log(len,'len')
      console.log(lost,'lost')
      if (sum <= lost) {
        if (len >= maxLen) {
          if (len > maxLen) {
            ans = [];
          }
          ans.push([i, j - 1]);
          maxLen = len;
        }
      }
    }
  }
  console.log(ans,'ans')
  if (ans.length == 0) {
    console.log("NULL");
  } else {
    console.log(
      ans
        .sort((a, b) => a[0] - b[0])
        .map((arr) => arr.join("-"))
        .join(" ")
    );
  }
})();