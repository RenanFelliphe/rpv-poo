import { str_repeat } from "../../utils/str_repeat.ts";
import { Personagem } from "./Personagem.ts";

export class Vampiro extends Personagem{
    public forma: 'morcego' | 'humanoide';

    constructor(forma: 'morcego' | 'humanoide' = 'humanoide', nome: string, idade: number) {
        super(nome, idade)
        this.forma = forma
    }

    public transformarEmMorcego() {
        if (this.forma == 'morcego') {
            console.log(str_repeat("=", 50))
            console.log("==", this.nome, "já está na forma de morcego")
            console.log(str_repeat("=", 50))
            return;
        }

        this.forma = 'morcego'
    }

    public transformarEmHumano() {
        if (this.forma == 'morcego') {
            console.log(str_repeat("=", 50))
            console.log("==", this.nome, "já está na forma humana")
            console.log(str_repeat("=", 50))
            return;
        }

        this.forma = 'humanoide'
    }

    public apresentar(){
        console.log(this.forma)
    }
}