const rl = require("readline").createInterface({input: process.stdin});
var iter= rl[Symbol.asyncIterator]()
const readline=async ()=>(await iter.next()).value
void(async function(){
  
})()
const lines = [];
rl.on("line", (line) => {
  lines.push(line);
  console.log(lines,'lines')
  if (lines.length === 3) {
    const num = +lines[0];
    const heights = lines[1].split(" ").map(Number);
    const weights = lines[2].split(" ").map(Number);
    console.log(handle(num, heights, weights));
    lines.length = 0;
  }
});
const handle = (num, heights, weights) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const obj = {};
    obj.index = i + 1;
    obj.height = heights[i];
    obj.weight = weights[i];
    arr.push(obj);
  }
  return arr
    .sort((a, b) =>
      a.height !== b.height ? a.height - b.height : a.weight - b.weight
    )
    .map((it) => it.index)
    .join(" ");
};
