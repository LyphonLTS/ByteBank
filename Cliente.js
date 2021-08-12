export class Cliente {                   // criando a class Cliente, que é um objeto, e seus métodos
    nome;                                // váriavel dentro de um objeto é atributo ou método
    _cpf;

        get cpf(){
            return this._cpf;
        }

    constructor(nome, cpf){             // função contructor é responsável por criar e relacionar os valores para dentro da class
        this.nome = nome;
        this._cpf = cpf;
    }
}