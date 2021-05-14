
 
//1
let num = 0
while (num < 500) {
  num++;
  if (num >= 100 && num <= 200) {
    console.log(`${num} - Você digitou um número entre 100 e 200`)
  }else{
    console.log(`${num} - Você digitou um número fora da faixa`)
  }

} 


//2
let num2 = 0
while (num2 < 100) {
  num2++;
  if (num2 % 2 === 0) {
    console.log(`${num2} Número par`)
  }else {
    console.log(`${num2} Número impar`)
    
  }  
}


//3



//4
var cont
valor =  prompt('Digite um número')
for (cont = 0; cont < 20; cont++){
  conta = valor * cont
  console.log(conta)
}



// 5
do {
var opcao = 0
  console.log('menu')
  console.log('1. Adicionar contato')
  console.log('2. Buscar contato')
  console.log('3. Remover contato')
  console.log('4. editar contato')
  console.log('5. sair')
  opcao = prompt('Escolha uma opção:')
}while(opcao != 5 );  



//6

cont = 0
while (cont < 10) {
  cont++;
  let numero = prompt('Digite um número')
  conta = Math.sqrt(numero)
  console.log(`Raiz quadrade de ${numero} = ${conta}`)
}


//7
n = 0
while (n < 100) {
  n++;
  n2 = prompt('Digite um número')
  if (n2 % 3 === 0) {
    console.log('múltiplo de 3')
  }else {
    console.log('Não é múltiplo de 3')
  }
}



