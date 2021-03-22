//----------------------- Template Stings-------------------------
// let nombre = "Ricardo";
// let apellido = "Navarro";
//
// // Concatenación
// let saludo = "Bienvenido "+nombre+" "+apellido+".";
//
// // Interpolación de variables
// let saludo2 = `Bienvenido ${nombre} ${apellido}.`;
//
// console.log(saludo);
// console.log(saludo2);

//----------------------- Template Stings-------------------------

// let ul = `
// <ul>
//     <il>Primavera</il>
//     <il>Verano</il>
//     <il>Otoño</il>
//     <il>Invierno</il>
// </ul>
// `;
//
// console.log(ul);

// -------------------------Números------------------------------

// let a = 2;
// let b = new Number(1);      //Usamos el constructor "Number" para asignar el numero 1 a "b"
// let c = 7.19;
// let d = "5.6";
//
// console.log(a,b);
//
// console.log(c.toFixed(1));      // Mostramos el primer decimal
// console.log(c.toFixed(5));      // Mostramos lod primeros 5 decimales
//
// console.log(parseInt(c));       // Solo toma el valor entero de "c"
// console.log(parseFloat(c));     // Toma todos los valores incluyendo decimales
//
// console.log(typeof c,typeof d);
//
// console.log(a + b);
//
// console.log(c + parseInt(d));
// console.log(c + parseFloat(d));
//
// console.log(c + Number.parseInt(d));    // parseInt y parseFloat son metodos que cuelgan directmente del constructor, por eso se pueden usar con Number o sin el
// console.log(c + Number.parseFloat(d));


// --------------------------Booleans--------------------------------

// console.log("--------------------Booleans---------------------");
//
// let verdadero = true;
// let falso = false;
// let v = Boolean(true);
// let f = Boolean(false);
//
// console.log(verdadero,falso,v,f);
// console.log(typeof verdadero, typeof falso, typeof v, typeof f);
//
//
// // También existen valores que tienden a true o false que no son extricatamente booleanos
// // Se les conoce como thruty o falsy
// console.log(Boolean(0));    // false
// console.log(Boolean(-7));   // true
// console.log(Boolean(""));   // fase
// console.log(Boolean(" "));  //true



// ------------------Undefined, null y NaN------------------------------------

// console.log("------------------Undefined, null y NaN------------------");
// // Undefined es cuando una variable fue declarada pero no tiene valor asignado
// // valor asignado por JS
// let indefinida;
// console.log(indefinida);
//
// // Null aparece cuando la variable fue declarada e intencionalmente se declaro que esta vacía
// // Valor asignado por el programador
// let nulo = null;
// console.log(nulo);
//
// // NaN aparece cuando se realizan operaciones con variables que no son números
// let noEsUnNumero = "hola"*3.2;
// console.log(noEsUnNumero);




// ---------------------------Funciones---------------------------

// console.log("----------------------Funciones----------------------");
//
// function unaFuncionQueDevuelveValor(){
//     console.log("Uno");
//     console.log("Dos");
//     console.log("Tres");
//     return "La función ha retornado una cadena de texto";
// }
//
// let valorDeFunción = unaFuncionQueDevuelveValor();
//
// console.log(valorDeFunción);
//
// // IMPORTANTE cuando la función encuentra "return" se salta todo lo que esté después
// function unaFuncionQueDevuelveValor2(){
//     console.log("Uno");
//     return "La función ha retornado una cadena de texto";
//     console.log("Dos");
//     console.log("Tres");
// }
//
// let valorDeFunción2 = unaFuncionQueDevuelveValor2();
//
// console.log(valorDeFunción2);
//
//
// function saludar(nombre,edad){
//     console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
// }
//
// saludar("Juan",11);
// saludar();
//
// //para evitar el undefined, se pueden agregar valores por defecto a la funciónote
// function saludar2(nombre="Desconocido",edad=0){
//     console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
// }
//
// saludar2("Pepe",23);
// saludar2();
//
//
// // --------------Funciones DECLARADAS vs funciones EXPRESADAS
// funcionDeclarada();
//
// function funcionDeclarada(){
//     console.log("Esta es una función declarada, y puede ejecutarse en cualquier parte del código");
// }
//
// funcionDeclarada();
//
// //Función expresada
//
// //funcionExpresada(); //Si se intenta usar antes de declararla, no encontrará la referencia
//
// //función anónima
// const funcionExpresada = function(){
//     console.log("Esto es una función expresada, es decir, una función que se le ha asignado como valor a una variable, si invocamos antes de su definición JS nos dirá: Cannot acces 'funcionExpresada' before initialization");
// }
//
// funcionExpresada();





