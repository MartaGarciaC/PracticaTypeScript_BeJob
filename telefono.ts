export class Telefono {
    // Atributos
    private tipoTlf: string;
    private numeroTlf: number;

    // Constructor
    constructor(tipo:string, numero:number) {
        this.tipoTlf = tipo;
        this.numeroTlf = numero;
    }

    // Getters y Setters
    public getTipoTlf(): string {
        return this.tipoTlf;
    }

    public setTipoTlf(tipoTlf: string): void {
        this.tipoTlf = tipoTlf;
    }

    public getNumeroTlf(): number {
        return this.numeroTlf;
    }

    public setNumeroTlf(numeroTlf: number): void {
        this.numeroTlf = numeroTlf;
    }

    // Metodo para devolver los datos
    devolverDatos():void{
        console.log('Tipo: ', this.getTipoTlf(), ', número: ', this.getNumeroTlf());
    }
}