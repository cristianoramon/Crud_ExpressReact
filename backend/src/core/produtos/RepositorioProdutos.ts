import Produto from "./Produto";

export default class RepositorioProdutos { 

    itens : Produto[] = [ new Produto("Apagador", 1.99), 
                           new Produto("Garfo", 4.99), 
                           new Produto("Colher", 4.99) ]; 
    obterTodos() {
            return this.itens;
    }
    
    novo(nome: string, preco: number) {
        const novoProduto = new Produto(nome, preco);
        this.itens.push(novoProduto);
    }

    obterCodigo ( codigo : string ) {    
        console.log(codigo);
        const produto = this.itens.find( (produto) =>   produto.codigo === codigo);
        return produto;
    }
    alterarPorCodigo(codigo: string,nome: string, preco: number) {

        const index = this.itens.findIndex((produto) => produto.codigo === codigo);

        if (index >= 0 && index < this.itens.length) {
            if (nome){
                this.itens[index].nome = nome;            
            }
            
            if (preco){
            
                this.itens[index].preco = preco;            
            }
            
        }     
    }
    deletarPorCodigo(codigo:string){

        const novosProduto = this.itens.filter((p)  => p.codigo !== codigo);
        this.itens= [...    novosProduto];

    }  
         
}