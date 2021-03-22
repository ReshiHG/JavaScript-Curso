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


//-------------------------------CALLBACKS--------------------------------------

// function cuadradoCallback(value, callback){
//     setTimeout(() => {
//         callback(value, value*value);
//     }, 0|Math.random()*1000);
// }
//
//
// // El callback sirve para que las ejecuciones que tienen tiempo en llegar (solicitudes a APIs)
// // se ejecuten de forma consecuente y no detengan el hilo principal
// cuadradoCallback(0,(value,result) => {
//     console.log("Inicia Callback");
//     console.log(`Callback: ${value} ${result}`);
//     cuadradoCallback(1,(value,result) => {
//         console.log(`Callback: ${value} ${result}`);
//         cuadradoCallback(2,(value,result) => {
//             console.log(`Callback: ${value} ${result}`);
//             cuadradoCallback(3,(value,result) => {
//                 console.log(`Callback: ${value} ${result}`);
//                 cuadradoCallback(4,(value,result) => {
//                     console.log(`Callback: ${value} ${result}`);
//                     cuadradoCallback(5,(value,result) => {
//                         console.log(`Callback: ${value} ${result}`);
//                         console.log(`Fin del Callback Hell`);
//                     });
//                 });
//             });
//         });
//     });
// });




//---------------------------------PROMESAS-------------------------------------

// function cuadradoPromise(value) {
//   if (typeof value !== "number") {
//     return Promise.reject(
//       `Error, el valor " ${value} " ingresado no es un número`
//     );
//   }
//
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//     }, 0 | (Math.random() * 1000));
//   });
// }
//
//
//
//  //El .then se usa oara tener un codigo mejor estructurado y evitar la piramide que se veia con el callback
// cuadradoPromise(0)
//   .then((obj) => {
//     //console.log(obj);
//     console.log("Inicio Promise");
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(1);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(2);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(3);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise("4");
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     return cuadradoPromise(5);
//   })
//   .then((obj) => {
//     console.log(`Promise: ${obj.value}, ${obj.result}`);
//     console.log("Fin Promise");
//   })
//   .catch((err) => console.error(err));







//---------------------------------Async y Await---------------------------------

// function cuadradoPromise(value) {
//   if (typeof value !== "number") {
//     return Promise.reject(
//       `Error, el valor " ${value} " ingresado no es un número`
//     );
//   }
//
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         value,
//         result: value * value,
//       });
//     }, 0 | (Math.random() * 1000));
//   });
// }
//
// // El "Await" hace que espere hasta que la función devuelva un valor y después pueda trabajar con élega
// // y es solo válido en las funciones "async function"
// async function funcionAsincronaDeclarada() {
//   try {
//     console.log("Inicio Async Function");
//
//     let obj = await cuadradoPromise(0);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(1);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(2);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise("3");
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(4);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(5);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     console.log("Fin Async Function");
//   } catch (err) {
//     console.error(err);
//   }
// }
//
// funcionAsincronaDeclarada();





// const funcionAsincronaExpresada = async () => {
//   try {
//     console.log("Inicio Async Function");
//
//     let obj = await cuadradoPromise(6);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(7);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(8);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise("9");
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     obj = await cuadradoPromise(10);
//     console.log(`Async Function: ${obj.value}, ${obj.result}`);
//
//     console.log("Fin Async Function");
//   } catch (err) {
//     console.error(err);
//   }
// };
//
// funcionAsincronaExpresada();






//----------------------------NUEVOS TIPOS DE DATOS-----------------------------

//---------------------------------SYMBOL---------------------------------------

// let id = Symbol("id");
// let id2 = Symbol("id2");
//
// console.log(id === id2);;
// console.log(id,id2);
// console.log(typeof id,typeof id2);
//
// const NOMBRE = Symbol("nombre");
// const SALUDAR = Symbol("saludar")
//
// const persona = {
//     [NOMBRE]: "Richy"
// };
// console.log(persona);
//
// persona.NOMBRE = "Jorge Ricardo"
// console.log(persona);
// console.log(persona.NOMBRE);
// console.log(persona[NOMBRE]);
//
// persona[SALUDAR] = function (){
//     console.log("Hola");
// }
// console.log(persona);
// persona[SALUDAR]();
//
// for (let propiedad in persona){
//     console.log(propiedad);
//     console.log(persona[propiedad]);
// }
//
// console.log(Object.getOwnPropertySymbols(persona));







//----------------------------------SET-----------------------------------------

