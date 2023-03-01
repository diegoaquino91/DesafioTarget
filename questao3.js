var fs = require("fs");
fs.readFile("./dados.json" , "utf8", function(err, data){
  if(err){
    return console.log("Erro ao ler arquivo");
  }
  
  var jsonData = JSON.parse(data); 
 
  let menorValor;
  let maiorValor;
  let soma = 0;
  let qtdDias = 0;
  jsonData.forEach(function(dados, i) {
    if (i == 0){
      menorValor = dados.valor
      maiorValor = dados.valor
    }
    
    if (i > 0 && menorValor > dados.valor)  {
        menorValor =  dados.valor
    };

    if (i > 0 && maiorValor < dados.valor)  {
        maiorValor = dados.valor
    };
    qtdDias = qtdDias + 1;
    soma = soma + dados.valor;
    });

    let mediaMensal = 0;
    mediaMensal = soma / qtdDias;
    console.log('[Menor Valor] = ', menorValor);
    console.log('[Maior Valor] = ', maiorValor);
    console.log('[Media Mensal] = ', parseFloat(mediaMensal.toFixed(2)));

    let numeroDias = 0;
    jsonData.forEach(function(dados) {
      if (dados.valor > mediaMensal){
        numeroDias = numeroDias + 1;
        }
    });
    console.log('[QTD-Dias] = ', numeroDias);
});