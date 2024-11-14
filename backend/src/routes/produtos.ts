import { Router } from "express";
import RepositorioProdutos from "../core/produtos/RepositorioProdutos";

const router = Router();
const repo = new RepositorioProdutos();


router.get("/", (req, res) => {
    const produtos = repo.obterTodos();
    res.status(200).send(produtos); 
})

router.post("/", (req, res) => {
        const{nome, preco} = req.body;
        repo.novo(nome, preco);
        res.status(201).send();
})

router.get("/:codigo", (req, res) => {

    const codigo  = req.params.codigo;
    const produto = repo.obterCodigo(codigo);

    if ( produto ) {
        res.status(200).send(produto);  
    } else {
        res.status(204).send();  
    }
    
})

router.put("/:codigo", (req, res) => {
    
    const codigo = req.params.codigo;
    const {nome,preco} = req.body;
    repo.alterarPorCodigo(  codigo,nome,preco);    
    res.status(200).send();


});

router.delete("/:codigo", (req,res)=>{
    const codigo = req.params.codigo;
    repo.deletarPorCodigo(codigo);
    res.status(200).send();

})
export default router;