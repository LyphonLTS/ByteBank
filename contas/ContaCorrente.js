// Abssolute Class, uma classe concreta pode herdar e pode ser instanciada
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {          // extends é o parametro que permite uma class herdar funções de outra class para que se possa especializar um código
    static numeroDeContas  = 0;                     // static deternmina que o campo é do tipo estático

    constructor(cliente, agencia){
        super(0, cliente, agencia);                 // toda classe herdada precisa do construtor super para referenciar os valores na class pai
        ContaCorrente.numeroDeContas += 1;          // atribui o valor a class e não somente a instancia atual
    }

    // sobreescrevendo o comportamento de sacar
    sacar(valor) {

        let taxa = 1.1;
        return super._sacar(valor, taxa);           // chamar um método privado só é permitido se ele o estiver herdando da class pai, isso o torna protegido

    }
}