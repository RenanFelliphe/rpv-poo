import { str_repeat } from "../../utils/str_repeat.ts";
import { Livro } from './Livro.ts'

export class Biblioteca {
    public livros: Livro[]

    constructor(livros: Livro[]) {
        this.livros = livros
    }

    public adicionarLivro(livroAdicionado: Livro) {
        console.log(str_repeat("=", 100))
        console.log("=== O livro", livroAdicionado.titulo, "do autor(a)", livroAdicionado.autor, "foi adicionado com sucesso!")
        console.log(str_repeat("=", 100))
    }

    public listar() {
        console.log(str_repeat("=", 100))
        console.log("=== Biblioteca ===")
        console.log("=== Total de Livros", this.livros.length)
        console.log(str_repeat("=", 100))
        console.log("=== Todos os Livros === ")
        console.log(str_repeat("=", 100))
        this.livros.map((livro, index) => {
            console.log("=== Livro", (index + 1), "->", livro.titulo, "de", livro.autor)
        })
        console.log(str_repeat("=", 100))

    }
}

