import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas  = 0;                     // static deternmina que o campo é do tipo estático
    agencia;
    _cliente;                                       // toda váriavel instanciada com _ é uma váriavel privada por convenção
    _saldo          = 0;

        set cliente(novoValor){                     // acessor de escrita para manter o uso da variável privada dentro da class
            if(novoValor instanceof Cliente){       // verificação para que o valor seja apenas quando houver instância, instanceof é um operador
                this._cliente = novoValor;
            }
        }

        get cliente(){                              // acessor de leitura para retornar o valor da variável privada para fora da class
            return this._cliente;
        }

    
        get saldo(){
            return this._saldo;
        }

    constructor(agencia, cliente){
        this.agencia = agencia;                     // this atribui o valor apenas a instancia atual
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;          // atribui o valor a class e não somente a instancia atual
    }

    sacar(valor) {                                  // criação do metodo para sacar

        if (this._saldo >= valor) {

            this._saldo -= valor;
            return valor;

        }

    }

    depositar(valor) {                              // criação do metodo para depositar

        if (valor <= 0) return;                     // early return, verificar o que não se quer e retornar nada para encerrar
        // chaves são opcionais caso seja necessário incluir mais código dentro do if
        this._saldo += valor;

    }

    transferir(valor, conta) {                      // função transferir precisa de dois parametros, o valor e para qual conta

        const _valorSacado = this.sacar(valor);     // pega o valor utilizando a função sacar dentro da mesma class
        conta.depositar(_valorSacado);              // atribui o valor através da função depositar dentro da mesma class

    }
}