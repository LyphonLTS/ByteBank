import { Cliente } from "./Cliente.js";
//import { ContaCorrente } from "./contas/ContaCorrente.js";
//import { ContaPoupanca } from "./contas/ContaPoupanca.js";
//import { ContaSalario } from "./contas/ContaSalario.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//const cliente1 = new Cliente("Ricardo", 11122233300);           // instanciando a class em uma const
//const cliente2 = new Cliente("Alice", 22233344400);
const cliente3 = new Cliente("Italo", 33344455500, "123456");
const diretor = new Diretor("Rodrigo", 44455566600, 10000);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Amanda", 55566677700, 5000);
gerente.cadastrarSenha("123456");

//const conta1 = new ContaCorrente(1001, cliente1);               // instanciando a class em uma const e atribuindo valores
//const conta2 = new ContaCorrente(1001, cliente2);
//const conta3 = new ContaPoupanca(50, cliente1, 1001);
//const conta4 = new ContaSalario(0, cliente3, 1001);

//conta1.depositar(500);                                          // chamando metodo depositar
//const valorSacado = conta1.sacar(50);                         // chamando metodo sacar

const logado1 = SistemaAutenticacao.login(diretor, "123456");
const logado2 = SistemaAutenticacao.login(gerente, "123456");
const logado3 = SistemaAutenticacao.login(cliente3, "123456");

console.log(logado1, logado2, logado3);