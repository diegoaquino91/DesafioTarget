let readlineSync = require('readline-sync');

let m = readlineSync.question("Informe uma Palavra: ");

console.log(m);
function reveter(n) {
    var newString = "";
    for (var i = n.length - 1; i >= 0; i--) {
        newString += n[i];
    }
    console.log(newString);
    return newString;
}

reveter(m);