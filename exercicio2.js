//Versão 1 da função que calcula orçamento
function calculaOrcamento(){

    var gastos = [3600, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var saldo = 0; 
    var statusSaldo =  'positivo';
    var i = 1;

    // faz a soma antes de ver a condição de salario >= totalGastos, portanto soma 3600 + 950 = 4550 e depois vê a condição e para 
    do{
        totalGastos += gastos[i];
        i++;
    } while(salario >= totalGastos && i<gastos.length)
    
    saldo = salario - totalGastos;

    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}

//Versão 2 da função que calcula orçamento
function calculaOrcamento2(){

    var gastos = [3600, 950, 620, 38];
    var totalGastos = gastos[0];
    var salario = 3500;
    var statusSaldo =  'positivo';
    var saldo = 0;
    var i = 1;

    // Antes de somar os gastos ele já ve que totalGastos(3600), é maior que o salário (3500) e não faz mais nenhuma soma 
    while(salario >= totalGastos && i<gastos.length){
        totalGastos += gastos[i];
        i++;
    }

    saldo = salario - totalGastos;
    if (saldo < 0 ){
        statusSaldo = 'negativo';
    } 
    console.log (`Seu saldo é ${statusSaldo} de ${saldo}. `);
}

calculaOrcamento();
calculaOrcamento2();