// const set = new Set([1,2,3,3,4,5,true,false,true,{},{},"hola","Hola"]);
// console.log(set);
// console.log(set.size);
//
// const set2 = new Set();
// set2.add(1);
// set2.add(2);
// set2.add(2);
// set2.add(3);
// set2.add(true);
// set2.add(false);
// set2.add(true);
// set2.add({});
//
// console.log(set2);
// console.log(set2.size);
//
// console.log("---------------Recorriendo set1-------------");
// for (item of set){
//     console.log(item);
// }
//
// console.log("---------------Recorriendo set2-------------");
// set2.forEach(item => console.log(item));
//
// let arr = Array.from(set);
// console.log(arr);
// console.log(arr[9]);
//
// set.delete("Hola");
// console.log(set);
//
// console.log(set.has("hola"));
// console.log(set.has(19));





//--------------------------------MAPS------------------------------------------

// let mapa = new Map();
// mapa.set("nombre","Ricardo");
// mapa.set("apellido", "Navarro");
// mapa.set("edad",23);
//
// console.log(mapa);
// console.log(mapa.size);
// console.log(mapa.has("correo"));
// console.log(mapa.has("nombre"));
// console.log(mapa.get("nombre"));
// mapa.set("nombre","Ricardo Navarro")
// console.log(mapa.get("nombre"));
// mapa.delete("apellido");
//
// mapa.set(19,"diecineve");
// mapa.set(false,"falso");
// mapa.set({},{})
// console.log(mapa);
//
// for (let [key,value] of mapa){
//     console.log(`Llave: ${key}, Valor: ${value}`);
// }
//
//
// const mapa2 = new Map([
//     ["nombre", "Michi"],
//     ["edad",6],
//     ["animal","gato"],
//     [null,"nulo"]
// ]);
//
// console.log(mapa2);
//
// const llavesMapa2 = [...mapa2.keys()];
// const valoresMapa2 = [...mapa2.values()];
//
// console.log(llavesMapa2);
// console.log(valoresMapa2);






//------------------------WeakSets & WeakMaps-----------------------------------

// // // Los WeakSet limpian sus referencias cuando sean nulas
//
// // //Los weakSet no pueden declarase y asignar valores al mismo tiempo
// // const  ws = ner WeakSet([1,2,3,3,4,5,true,false,false,{},{}]);
// const ws = new WeakSet();
//
// let valor1 = {"valor2":1};
// let valor2 = {"valor2":2};
// let valor3 = {"valor3":3};
//
// ws.add(valor1);
// ws.add(valor2);
//
// console.log(ws);
//
// console.log(ws.has(valor1));
// console.log(ws.has(valor3));
//
// ws.delete(valor2);
// console.log(ws);
//
// ws.add(valor2);
// ws.add(valor3);
// console.log(ws);
//
// setInterval(() => console.log(ws),1000);
//
// setTimeout(() => {
//     valor1 = null;
//     valor2 = null;
//     valor3 = null;
// },3000);



//
// // el WeakMap no puede declararse y colocarle valores al mismo tiempos
// const wm = nwe WeakMap([
//     ["nombre","michi"],
//     ["edad",6]
// ])

// const wm = new WeakMap();
// let llave1 = {};
// let llave2 = {};
// let llave3 = {};
//
// wm.set(llave1,1);
// wm.set(llave2,2);
// console.log(wm);
//
// console.log(wm.has(llave1));
// console.log(wm.has(llave3));
//
// console.log(wm.get(llave1));
// console.log(wm.get(llave2));
// console.log(wm.get(llave3));
//
// wm.delete(llave2);
// console.log(wm);
//
// wm.set(llave2,2);
// wm.set(llave3,3);
// console.log(wm);
//
// setInterval(() => console.log(wm), 1000);
//
// setTimeout(() => {
//     llave1 = null;
//     llave2 = null;
//     llave3 = null;
// },5000)









//-----------------------ITERABLES & ITERATORS----------------------------------------

// const iterable = [1,2,3,4,5];
//
// //Accedemos al iterador del Iterable
// const iterador = iterable[Symbol.iterator]();
//
// console.log(iterable);
// console.log(iterador);
//
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
//
//
// let next = iterador.next();
//
// while(!next.done){
//     console.log(next.value);
//     next = iterador.next();
// }




//---------------------------------GENERATOR------------------------------------


// function* iterable(){
//     yield "hola1";
//     console.log("Hola consola");
//     yield "hola2";
//     console.log("Segimos con más instrucciones");
//     yield "hola3";
//     yield "hola4";
// }
//
// let iterador = iterable();
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
// // console.log(iterador.next());
//
// for (let y of iterador){
//     console.log(y);
// }
//
// const arr = [...iterable()];
// console.log(arr);
//
// function cuadrado(valor){
//     setTimeout(() => {
//         console.log({valor,reultado:valor*valor});
//     },Math.random()*1000);
// }
//
//
// function* generador(){
//     console.log("Inicia Generador");
//     yield cuadrado(0);
//     yield cuadrado(1);
//     yield cuadrado(2);
//     yield cuadrado(3);
//     yield cuadrado(4);
// }
//
// let gen = generador();
//
// for (let y of gen){
//     console.log(y);
// }










