/*
    Ser autenticável significa ter o método autenticar
    Um usuário é autenticável
    ducky type - se tem o que eu quero será usado
*/

export class SistemaAutenticacao {
    
    static login(usuario, senha) {                                 // operador static pode tanto definir uma váriavel quanto um método
        
        if(SistemaAutenticacao.validar(usuario)) {

            return usuario.autenticar(senha);

        }

        return false;
    
    }

    static validar(usuario) {

        return "autenticar" in usuario && usuario.autenticar instanceof Function;
        // operador in compara uma chave ao valor

    }

}