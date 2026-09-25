import { str_repeat } from '../../utils/str_repeat.ts'

export class ContaBancaria {
    public titular: string
    public numConta: string
    private saldo: number = 0
    private saldoCaixinha: number = 0

    constructor(titular: string, numConta: string, saldo: number, saldoCaixinha: number = 100) {
        this.numConta = numConta
        this.titular = titular
        this.saldo = saldo
        this.saldoCaixinha = saldoCaixinha
    }

    public getInfoConta() {
        console.log(str_repeat('=', 50))
        console.log(`-- Vendo informações da conta!`)
        console.log(str_repeat('=', 50))
        console.log(`-- Conta Bancária `)
        console.log(`-- Número da Conta: ${this.numConta}`)
        console.log(`-- Titular: ${this.titular}`)
        console.log(`-- Saldo: ${this.saldo}`)
        console.log(`-- Saldo da Caixinha: ${this.saldoCaixinha}`)
        console.log(str_repeat('=', 50) + '\n')
    }

    public sacarDinheiro(valor: number) {
        console.log(str_repeat('=', 50))
        console.log(`-- Sacando dinheiro!`)
        console.log(str_repeat('=', 50))

        if (valor <= 0) {
            console.log("-- ERRO: Valor inválido!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }

        if (this.saldo <= 0 || this.saldo < valor) {
            console.log("-- ERRO: Você não tem saldo suficiente para sacar!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }
        console.log(`-- Saldo inicial: ${this.saldo}`)
        console.log(`-- Valor sacado: ${valor}`)
        this.saldo -= valor
        console.log(`-- Saldo final: ${this.saldo}`)
        console.log(str_repeat('=', 50) + '\n')
    }

    public depositarDinheiro(valor: number) {
        console.log(str_repeat('=', 50))
        console.log(`-- Depositando dinheiro!`)
        console.log(str_repeat('=', 50))

        if (valor <= 0) {
            console.log("-- ERRO: Valor inválido!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }

        console.log(`-- Saldo inicial: ${this.saldo}`)
        console.log(`-- Valor depositado: ${valor}`)
        this.saldo += valor
        console.log(`-- Saldo final: ${this.saldo}`)
        console.log(str_repeat('=', 50) + '\n')
    }

    public verSaldo() {
        console.log(str_repeat('=', 50))
        console.log(`-- Vendo saldo!`)
        console.log(str_repeat('=', 50))
        console.log(`-- Saldo atual: ${this.saldo}`)
        console.log(str_repeat('=', 50) + '\n')
    }

    public guardarCaixinha(valor: number) {
        console.log(str_repeat('=', 50))
        console.log(`-- Guardando valor na caixinha!`)
        console.log(str_repeat('=', 50))

        if (valor <= 0) {
            console.log("-- ERRO: Valor inválido!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }

        if (this.saldo <= 0 || this.saldo < valor) {
            console.log("-- ERRO: Você não tem saldo suficiente para guardar na caixinha!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }
        console.log(`-- Saldo inicial da conta: ${this.saldo}`)
        console.log(`-- Saldo inicial da caixinha: ${this.saldoCaixinha}`)
        console.log(`-- Valor guardado na caixinha: ${valor}`)
        this.saldo -= valor
        this.saldoCaixinha += valor
        console.log(`-- Saldo final da conta: ${this.saldo}`)
        console.log(`-- Saldo final da caixinha: ${this.saldoCaixinha}`)
        console.log(str_repeat('=', 50) + '\n')
    }

    public retirarCaixinha(valor: number) {
        console.log(str_repeat('=', 50))
        console.log(`-- Retirando valor da caixinha!`)
        console.log(str_repeat('=', 50))

        if (valor <= 0) {
            console.log("-- ERRO: Valor inválido!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }

        if (this.saldoCaixinha == 0 || this.saldoCaixinha < valor) {
            console.log("-- ERRO: Você não tem saldo suficiente para retirar da caixinha!")
            console.log(str_repeat('=', 50) + '\n')
            return
        }
        console.log(`-- Saldo inicial da conta: ${this.saldo}`)
        console.log(`-- Saldo inicial da caixinha: ${this.saldoCaixinha}`)
        console.log(`-- Valor guardado na caixinha: ${valor}`)
        this.saldo += valor
        this.saldoCaixinha -= valor
        console.log(`-- Saldo final da conta: ${this.saldo}`)
        console.log(`-- Saldo final da caixinha: ${this.saldoCaixinha}`)
        console.log(str_repeat('=', 50) + '\n')
    }

    public verSaldoCaixinha() {
        console.log(str_repeat('=', 50))
        console.log(`-- Vendo saldo da caixinha!`)
        console.log(str_repeat('=', 50))
        console.log(`-- Saldo atual da caixinha: ${this.saldoCaixinha}`)
    }

}