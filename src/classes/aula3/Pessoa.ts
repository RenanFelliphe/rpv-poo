export abstract class Pessoa {
    protected id: string;
    protected nome: string;
    protected email: string;

    constructor(id: string, nome: string, email: string){
        this.id = id;
        this.nome = nome;
        this.email = email;
    }
}