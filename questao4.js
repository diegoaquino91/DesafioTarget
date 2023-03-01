let faturamento = [{"cidade": 'SP', "valor": 67836.43}, {"cidade": 'RJ', "valor": 36678.66}, {"cidade": 'MG', "valor": 29229.88},
{"cidade": 'ES', "valor": 27165.48}, {"cidade": 'OUTROS', "valor": 19849.53}]

let faturamentoTotal = 0;
faturamento.forEach(function(dado) {
    faturamentoTotal = faturamentoTotal + dado.valor;
    
});

let percentual = 0;
let percentutalEstado = [];
faturamento.forEach(function(dado) {
    percentual = (dado.valor * 100) / faturamentoTotal;
    let valorPercent = percentual.toFixed(2)
    percentutalEstado.push({"Cidade": dado.cidade, "Percentual de Representação %": parseFloat(valorPercent)});
});

console.log("Faturamento Total: ", faturamentoTotal);
console.log(percentutalEstado);

