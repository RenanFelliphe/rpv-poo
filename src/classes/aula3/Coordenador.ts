import { Professor } from './Professor.ts'
import { str_repeat } from '../../utils/str_repeat.ts';

export class Coordenador extends Professor {
    protected gratificacao: number;

    constructor(id: string, nome: string, email: string, valorHora: number, gratificacao: number = 1.5) {
        super(id, nome, email, valorHora);
        this.gratificacao = gratificacao;
    }

    public override calcularAulas(qtdAulas: number, tempoAula: number): number {
        console.log(str_repeat("=", 100));
        
        let valorTotal: number;
        valorTotal = super.calcularAulas(qtdAulas, tempoAula) * this.gratificacao;

        console.log("== Gratificação de Coordenador:", (this.gratificacao - 1) * 100, '% por hora');
        console.log("== Total: R$", valorTotal.toFixed(2));
        console.log(str_repeat("=", 100));

        return valorTotal;
    }
}