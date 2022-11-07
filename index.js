// const name = "thapa";
// console.log(name);

// fs.writeFileSync('read,txt', "welcome to my channel");
// fs.writeFileSync('read,txt', "welcome to my youtube channel");
// fs.appendFileSync('read,txt',"How are you?")
// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data);
// const org_data = buf_data.toString();
// console.log(org_data);
// fs.renameSync('read.txt', 'reader.txt');

// CHALLENGE NO 1
const fs = require('fs');
// directory path
// const dir = './junaid';

// create new directory
// fs.mkdir(dir, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("Directory is created.");
// });
// fs.writeFileSync('./junaid/bio.txt', "Node.js Practice");
// fs.appendFileSync('./junaid/bio.txt', "Youtube Tutorials are amazing");
// fs.renameSync('./junaid/detail.txt', 'junaid.txt');
// const data = fs.readFileSync("junaid/junaid.txt", "UTF-8" );
// console.log(data);
fs.unlinkSync("junaid/junaid.txt")
fs.rmdirSync("junaid");