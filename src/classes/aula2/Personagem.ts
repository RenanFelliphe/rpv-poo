import { str_repeat } from "../../utils/str_repeat.ts";

export class Personagem {
    public nome: string;
    public idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome
        this.idade = idade
    }

    public comer(alimento: string){
        console.log(str_repeat("=", 50))
        console.log("==", this.nome,"comeu um(a)", alimento, "!")
        console.log(str_repeat("=", 50))
    }
}