//--------------------------------ARRAYS------------------------------------

// console.log("--------------------------ARRAYS------------------");
//
// const arrayA = [];
// const arrayB = [1,5,"Hola",["A","B","C",[10,20,30]]];
// console.log(arrayA);
// console.log(arrayB);
// console.log(arrayB[2]);
// console.log(arrayB[3]);
// console.log(arrayB[3][0]);
// console.log(arrayB[3][3][1]);
//
// const arrayC = Array.of("X","Y","Z");
// console.log(arrayC);
//
// const arrayD = Array(30).fill(false);
// console.log(arrayD);
//
// const arrayColores = ["Red","Green","Blue"];
// console.log(arrayColores);
//
// arrayColores.push("Negro");
// console.log(arrayColores);
//
// arrayColores.pop();
// console.log(arrayColores);
//
// arrayColores.forEach(function(color,index){
//     console.log(`<li id="${index}">${color}</li>`);
// });







//--------------------------OBJETOS-------------------------------------

// console.log("-------------------Objetos-----------------");
//
// const persona1 ={
//     nombre:"Ricardo",
//     apellido: "Navarro",
//     edad: 23,
//     pasatiempos: ["Videojuegos","Películas","Huerto"],
//     soltero: true,
//     contacto: {
//         email: "correo@ejemplo.com",
//         telefono: "3435235545643"
//     },
//     saludar: function(){
//         console.log(`Hola, soy ${this.nombre} ${this.apellido}.`)
//     }
// }
//
// console.log(persona1);
// console.log(persona1.nombre);
// console.log(persona1.contacto);
// console.log(persona1.contacto.email);
// console.log(persona1.saludar());
//
// console.log(Object.keys(persona1));
// console.log(Object.values(persona1));
// console.log(persona1.hasOwnProperty("nombre"));
// console.log(persona1.hasOwnProperty("direccion"));






//---------------------------Tipos de OPERADORES---------------------------

// // =    Asignación de variable
// // ==   Comparación de valores
// // ===  Comparación de tipo de dato y de valor
//
// console.log(7 == 7);        //true
// console.log("7" == 7);      //true
// console.log(0 == false);    //true
//
// console.log(7 === 7);       //true
// console.log("7" === 7);     //false
// console.log(0 === false);   //false
//
//
// // Incremento decremento
// let i = 10;
// i += 2;
// console.log(i);
// i -= 3;
// console.log(i);
// i /= 3;
// console.log(i);



//-----------------------------Loops--------------------------------------

// const usuario = {
//     nombre: "Ricardo",
//     apellido: "Navarro",
//     edad: 35
// }
// // La variante for in, permite recorrer todos los campos de un objeto
// for (const propiedad in usuario) {
//     if (usuario.hasOwnProperty(propiedad)) {
//         console.log(`Key: ${propiedad}, value: ${usuario[propiedad]}`);
//     }
// }
//
// //for of
// const numeros = [10,20,30,40,50];
// for (const elemento of numeros) {
//     console.log(elemento);
// }

// // forEach
// const numeros2 = [1,4,7,8];
// numeros2.forEach((numero, indice) => {
//     numeros.splice(indice,1,Math.pow(numero,2))
// });
// console.log(numeros);

