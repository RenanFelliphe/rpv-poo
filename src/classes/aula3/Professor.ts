import { str_repeat } from '../../utils/str_repeat.ts';
import { Pessoa } from './Pessoa.ts';

export class Professor extends Pessoa {
    protected valorHora: number;

    constructor(id: string, nome: string, email: string, valorHora: number) {
        super(id, nome, email);
        this.valorHora = valorHora;
    }

    protected calcularAulas(qtdAulas: number, tempoAula: number): number {
        console.log(str_repeat("=", 100));
        let valorTotal: number;
        valorTotal = this.valorHora * qtdAulas * tempoAula;
        
        console.log("== O professor dará", qtdAulas, "de", tempoAula ,'horas sob a remuneração de R$', this.valorHora.toFixed(2), 'por hora');
        console.log("== Total: R$", valorTotal.toFixed(2));
        console.log(str_repeat("=", 100));

        return valorTotal;
    }
}