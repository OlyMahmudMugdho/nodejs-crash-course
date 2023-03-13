const path = require('path');

//prints the file name
console.log(path.basename(__filename));

// prints the directory name
console.log(path.dirname(__filename));

// prints the extension name of the file
console.log(path.extname(__filename));

// prints the file name with file name
console.log(path.parse(__filename).base);

// prints the file name, directory name in a json format
console.log(path.parse(__filename));

// prints "directory_name/me.hello.mugdhoscript"
console.log(path.join(__dirname,"me","hello.mugdhoscript"));

// prints the path delimiter
const path_del = path.delimiter;
console.log(path_del);

// prints the parent directory

const parent_dir = path.dirname(__dirname);
console.log(parent_dir);

