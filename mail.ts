export class Mails {
    // Atributos
    private tipoMail: string;
    private direccionMail: string;

    // Constructor
    constructor(tipo:string, direccion:string) {
        this.tipoMail = tipo;
        this.direccionMail = direccion;
    }

    // Getters y Setters
    public getTipoMail(): string {
        return this.tipoMail;
    }

    public setTipoMail(tipoMail: string): void {
        this.tipoMail = tipoMail;
    }

    public getDireccionMail(): string {
        return this.direccionMail;
    }

    public setDireccionMail(direccionMail: string): void {
        this.direccionMail = direccionMail;
    } 

    // Metodo para devolver los datos
    devolverDatos():void{
        console.log('Tipo: ', this.getTipoMail(), ', dirección: ', this.getDireccionMail());
    }
}