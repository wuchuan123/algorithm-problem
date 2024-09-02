const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
void (async function () {
  const [m, n] = (await readline()).split(" ").map(Number);
  const mArr = new Array(m + 1);
  for (let i = 1; i < mArr.length; i++) {
    mArr[i] = Number(await readline());
  }
  const nArr=[]
  const addArr=[]
  for (let i = 0; i < n; i++) {
    nArr[i] = (await readline()).split(' ').map(Number);
    let num=0
    nArr[i].forEach(it=>{
        num+= mArr[it]
    })
    addArr.push([num,i+1])
  }
  addArr.sort((a,b)=>a[0]!==b[0]?b[0]-a[0]:a[1]-b[1]).forEach(item=>console.log(item[1]))
})();
