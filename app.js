alert("Boas Vindas ao jogo do número secreto"); 
let numeroMaximo = 5000;
// para o JavaScript se coloca ; para determinar que o comando se encerrou. 
// para guardar algum tipo de informação, usamos as variáveis
let numeroSecreto  = parseInt(Math.random() * numeroMaximo + 1);
console.log ("O número secreto é", numeroSecreto);
let chute;
let Tentativas = 1;
// código omitido

// enquanto chute não for igual ao n.s.
while (chute != numeroSecreto) {
   chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
   // se chute for igual ao número secreto
   if (chute == numeroSecreto) {
      break;
   } else {
       if (chute > numeroSecreto) {
           alert(`O número secreto é menor que ${chute}`);
       } else {
           alert(`O número secreto é maior que ${chute}`);
       }
      // Tentativas = Tentativas + 1;
       Tentativas++;

      }
}
 let palavraTentativa = Tentativas > 1 ? 'tentativas' : 'tentativa';
 alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${Tentativas} ${palavraTentativa}.`);
//if (Tentativas > 1) {
 //  alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${Tentativas} tentativas`);
//} else {
  // alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${Tentativas} tentativa`);
//}