//--------------------------------PROXIES---------------------------------------

// const persona = {
//     nombre: "",
//     apellido: "",
//     edad: 0
// }
//
// //El manejador se ejecuta cada que se asegna un valor al objeto Ricardo, que es un Poxy
// const manejador = {
//     set(obj,prop,valor){
//         if (Object.keys(obj).indexOf(prop) === -1){
//             return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
//         }
//         obj[prop] = valor;
//     }
// }
//
// const ricardo = new Proxy(persona,manejador);
// ricardo.nombre = "Ricardo";
// ricardo.apellido = "Navarro";
// ricardo.edad = 23;
// ricardo.twitter = "@ricardo"
// console.log(ricardo);
// //El Proxy se vincula a persona, entonces si el set no valida que exista la ropiedad "twitter"
// //esta se ceará en "persona"
//
// console.log(persona);







//---------------------PROPIEDADES DINÁMICAS DE LOS OBJETOS---------------------

//Sirve para asignar valores dinámicos que se pueden obtener de otro lado


// let aleatorio = Math.round(Math.random()*100+5);
//
// const objUsuarios = {
//     propiedad: "Valor",
//     [`id_${aleatorio}`]: "Valor aleatorio"
// }
// console.log(objUsuarios);
//
// const usuarios = ["Jon","Irma","Miguel","Kala","Kenai"];
// usuarios.forEach((usuario,index) => objUsuarios[`id_${index}`] = usuario);
//
// console.log(objUsuarios);











//------------------------------------THIS--------------------------------------

// console.log(this);
// console.log(window);
// console.log(this === window);
//
// this.nombre = "Contexto global";
// console.log(this.nombre);
//
//
// function imprimir(){
//     console.log(this.nombre);
// }
//
// imprimir() //   Contexto global
//
//
// const obj = {
//     nombre: "Contexto Objeto",
//     imprimir: function (){
//         console.log(this.nombre);   // Contexto Objeto
//     }
// }
//
// obj.imprimir();
//
//
// const obj2 = {
//     nombre: "Contexto objeto 2",
//     imprimir: imprimir  // Contexto Global
// }
//
// obj2.imprimir();
//
//
// const obj3 = {
//     nombre: "Contexto Objeto3",
//     imprimir: () => {
//         console.log(this.nombre);   // Contexto Global
//     }
// }
//
// obj3.imprimir();






//-------------------------------CALL, APPLY, BIND------------------------------



// console.log(this);
// this.lugar = "Contexto Global";
//
// function saludar(saludo = "Hola",persona = "extraño"){
//     console.log(`${saludo} ${persona} desde el ${this.lugar}`);
// }
//
// saludar();  // Hola extraño desde el Contexto Global
//
// const obj = {
//     lugar: "Contexto Objeto"
// }
//
// saludar.call(obj,"Hola","Ricardo");  // Hola Ricardo desde el Contexto Objeto
// saludar.call(null,"Hola","Ricardo");
//
// saludar.apply(obj,["Adiós","Jorge"]);  // Adiós Jorge desde el Contexto Objeto
// saludar.apply(null,["Adiós","Jorge"]);
//
//
//
//
//
// const persona = {
//     nombre:"Ricardo",
//     saludar: function (){
//         console.log(`Hola ${this.nombre}`);
//     }
// }
// persona.saludar();  // Hola Ricardo
//
//
// const otraPersona = {
//     saludar: persona.saludar
// }
// otraPersona.saludar();  // Hola undefined
//
//
// const otraPersona2 = {
//     saludar: persona.saludar.bind(persona)
// }
// otraPersona2.saludar(); // Hola Ricardo
//
//
// this.nombre = "Window";
// const otraPersona3 = {
//     saludar: persona.saludar.bind(this)
// }
// otraPersona3.saludar(); // Hola Window












//------------------------------------JSON--------------------------------------



// console.log(JSON);
// // JSON.parse convierte los datos entecomillados en valores válidos en jasvascript
// console.log(JSON.parse("{}"));
// console.log(JSON.parse("[1,2,3]"));
// console.log(JSON.parse("true"));
//
//
// // JSON.stringify convierte los objetos en datos válidos para JSON
// console.log(JSON.stringify([1,2,3]));
// console.log(JSON.stringify("Hola mundo"));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify({nombre:"Ricardo",edad:23}));
