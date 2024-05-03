export const generarNumeroAleatorio = async () => {
    return Math.floor(Math.random() * (152 - 1)) + 1;
};
/* buena idea sacar la funcion del componente pero
1. esta funcion solo alcula un numero, las has puesto async pero no hace nada asyncrono.
2. la funcion no es un servicio, si no mas bien una funcion de utilidad. Estas funciones
se suene poner en una carpeta lib/ o utils/ en un archivo helpers.ts o utils.ts */
