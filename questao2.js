let readlineSync = require('readline-sync');

function fibonacci(n) {
  let fib = [];
  switch (n) {
    case 1:
      return fib = [0];
    case 2:
      return fib = [0, 1];
    default:
      fib = [0, 1];
      for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
      }
      return fib;
      }
}

let m = parseInt(readlineSync.question("Informe um numero: "));
let sequencia = (fibonacci(m));
console.log(sequencia);
let contador = 0;

for(let j = 0; j < sequencia.length; j++){
    if (m == sequencia[j]) {
        contador = contador + 1;
        break
    }
}

if(contador == 1){
    console.log("O número informado encontra-se presente na sequencia de Fibonacci!");
}else{
    console.log("O número informado não encontra-se presente na sequencia de Fibonacci!");
}