// https://blog.csdn.net/GXY1551705593/article/details/127253563
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    // Write your code here
    while(line = await readline()){
        if(line !== '0' ) {
            console.log(Math.floor(parseInt(line)/2))
        }
    }
}()
