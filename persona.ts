// Importamos las clases para poder usarlas
import {Direccion} from './direccion';
import {Telefono} from './telefono';
import {Mails} from './mail';

export class Persona{
    // Atributos
    private nombre: string;
    private apellidos: string;
    private edad: number;
    private dni: string;
    private cumpleanios: Date;
    private colorFavorito: string;
    private sexo: string;
    private direcciones: Direccion[];
    private mails: Mails[];
    private telefonos: Telefono[];
    private notas: string;

    // Constructor
    constructor (nombre:string, apellidos:string, edad:number, dni:string, cumpleanios:Date, colorFavorito:string, sexo:string, direcciones:Direccion[], mails:Mails[], telefonos:Telefono[], notas:string) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanios = cumpleanios;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }

    // Getters y Setters
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getApellidos(): string {
        return this.apellidos;
    }

    public setApellidos(apellidos: string): void {
        this.apellidos = apellidos;
    }

    public getEdad(): number {
        return this.edad;
    }

    public setEdad(edad: number): void {
        this.edad = edad;
    }

    public getDni(): string {
        return this.dni;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    public getCumpleanios(): Date {
        return this.cumpleanios;
    }

    public setCumpleanios(cumpleanios: Date): void {
        this.cumpleanios = cumpleanios;
    }

    public getColorFavorito(): string {
        return this.colorFavorito;
    }

    public setColorFavorito(colorFavorito: string): void {
        this.colorFavorito = colorFavorito;
    }

    public getSexo(): string {
        return this.sexo;
    }

    public setSexo(sexo: string): void {
        this.sexo = sexo;
    }

    public getDirecciones(): Direccion[] {
        return this.direcciones;
    }

    public setDirecciones(direcciones: Direccion[]): void {
        this.direcciones = direcciones;
    }

    public getMails(): Mails[] {
        return this.mails;
    }

    public setMails(mails: Mails[]): void {
        this.mails = mails;
    }

    public getTelefonos(): Telefono[] {
        return this.telefonos;
    }

    public setTelefonos(telefonos: Telefono[]): void {
        this.telefonos = telefonos;
    }

    public getNotas(): string {
        return this.notas;
    }

    public setNotas(notas: string): void {
        this.notas = notas;
    }

    // Metodo para devolver los datos
    devolverDatos():void{
        console.log('Nombre: ', this.getNombre(), ', apellidos: ', this.getApellidos(), ', edad: ', this.getEdad(),
        ', DNI: ', this.getDni(), ', cumpleaños: ', this.getCumpleanios(), ', color favorito: ', this.getColorFavorito(),
        ', sexo: ', this.getSexo(), ', direcciones: ', this.getDirecciones(), ', mails: ', this.getMails(),
        ', teléfonos: ', this.getTelefonos(), ', notas: ', this.getNotas());
    }

    /* Metodo para modificar la persona. La busco segun el DNI que ponga por parametro y si ese DNI coincide con el DNI que tenga ya la persona,
    le aniade la direccion, el mail y el telefono */
    static modificarPersona(personas: Persona[], dni:string, direccionModificada:Direccion, mailModificado:Mails, tlfModificado:Telefono){
        personas.forEach(persona => {
            if(dni == persona.dni) {
                persona.direcciones.push(direccionModificada);
                persona.mails.push(mailModificado);
                persona.telefonos.push(tlfModificado);
            }
        });
    }
}