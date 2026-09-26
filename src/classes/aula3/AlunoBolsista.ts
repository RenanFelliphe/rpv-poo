import { Pessoa } from './Pessoa.ts'

export class AlunoBolsista extends Pessoa {
    protected horasPesquisa: number;

    constructor(id: string, nome: string, email: string, horasPesquisa: number){
        super(id, nome, email);
        this.horasPesquisa = horasPesquisa;
    }
}