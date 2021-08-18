export class Cliente {                  // criando a classe Cliente, que é um objeto, e seus métodos
                                        // váriavel dentro de um objeto é atributo ou método
        get cpf() {

            return this._cpf;

        }

    constructor(nome, cpf, senha) {             // função contructor é responsável por criar e relacionar os valores para dentro da classe
        
        this.nome = nome;                       // como boa prática as váriaveis são declaradas e inicilizadas dentro de um contructor
        this._cpf = cpf;

        this._senha = senha;

    }

    autenticar(senha){

        return senha == this._senha;

    }

}