//-------------------------------If------------------------------------
// function prueba(valor){
//     if (valor === undefined) return console.warn("No ingresaste nada");
//     if (typeof valor !== `number`) console.warn("No ingresaste un número");
//     return (valor>10)
//         ? console.log("El número es mayor que 10")
//         : console.log("El número es menor que 10");
// }
// prueba(20);

//-------------Manejo de errores TRY CATCH FINALLY--------------------

// try {
//     console.log("En el Try se agrega el código a evaluar");
//     noExiste;
//     console.log("Segundo mensaje del try");
// } catch (error) {
//     console.log("Catch captura cualquier error surgido o lanzado en el try");
//     console.log(error);
// } finally {
//     console.log("El bloque Finally siempre se ejecutará al inal del try-catch. Esútil en el lado del servidor ya que puede servir para cerrar el servidor siempre al final.");
// }
//
//
// try {
//     let numero = "r";
//
//     if (isNaN(numero)) {
//         throw new Error("El caracter introducido no es un número");
//     }
//
//     console.log(numero*numero);
// } catch (error) {
//     console.log(`Se produjo el siguiente error: ${error}`);
// }



//-------------------------BRAKE y CONTINUE---------------------------------

// const numeros = [1,2,3,4,5,6,7,8,9,0];
//
// //brake sirve para salirse del ciclo
// for (let i = 0; i < numeros.length; i++){
//     if (i === 5){
//         console.log("break");
//         break;
//     }
//     console.log(numeros[i]);
// }
// //continue sirve para saltarse una iteración del ciclo y después deja continuar el ciclo
// for (let i = 0; i < numeros.length; i++) {
//     if (i === 5){
//         console.log("continue");
//         continue;
//     }
//     console.log(numeros[i]);
// }




//-----------------------------Destructuración---------------------------

// const numeros = [1,2,3];
//
// //Sin destructuración
// let uno = numeros[0],
//     dos = numeros[1],
//     tres = numeros[2];
// console.log(uno,dos,tres);
//
// //con destructuración
// const [one,two,three] = numeros;
// console.log(one,two,three);
//
// const persona = {
//     nombre: "Ricardo",
//     apellido: "Navarro",
//     edad: 23
// }
//
// let {nombre,edad,apellido} = persona;
// console.log(nombre,apellido,edad);
// //Cuando se usa para objetos es importante escribir el nombre exacto de la propiedad, si no marca unefined
// let {name,lastName,age} = persona;
// console.log(name,lastName,age);





//--------------------Objetos literales----------------------

// let nombre = "kenai",
//     edad = 7;
//
// const perro = {
//     nombre: nombre,
//     edad: edad,
//     ladrar: function (){
//         console.log("guauu gauuu!!!");
//     }
// }
//
// console.log(perro);
// perro.ladrar()
//
// const dog = {
//     nombre,
//     edad,
//     raza: "callejero",
//     ladrar () {
//         console.log("guauu guauu guauu!!!");
//     }
// }
//
// console.log(dog);
// dog.ladrar();




//-----------------------Parametros REST y operador SPREAD------------------

// //REST sirve para añadir parámetros extra en una funcion, que pueden o no, ser añadidos
// function sumar(a, b, ...c) {
//     let resultado = a + b;
//
//     c.forEach(function(n) {
//         resultado += n
//     });
//
//     return resultado;
// }
//
// console.log(sumar(1, 2));
// console.log(sumar(1, 2, 3));
// console.log(sumar(1, 2, 3, 4));
// console.log(sumar(1, 2, 3, 4, 5));
//
// //SPREAD sirve para "sacar" el contenido de, por ejemplo, un arreglo
// const   arr1 = [1, 2, 3, 4, 5],
//         arr2 = [6,7,8,9,0];
//
// console.log(arr1,arr2);
//
// const arr3 = [arr1,arr2];   //Arreglo de 2 posiciones con dos arreglos
// const arr4 = [...arr1,...arr2]; //Arreglo de 10 posiciones obtenidas de 2 arreglos
//
// console.log(arr3);
// console.log(arr4);





