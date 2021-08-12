import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 11122233300);           // instanciando a class em uma const
const cliente2 = new Cliente("Alice", 22233344400);

const conta1 = new ContaCorrente(1001, cliente1);               // instanciando a class em uma const e atribuindo valores
const conta2 = new ContaCorrente(1001, cliente2);

conta1.depositar(500);                                          // chamando metodo depositar
//const valorSacado = conta1.sacar(50);                         // chamando metodo sacar

let valor = 200;
conta1.transferir(valor, conta2);

console.log(conta1, conta2);
console.log("n° de contas: ", ContaCorrente.numeroDeContas)