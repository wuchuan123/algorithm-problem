const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  const arr = line.split(" ");
  console.log(handle(arr));
});

const handle = (arr) => {
  let screen = [];
  let clip = [];
  let select = false;
  arr.forEach((item) => {
    switch (item) {
      case "1":
        if (select) screen = [];
        screen.push("a");
        select = false;
        break;
      case "2":
        if (select) {
          clip = [];
          clip.push(...screen);
        }
        break;
      case "3":
        if (select) {
          clip = [];
          clip.push(...screen);
          screen = [];
          select = false;
        }
        break;
      case "4":
        if (select) screen = [];
        screen.push(...clip);
        select = false;
        break;
      case "5":
        if (screen.length === 0) {
          clip = [];
        } else {
          select = true;
        }
        break;
    }
  });
  return screen.length;
};
