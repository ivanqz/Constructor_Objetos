/**
 * Práctica 8. Construir objetos automaticamente.
 */

 
//CONSTRUCTORES

function coches(marca, modelo, color, anyo ){
    this.marca=marca;
    this.modelo=modelo;
    this.color=color;
    this.anyo=anyo;

}

//arrays que contienen los valores del objeto
var marcaCoches=['Mitsubishi','Seat','Opel','Hyundai','Ferrari','Peugot','Mazda','Audi','Suzuki','Chevrolette']
var modeloCoches=['Lancer','Leon','Mokka','Elantra','Enzo','308','Skyactiv-x','A3','Baleno','Orlando']
var colorCoches=['Negro','Rojo','Gris','Azul','Amarillo','Verde','Rojo','Marron','Naranja','Blanco']
var añoCoches=[1997,2017,2019,2018,2000,1999,2008,2006,2010,2012]

//array para almacenar objetos
var arrayCoches=[]

//Bucle for
//'new' sirve para generar una instancia de una funcion contructora
for(let i=0; i<marcaCoches.lenght; i++){
    var coche = new coche (marcaCoches[i], modeloCoches[i], colorCoches[i], añoCoches[i]);
    arrayCoches.push(coche);
    var descripcion=(i+1);
    document.write(descripcion);
    console.log(coche);
}

console.log(arrayCoches);

