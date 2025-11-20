let fs = require("fs");

let readStream = fs.createReadStream("./docs/blog3.txt", { encoding: "utf8" });
let writeStream = fs.createWriteStream("./docs/blog4.txt");

// readStream.on("data", (chunk) => {
//     console.log("----- NEW CHUNK -----");
//     console.log(chunk);
//     writeStream.write("\nNEW CHUNK\n");
//     writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