//--------------------------------ARROW FUNCTION-----------------------------
//Valida en funciones expresadas

// const saludar = () => console.log("Hola");  //Cuando solo hay una sentencia se pueden quitar los {}
// saludar();
//
//
//
// const saludar2 = (nombre) => console.log(`Hola ${nombre}`);
// saludar2(`Jenni`);
//
// const saludar3 = nombre3 => console.log(`Hola ${nombre3}`); //Cuando solo necesita un parámetro se pueden quitar los ()
// saludar3(`Jenni`);
//
//
//
// const sumar1 = function (a,b){
//     return a + b;
// }
// console.log(sumar1(10,5));
//
// const sumar2 = (a,b) => a + b;      // cuando se retornan valores, no es necesario poner "return"
// console.log(sumar2(20,10));
//
//
//
// const funcionVariasLineas = () => {
//     console.log("uno");
//     console.log("dos");
// }
// funcionVariasLineas();
//
//
//
// const numeros = [1,2,3,4,5];
// numeros.forEach(function(elemento, index) {
//     console.log(`${elemento} esta en la posición ${index}`);
// });
//
// numeros.forEach((elemento, index) => {
//     console.log(`${elemento} esta en la posición ${index}`);
// });
//
// numeros.forEach((elemento, index) => console.log(`${elemento} esta en la posición ${index}`));
//
//
//
// function perro (){
//     console.log(this);      //this toma el cotexto "window"
// }
// perro();
//
// const perro2 = {
//     nombre: "kenai",
//     ladrar(){
//         console.log(this);  //this toma el contexto "perro2"
//     }
// }
// perro2.ladrar();
//
// const perro3 = {
//     nombre: "kenai",
//     ladrar: () => {
//         console.log(this);  //this toma el contexto "window"
//     }
// }
// perro3.ladrar();


//-------------------------------PROTOTIPOS-------------------------------

// // Objeto - Es una instancia de una clase
// // Atributos - Es una característica o propiedad del objeto (son variables dentro de un objeto)
// // Métodos - Son las acciones que un objeto puede realizar (son funciones dentro de un objeto)
//
// //Funcion constructora
// function Animal(nombre,genero){
//     //Atributos
//     this.nombre = nombre;
//     this.genero = genero;
//     //Métodos
//     this.sonar = function(){
//         console.log("Sonidos.mp3 jaja");
//     }
// }
//
// //Herencia prototipica
// function Perro(nombre,genero,tamanio){
//     this.super = Animal;        //super indica el objeto del cual heredará, en este caso "nombre y genero"
//     this.super(nombre,genero);
//     this.tamanio = tamanio;
// }
//
// //Perro está herdando de Animal
// Perro.prototype = new Animal();
// Perro.prototype.constructor = Perro;
//
// const   snoopy = new Animal("Snoopy","Macho"),
//         lolaBunny = new Animal("Lola Bunny","Hembra");
// console.log(snoopy);
// console.log(lolaBunny);



//--------------------------------CLASES--------------------------------

