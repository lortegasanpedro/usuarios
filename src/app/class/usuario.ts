export class Usuario {
    constructor(
        public sexo: string,
        public nombre: string,
        public apellido: string,
        public telefono: string,
        public foto: string,
        public email: string,
        public fechaNacimiento: Date,
        public nacionalidad: string) {}
}
