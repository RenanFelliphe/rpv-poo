import { str_repeat } from '../../utils/str_repeat.ts'

export class Pessoa {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    public apresentar(): void {
        console.log(str_repeat("=", 50))
        console.log("=== Olá, meu nome é", this.nome, "e tenho", this.idade, "anos!")
        console.log(str_repeat("=", 50))
    }
}

const Renan = new Pessoa("Renan", 22)
const Sarah = new Pessoa("Sarah", 21)
const Marly = new Pessoa("Marly", 54)

Renan.apresentar()
Sarah.apresentar()
Marly.apresentar()
