import { str_repeat } from '../../utils/str_repeat.ts'

export class Contador {
    public valor: number;

    constructor(valor: number = 0) {
        this.valor = valor
    }

    public incrementar(valorIncrementado: number) {
        console.log(str_repeat("=", 50))
        console.log("=== Valor Inicial:", this.valor)

        this.valor += valorIncrementado;

        console.log("=== Valor Incrementado:", valorIncrementado)
        console.log("=== Valor Final:", this.valor)
        console.log(str_repeat("=", 50))

    }

    public decrementar(valorDecrementado: number): number {
        console.log(str_repeat("=", 50))
        console.log("=== Valor Inicial:", this.valor)

        this.valor -= valorDecrementado;

        console.log("=== Valor Decrementado:", valorDecrementado)
        console.log("=== Valor Final:", this.valor)
        console.log(str_repeat("=", 50))

        return (valorDecrementado)
    }

    public resetar() {
        console.log(str_repeat("=", 50))
        console.log("=== Valor Inicial:", this.valor)

        this.valor = 0;

        console.log("=== Valor Resetado para 0 com Sucesso")
        console.log(str_repeat("=", 50))
    }

    public mostrarValor() {
        console.log(str_repeat("=", 50))
        console.log("=== Valor Atual:", this.valor)
        console.log(str_repeat("=", 50))
    }
}