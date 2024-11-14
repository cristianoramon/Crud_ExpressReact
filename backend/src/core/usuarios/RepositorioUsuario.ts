import Senha from "../shared/Senha";
import Usuario from "./Usuario";

export default class RepositorioUsuario{

    usuarios: Usuario[] = [ new Usuario("mari@gmail","1234567"),
                            new Usuario("pedro@gmail.com","343434"), 
                          ];
    encontrarIndice(email:string){
        console.log(this.usuarios[0].email);
        const indice = this.usuarios.findIndex((u)=> u.email === email  );
        console.log(indice);
        return indice;
    }

    usuarioExiste( email:string ){
        return this.encontrarIndice(email) >= 0;
    }

    loginCorreto(email:string,senha:string){
        const i = this.encontrarIndice(email);
        // console.log(i);
        const senhaCorreta  = Senha.compara(senha,this.usuarios[i]?.senha);
        return true;
    }
}