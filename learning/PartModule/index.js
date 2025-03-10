const path = require("node:path");

console.log(1, __filename);
console.log(2, __dirname);

console.log(3, path.basename(__filename));
console.log(4, path.basename(__dirname));

console.log(5, path.extname(__filename));
console.log(6, path.extname(__dirname));

console.log(7, path.parse(__filename));
console.log(8, path.format(path.parse(__filename)));

console.log(9, path.isAbsolute(__filename));
console.log(10, path.isAbsolute("./data.json"));

console.log(11, path.join("folder1", "folder2", "index.html"));
console.log(12, path.join("/folder1", "folder2", "index.html"));
console.log(13, path.join("/folder1", "//folder2", "index.html"));
console.log(14, path.join("/folder1","//folder2", "../index.htm"));
console.log(15, path.join(__dirname, "data.json"));

console.log(16, path.resolve("folder1", "folder2", "index.html"));
console.log(17, path.resolve("/folder1", "folder2", "index.html"));
console.log(18, path.resolve("/folder1", "//folder2", "index.html"));
console.log(19, path.resolve("/folder1", "//folder2", "../index.html"));
console.log(20, path.resolve(__dirname, "data.json"));