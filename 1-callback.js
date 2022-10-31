// function B(callback) {
//     setTimeout(function () {
//         callback({rain: "phayu"})
//     })
// }

// function A(result) {
//     console.log(result)
// }

// B(A)

// var fs = require("fs");
// var data = fs.readFileSync('1.txt');
// console.log(data.toString());
// console.log("over");

const fs = require("fs");
fs.readFile("./1.txt", "utf-8", function(err,result){
    console.log(result)
})