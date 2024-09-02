/* JavaScript Node ACM模式 控制台输入获取 */
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  console.log(getResult(parseInt(line)));
});

function getResult(n) {
  const list = new CycleLinkedList();
  for (let i = 1; i <= n; i++) list.append(i);

  let num = 1;
  let cur = list.head;

  while (list.size > 1) {
    if (num == 3) {
      num = 1;
      cur = list.remove(cur);
    } else {
      num++;
      cur = cur.next;
    }
  }

  return cur.val;
}

class CycleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(val) {
    const node = new Node(val);

    if (this.size > 0) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.head.prev = this.tail;
    this.tail.next = this.head;
    this.size++;
  }

  remove(cur) {
    const pre = cur.prev;
    const nxt = cur.next;

    pre.next = nxt;
    nxt.prev = pre;

    cur.next = cur.prev = null;

    if (this.head === cur) {
      this.head = nxt;
    }

    if (this.tail === cur) {
      this.tail = pre;
    }

    this.size--;

    return nxt;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}
