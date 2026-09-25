import { str_repeat } from '../../utils/str_repeat.ts'

export class Carro {
    public modelo: string
    public placa: string
    public ano: number
    private ligado: boolean = false

    constructor(modelo: string, placa: string, ano: number) {
        this.modelo = modelo
        this.placa = placa
        this.ano = ano
    }

    public getStatusCarro() {
        return this.ligado
    }

    public getInfoCarro() {
        console.log(str_repeat('=', 50))
        console.log(`-- Carro: `)
        console.log(`-- Modelo: ${this.modelo}`)
        console.log(`-- Placa: ${this.placa}`)
        console.log(`-- Ano: ${this.ano}`)
        console.log(`-- Status atual: ${this.getStatusCarro() ? 'ligado' : 'desligado'}`)
        console.log(str_repeat('=', 50) + '\n')

        return
    }

    public ligarCarro() {
        if (this.getStatusCarro() == false) {
            this.ligado = !this.ligado
            console.log(str_repeat('=', 50))
            console.log("-- Carro ligado com sucesso!")
            console.log(str_repeat('=', 50))
        } else {
            console.log(str_repeat('=', 50))
            console.log("-- O carro já está ligado!")
            console.log(str_repeat('=', 50) + '\n')
        }
    }

    public desligarCarro() {
        if (this.getStatusCarro() == true) {
            this.ligado = !this.ligado
            console.log(str_repeat('=', 50))
            console.log("-- Carro desligado com sucesso!")
            console.log(str_repeat('=', 50) + '\n')
        } else {
            console.log(str_repeat('=', 50))
            console.log("-- O carro já está desligado!")
            console.log(str_repeat('=', 50) + '\n')
        }
    }
}