// class Animal{
//     //El constructor es un método especial que se ejecuta en el momento de instanciar la clase
//     constructor(nombre,genero){
//         this.nombre = nombre;
//         this.genero = genero;
//     }
//     //Métodos
//     sonar(){
//         console.log("Hago sonidos");
//     }
//     saludar(){
//         console.log(`Hola me llamo ${this.nombre}`);
//     }
// }
//
// class Perro extends Animal{             //Extends se usa para indicar que hereda los métodos de Animal
//     constructor(nombre,genero,tamanio){
//         //con el método super se manda a llamar el constructor de la clase padre
//         super(nombre,genero);
//         this.tamanio = tamanio;
//         this.raza = null;
//     }
//     sonar(){
//         console.log("Soy un perro y mi sonido es un ladrido");
//     }
//     ladrar(){
//         console.log("Guauuu guauuu!!!");
//     }
//     //Un método estático se puede ejecutar sin necesdad de instanciar la clase
//     static queEres(){
//         console.log("Los perros somos animales mamíferos pertenecientes a la familia de los caninos.");
//     }
//     //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
//     //A pesar de verse como funciones, se mandan a llamar como atributos
//     get getRaza (){
//         return this.raza;
//     }
//     set setRaza(raza){
//         this.raza = raza;
//     }
// }
//
// Perro.queEres();
//
// const   mimi = new Animal("Mimi","Hembra"),
//         scooby = new Perro("Scooby","Macho","Gigante");
//
// console.log(mimi);
// mimi.saludar();
// mimi.sonar();
//
// console.log(scooby);
// scooby.saludar();
// scooby.sonar();
// console.log(scooby.getRaza);
// scooby.setRaza = "Gran Danés";
// console.log(scooby.getRaza);



//-----------------------------CONSOLE----------------------------

// console.log(console);
// console.error("Esto es un error");
// console.warn("Esto es un aviso");
// console.info("Esto es un mensaje informativo");
// console.log("Un registro de lo que ha pasado en nuestra aplicación");
//
// let nombre = "Ricardo",
//     apellido = "Navarro",
//     edad = 35;
//
// console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);
//
// console.clear();
//
// console.log(window);
// console.log(document);
// console.dir(window);
// console.dir(document);
//
// console.group("Mandado");
// console.log("crema");
// console.log("pan");
// console.log("verdra");
// console.groupEnd();
//
// console.log(console);
// console.table(Object.entries(console).sort());
//
// console.time(`Cuanto tarda mi código`);
// const arreglo = Array(1000000);
// for (let i = 0; i < arreglo.length; i++){
//     arreglo[i] = i;
// }
// console.timeEnd(`Cuanto tarda mi código`);



//--------------------------------DATE---------------------------------


// let fecha = new Date();         //importante poner el new
// console.log(fecha);
// //Día del mes
// console.log(fecha.getDate());
// //Día de la semana D-L-M-Mi-J-V-S   ->  0 1 2 3 4 5 6
// console.log(fecha.getDay());
// //mes   Ene-Feb-Mar-Abr-May-Jun-Jul-Ago-Sep-Oct-Nov-Dic
// //      0   1   2   3   4   5   6   7   8   9   10  11
// console.log(fecha.getMonth());
// console.log(fecha.getFullYear());   //Este es más recomendable
// console.log(fecha.getHours());
// console.log(fecha.getMinutes());
// console.log(fecha.getSeconds());
// console.log(fecha.getMilliseconds());
// console.log(fecha.toString());
// console.log(fecha.toDateString());      //DAY Month day year
// console.log(fecha.toLocaleDateString());    //  Día/Mes/Año
// console.log(fecha.getTimezoneOffset());
// console.log(fecha.getUTCDate());
// console.log(fecha.getUTCHours());




//------------------------------------MATH---------------------------------

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.abs(-23.45));      //Valor absoluto
// console.log(Math.ceil(7.2));        //Redondeo hacia arriba
// console.log(Math.floor(7.8));       //Redondeo hacia abajo
// console.log(Math.round(7.8));       //Redondeo normal
// console.log(Math.sqrt(8));          //Raíz cuadrada
// console.log(Math.pow(2,5));         //Potencia 2 elvado a 58
// console.log(Math.sign(-0.3));       //Indica si el signo de un numero es positivo (1 o 0) o negativo (-1 o -0)
// console.log(Math.random());         //Retorna un numero aleatorio entre 0 (inclido) y 1 (sin incluirlo)
// console.log(Math.random()*10);



//----------------------OPERADORES DE CORTOCIRCUITO---------------------------------

