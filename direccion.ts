export class Direccion {
    // Atributos
    private calle: string;
    private numeroDireccion: number;
    private piso: number;
    private letra: string;
    private codPostal: number;
    private poblacion: string;
    private provincia: string;

    // Constructor
    constructor(calle:string, numero:number, piso:number, letra:string, cod:number, poblacion:string, provincia:string) {
        this.calle = calle;
        this.numeroDireccion = numero;
        this.piso = piso;
        this.letra = letra;
        this.codPostal = cod;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }

    // Getters y Setters
    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string): void {
        this.calle = calle;
    }

    public getNumeroDireccion(): number {
        return this.numeroDireccion;
    }

    public setNumeroDireccion(numeroDireccion: number): void {
        this.numeroDireccion = numeroDireccion;
    }

    public getPiso(): number {
        return this.piso;
    }

    public setPiso(piso: number): void {
        this.piso = piso;
    }

    public getLetra(): string {
        return this.letra;
    }

    public setLetra(letra: string): void {
        this.letra = letra;
    }

    public getCodPostal(): number {
        return this.codPostal;
    }

    public setCodPostal(codPostal: number): void {
        this.codPostal = codPostal;
    }

    public getPoblacion(): string {
        return this.poblacion;
    }

    public setPoblacion(poblacion: string): void {
        this.poblacion = poblacion;
    }

    public getProvincia(): string {
        return this.provincia;
    }

    public setProvincia(provincia: string): void {
        this.provincia = provincia;
    }

    // Metodo para devolver los datos
    devolverDatos():void{
        console.log('Calle: ', this.getCalle(), ', número: ', this.getNumeroDireccion(), ', piso: ', this.getPiso(),
        ', letra: ', this.getLetra(), ', código postal: ', this.getCodPostal(), ', población: ', this.getPoblacion(),
        ', provincia: ', this.getProvincia());
    }
}