import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(saldoInicial, cliente, agencia){
        super(saldoInicial, cliente, agencia);
        // super() deve conter os parametros iguais os da classe pai ou receber valores fixos e o mesmo se repete onde a classe é instanciada
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa);
    }
}