// //Cortocircuito OR - Cuando el valor de la izquierda en la expresión
// //siempre pueda validar a true, es el valor que se cargará por defecto
// console.log("----------Cortocircuito OR-----------------");
// console.log("cadena"||"Valor de la derecha");
// console.log(20||"Valor de la derecha");
// console.log(true||"Valor de la derecha");
//
// console.log(false||"Valor de la derecha");
// console.log(""||"Valor de la derecha");
// console.log(0||"Valor de la derecha");
//
// //Cortocircuito AND - Cuando el valor de la izquierda en la expersión
// //pueda validar a false, es el valor que se cargará por defecto
// console.log("--------Cortocircuito AND------");
// console.log("cadena" && "Valor de la derecha");
// console.log(20 && "Valor de la derecha");
// console.log(true && "Valor de la derecha");
//
// console.log(false && "Valor de la derecha");
// console.log("" && "Valor de la derecha");
// console.log(0 && "Valor de la derecha");




//---------------------------ALERT, CONFIRM y PROMPT----------------------

// let alerta = alert("Esto es una alerta");
// let confirmacion = confirm("Esto es un confirm");
// let aviso = prompt("Esto es un promp, escribe algo");
//
// console.log(alerta);
// console.log(confirmacion);
// console.log(aviso);



//----------------------------EXPRESIONES REGULARES------------------------

// Son secuencias de caracteres que forman un patrón de búsqueda,
// principalmente utlizada ára la búsqueda de cadenas de caracteres
// Sintaxis:
//        /patron/
// Banderas:
//        i: ignore case. No diferencia entre mayusculas y minusculas
//        g: global. Busca de forma global, es decir, no se detiene
//        al encontrar la primera coincidencia.



// let cadena = "Lorem ipsum lorem dolor lorem sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
// // let expReg = new RegExp("Lorem","ig");
// let expReg2 = /lorem/ig;
//
// console.log(expReg2.test(cadena));
// console.log(expReg2.exec(cadena));

// const regex = /[aeiou]/gi;
// const str = `Hola mundo
// hola mundo`;
// let m;
//
// while ((m = regex.exec(str)) !== null) {
//     // This is necessary to avoid infinite loops with zero-width matches
//     if (m.index === regex.lastIndex) {
//         regex.lastIndex++;
//     }
//
//     // The result can be accessed through the `m`-variable.
//     m.forEach((match, groupIndex) => {
//         console.log(`Found match, group ${groupIndex}: ${match}`);
//     });
// }




//-----------------------Funciones anonimas utoejecutables-----------------------------

// (function (){
//     console.log("Mi primer funcion anonima uotoejecutable");
// })();
//
// (function (d,w,c){
//     console.log("Mi segunda funcion anonima auotoejecutable");
//     console.log(d);
//     console.log(w);
//     c.log("Este es un console.log")
// })(document,window,console);


















//--------------------------------ASINCRONIA------------------------------------

// setTimeout(() => {
//     console.log("Ejecutando setTimeout, esto se ejecuta una sola vez");
// },2000);
//
// let temporizador = setInterval(() => {
//     // console.log("Ejecutando setInterval, esto se ejecuta indefinidamente cada cierto tiempo");
//     console.log(new Date().toLocaleTimeString());
// },3000);
//
// clearInterval(temporizador);    //Limpia el setInterval que este guardado en una variable



// Código Síncrono bloqueante


// (() => {
//     console.log("Código Síncrono");
//     console.log("Inicio");
//
//     function dos(){
//         console.log("Dos");
//     }
//
//     function uno(){
//         console.log("Uno");
//         dos();
//         console.log("Tres");
//     }
//
//     uno();
//     console.log("Fin");
// })



// Código asíncrono no bloqueante


// (() => {
//     console.log("Código Asíncrono");
//     console.log("Inicio");
//
//     function dos (){
//         setTimeout(function (){
//             console.log("Dos");
//         },1000);
//     }
//
//     function uno(){
//         setTimeout(function (){
//             console.log("Uno");
//         },0);
//         dos();
//         console.log("Tres");
//     }
//
//     uno();
//     console.log("Fin");
// })
