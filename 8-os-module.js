const path = require("path");

console.log(path.sep);

const filepath = path.join("/.content", "subcontent", "test.txt");

console.log(filepath);
const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname, "/.content", "subcontent", "test.txt");
console.log(absolute);

const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//systems update time
console.log(`Check time in ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);