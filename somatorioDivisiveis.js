function somatorioDivisiveis(numero) {
    let soma = 0;
  
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        soma += i;
      }
    }
  
    return soma;
  }
  
  // Exemplo de uso
  const resultado = somatorioDivisiveis(10);
  console.log(resultado); // Colocando o numero 10, imprime 23, colocando o numero 11 imprime o 33