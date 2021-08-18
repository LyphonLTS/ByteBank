// Abstract Class, uma classe abstrata nunca é instanciada somente herdada
export class Conta {

    constructor(saldoInicial, cliente, agencia) {

        if (this.constructor == Conta) {
            throw new Error("Você não pode instanciar um objeto do tipo 'Conta' diretamente, pois esta é uma classe abstrata");
            // throw new Error(); permite a criação de erros que param a execução do código e diminuem a fragilidade do mesmo
        }

        this._saldo     = saldoInicial;
        this._cliente   = cliente;
        this._agencia   = agencia;  
    }                     

        set cliente(novoValor) {                     // acessor de escrita para manter o uso da variável privada dentro da class
            if(novoValor instanceof Cliente){       // verificação para que o valor seja escrito apenas quando houver instância, instanceof é um operador
                this._cliente = novoValor;
            }
        }

        get cliente() {                              // acessor de leitura para retornar o valor da variável privada para fora da class
            return this._cliente;
        }

    
        get saldo() {
            return this._saldo;
        }
    
    // Abstract method
    sacar(valor) {                                  // criação do metodo para sacar

        throw new Error("Você está chamando um método abstrato diretamente, por favor verifique se você está subescrevendo este método");
        
    }

    _sacar(valor, taxa) {                            // _ antes de um método o torna privado também
        const valorSacado = valor * taxa;

        if (this._saldo >= valorSacado) {

            this._saldo -= valorSacado;
            return valorSacado;

        }

        return 0;
    }

    depositar(valor) {                              // criação do metodo para depositar

        if (valor <= 0) return;                     // early return, verificar o que não se quer e retornar nada para encerrar
        // chaves são opcionais caso seja necessário incluir mais código dentro do if
        this._saldo += valor;

    }

    transferir(valor, conta) {                      // função transferir precisa de dois parametros, o valor e para qual conta

        const _valorSacado = this.sacar(valor);     // pega o valor utilizando a função sacar
        conta.depositar(_valorSacado);              // atribui o valor através da função depositar

    }
}