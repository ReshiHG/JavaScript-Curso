// 1) Programa una función que cuente el número de caracteres de
// una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

// console.log(`
// 1) Programa una función que cuente el número de caracteres de
// una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
// `);
//
// function miFuncion(a){
//     if(typeof(a) === `string`){
//         return console.log(`"${a}" tiene ${a.length} caracteres`);
//     }else{
//         let cadena = a.toString();
//         let nCaracteres = cadena.length;
//         console.log(`"${a}" tiene ${nCaracteres} caracteres`);
//         console.warn("Por favor ingrese una cadena de texto la próxima vez");
//     }
// };
// miFuncion("Hola Mundo");
// miFuncion(3440);




// 2) Programa una función que te devuelva el texto recortado
// según el número de caracteres indicados,
//pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

// console.log(`
// 2) Programa una función que te devuelva el texto recortado
// según el número de caracteres indicados,
// pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
// `);
//
// function miFuncion2(texto,numero){
//     if(typeof(texto) === `string` && typeof(numero) === `number`){
//         let textoCortado = texto.slice(0,numero);
//         return console.log(textoCortado);
//     } else{
//         return console.warn("Compruebe que ingreso un texto y un numero");
//     }
// }
//
// miFuncion2("Hola mundo","4");



// 3) Programa una función que dada una String te devuelva un
// Array de textos separados por cierto caracter,
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

// console.log(`
// 3) Programa una función que dada una String te devuelva un
// Array de textos separados por cierto caracter,
// pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].`);
//
// function dividirCadena(texto,separador){
//     let texto2 = texto.toString();
//     let cadenaSeparada = texto2.split(separador);
//     return console.log(cadenaSeparada);
// }
//
// dividirCadena("Hola que tal"," ");



// 4) Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3)
// devolverá Hola Mundo Hola Mundo Hola Mundo.

// console.log(`
// 4) Programa una función que repita un texto X veces,
// pe. miFuncion('Hola Mundo', 3)
// devolverá Hola Mundo Hola Mundo Hola Mundo.
// `);
//
// function rellenar(texto,veces){
//     if (typeof(texto)===`string` && typeof(veces)===`number`){
//         const arreglo = Array(veces).fill(texto);
//         return console.log(arreglo);
//     }else{
//         return console.warn("Compruebe que ingreso un texto y un numero");
//     }
// }
//
// rellenar("Hola mundo",4);






















//-----------------------Ejercicios 2/10-------------------------------------
// console.log(`
//     5) Programa una función que invierta las palabras de una cadena de texto,
//     pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
//     `);

// function revertirFrase(frase){
//     if(typeof(frase)===`string`){
//         let tamanioFrase = frase.length;
//         let arregloFrase = [];
//         for(let i = tamanioFrase; i > 0 ; i--){
//             arregloFrase.push(frase.slice(i-1,i));
//         }
//         // console.log(arregloFrase);
//         let fraseRevertida  = "";
//         for (let i = 0; i < arregloFrase.length; i++) {
//             fraseRevertida = fraseRevertida.concat(arregloFrase[i]);
//         }
//         return fraseRevertida;
//         // console.log(fraseRevertida);
//     }else{
//         console.warn("Introduzca un texto válido");
//     }
// }
// console.log(revertirFrase("Hola mundo, como estas"));

//VERSION 2 del ejercicio 5

// function revertirFrase2(frase){
//     let fraseInvertida = frase.split("").reverse().join("");
//     //  split("")   Separa el string letra por letra, ya que no se ingreso un separador especifico, solo se dejo ""
//     //  reverse()   Invierte el orden de los elementos de un array
//     //  join("")    Une todos los elementos de una matriz o array en un String
//     return fraseInvertida;
// }
// console.log(revertirFrase2("Adios mundo, bye"));

//VERSION 3 del ejercicio 5, con arrow function
// WARNING: No funciona, solo reconoce cuando no se ingresa una cadena
// const revertirFrase3 = (frase = "") =>
//     (!frase)    //Si frase es false
//         ?console.warn("No ingresaste una cadena de texto")    //Se ejecuta esto
//         :console.info(frase.split("").reverse().join(""));    //Si es true, se ejecuta esto
//
// revertirFrase3();
// revertirFrase3("Hola mundo 3");




// console.log(`
//     6) Programa una función para contar el número de veces que se repite una
//     palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo")
//     devolverá 2.
//     `);
//
// function cuentaFrase(frase,parteBuscada){
//     if(typeof(frase) === `string` && typeof(parteBuscada) === `string`){
//         let re = new RegExp(parteBuscada,`g`);
//         let arregloNoPalabras = frase.match(re);
//         console.log(`La frase "${frase}" tiene ${arregloNoPalabras.length} coincidencias para ${parteBuscada}`);
//     }else{
//         console.warn("Verifica que has intoducido un texto y un caracter válido");
//     }
// }
//
// cuentaFrase("Hola mundo, adios mundo","mundo");




// console.log(`
//     7) Programa una función que valide si una palabra o frase dada, es un
//     palíndromo (que se lee igual en un sentido que en otro),
//     pe. mifuncion("Salas") devolverá true.
//     `);
//
// // NOTE: este ejercicio neceista la funcion del EJERCICIO 5
//
// function esPalindromo(palabra){
//     // let re = new RegExp(" ");
//     if(typeof(palabra) === `string`){ //&& re.test(palabra) === false){
//
//         let palabraSinEspacios = palabra.replace(/ /g, "");     //Elimina los epacios
//         let palabraLower = palabraSinEspacios.toLowerCase();    //Pasa el texto a minúsculas
//         let fraseInvertida = palabraLower.split("").reverse().join("");
//         //  split("")   Separa el string letra por letra, ya que no se ingreso un separador especifico, solo se dejo ""
//         //  reverse()   Invierte el orden de los elementos de un array
//         //  join("")    Une todos los elementos de una matriz o array en un String
//
//         if(palabraLower === fraseInvertida){
//             return `"${palabra}" es un palindromo`;
//         } else {
//             return `"${palabra}" NO es un palindromo`;
//         }
//
//     } else {
//         console.warn("Verifique que ingreso un texto válido");
//     }
// }
//
// console.log(esPalindromo("Anita lava la tina"));




// console.log(`
//     8) Programa una función que elimine cierto patrón de caracteres de un
//     texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")
//     devolverá  "1, 2, 3, 4 y 5.
//     `);
//
// function eliminaPatron(texto,patron){
//     let re = new RegExp(`${patron}`,`g`);
//     let textoModificado = texto.replace(re, "");
//     return textoModificado;
// }
//
// console.log(eliminaPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));













//-------------------------Ejercicios 3/10--------------------------------------

// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
// function ObtenerNumAl(num1,num2){
//     if (typeof(num1) === `number` && typeof(num2) === `number`) {
//         let rango = num2 - num1;
//         let numAl = Math.round((Math.random()*rango))+num1;
//         return numAl;
//     } else {
//         console.warn(`Los datos introducidos no son números`);
//     }
// }
// // console.log(ObtenerNumAl(1,10));
// for (var i = 0; i < 10; i++) {
//     console.log(ObtenerNumAl(501,600));
// }




// 10) Programa una función que reciba un número y evalúe si es capicúa o no
// (que se lee igual en un sentido que en otro),
// pe. miFuncion(2002) devolverá true.
// function esCapicua(num){
    //     if(typeof(num) === `number`){
        //         let numString = num.toString();
        //         let re = /\./g;
        //         numString = numString.replace(re, "");
        //         let numeroInvertido = numString.split("").reverse().join("");
        //         if (numString === numeroInvertido) {
            //             return `El número ${num} SI es capicúa`
            //         }else{
                //             return `El número ${num} NO es capicúa`
                //         }
                //     }else{
                    //         console.warn(`El valor introducido no es un número`);
                    //     }
                    // }
// console.log(esCapicua(2002));
// console.log(esCapicua(609));
// console.log(esCapicua(12000.21));


// 11) Programa una función que calcule el factorial de un número
// (El factorial de un entero positivo n, se define como el producto de
// todos los números enteros positivos desde 1 hasta n),
// pe. miFuncion(5) devolverá 120.

function calcularFactorial(num){
    if(typeof(num) === `number`){
        let resultado = 1
        for (var i = 1; i <= num; i++) {
            resultado = resultado*i;
        }
        return `El factorial de ${num} es ${resultado}`;
    } else {
        console.warn("El valor ingresado no es un número");
    }
}
// console.log(calcularFactorial(5));









//--------------------------------Ejercicios 4/10-------------------------------
// 12) Programa una función que determine si un número es primo (aquel que
//     solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
function esPrimo(n){
    if (typeof(n) === `number` && Number.isInteger(n) === true && Math.sign(n) === 1) {  //Se verifica que el numero sea entero, positivo y no 0
        //Se evaluan los numeros entre 2 y n-1, verificando el resultado de dividir n/i no sea entero
        for (var i = 2; i < n; i++) {
            if( n%i === 0){
                //Si el resultado de la división es entera, se confirma que el número no es primo
                return `${n} NO es primo`;
            }
        }
        //Si pasa la verificación con éxito se confirma que es un número primo
        return `${n} SI es primo`
    }else{
        console.warn(`
        El valor ingresado "${n}"
        no es un número,
        no es entero,
        es negativo o
        es cero.
        Favor de ingresar un numero válido`);
    }
}
//console.log(esPrimo(11));




// 13) Programa una función que determine si un número es par o impar,
// pe. miFuncion(29) devolverá Impar.

function esParImpar(n){
    if ( typeof(n) === `number` && Number.isInteger(n) === true && n != 0){
        if (n%2 === 0){
            return `"${n}" es par`;
        } else {
            return `"${n}" es impar`;
        }
    } else {
        console.warn(`Por favor ingrese un número entero que no sea 0`);
    }
}

// console.log(esParImpar(32));




// 14) Programa una función para convertir grados Celsius a Fahrenheit y
// viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function conversionGradosCF(numero,unidad){
    if (typeof(numero) === `number` && (unidad === `C` || unidad === `F`)) {
        switch (unidad) {
            case `F`:
                let CaF = (numero * 9/5)+32;
                return CaF;
                break;
            case `C`:
                let FaC = (numero-32)*5/9;
                return FaC;
                break;
            default:
                return `Default`;
        }
    } else {
        console.warn(`El número esta fuera de rango o la unidad está mal escrita
            numero: "${numero}"
            unidad: "${unidad}"`);
    }
}

// console.log(conversionGradosCF(50,"C"));














//---------------------------Ejercicios 5/10-----------------------------------

// 15) Programa una función para convertir números de base binaria a decimal
// y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
//*****************************   Está muy bueno XD   *******************************
function convertir (numero,baseInicial,baseFinal){
    //Verifica que se hayan ingresado los 3 pparámetros
    if (numero === undefined || baseInicial === undefined || baseFinal === undefined) return console.error("No se ingresó uno de los parámetros");
    //Verifica que se lo valores ingresados sean todos números
    if (typeof numero !== `number` || typeof baseInicial !== `number` || typeof baseFinal !== `number`) return console.warn(`Uno de los parámetros no es un número`);
    //Verifica que las bases introducidas esten en el rengo entre 2 y 36
    if (baseInicial < 2 || baseInicial > 36 || baseFinal < 2 || baseFinal > 36 ) return console.warn(`La base debe comprender entre 2 y 36`);

    let resultado
    if (baseFinal === 10){
        //convierte a Decimal
        resultado = parseInt(numero,baseInicial);
        return `
        El número "${numero}" base ${baseInicial}
        ha sido convertido a:
        "${resultado}" base ${baseFinal}`;
    } else {
        //convierte a caulquier base que no sea 10
        resultado = parseInt(numero.toString(baseFinal),10);
        return `
        El número "${numero}" base ${baseInicial}
        ha sido convertido a:
        "${resultado}" base ${baseFinal}`;
    }

}
// console.log(convertir());
// console.log(convertir(100,"",10));
// console.log(convertir(100,2,37));
// console.log(convertir(100,2,10));
// console.log(convertir(4,10,2));
//******************************************************************************




// 16) Programa una función que devuelva el monto final después de aplicar
// un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
function aplicaDescuento(precio,descuento){
    if (precio === undefined || descuento === undefined) return console.error("No se ingresó uno de los parámetros");
    if (typeof precio !== `number` || typeof descuento !== `number`) return console.warn("Uno de los valores no es un número");
    return precio-(precio*descuento/100)
}

// console.log(aplicaDescuento());
// console.log(aplicaDescuento(1000,"s"));
// console.log(aplicaDescuento(1000,20));




// 17) Programa una función que dada una fecha válida determine cuantos años
// han pasado hasta el día de hoy,
// pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
function calculaEdad(fechaN){
    if (fechaN === undefined) return console.error("No se ha introdcido ningún parámetro");
    if (typeof fechaN !== `object`) return console.warn("Debe introducir un objeto Date");
    // let hoy = new Date(2018,3,5);
    let hoy = new Date();
    let edadAnios = hoy.getFullYear()-fechaN.getFullYear();
    let edadMeses = hoy.getMonth()-fechaN.getMonth()+1;
    let edadDias = hoy.getDate()-fechaN.getDate();
    // console.log(`Años: ${edadAnios}     Meses: ${edadMeses}     Días: ${edadDias}`);
    if (edadDias < 0){
        edadMeses--;
        edadDias = edadDias+30;
        // WARNING: El cálculo de los días no está pulido
    }
    return `Años: ${edadAnios}     Meses: ${edadMeses}     Días: ${edadDias}`;

}
// console.log(calculaEdad(new Date(2000,11,19)));
// console.log(calculaEdad(new Date(1997,9,29)));
// console.log(calculaEdad(new Date(1989,10,31)));
// console.log(calculaEdad(new Date(1983,2,8)));



function calculaEdad2(fechaN){
    if (fechaN === undefined) return console.warn("No ingresaste ningún parámetro");
    if (fechaN instanceof Date !== true) return console.error("El valor que ingresaste no es una fecha");

    let hoy = new Date();
    let hoyMenosFecha = hoy.getTime()-fechaN.getTime(); //tiempo vivido en ms
    let aniosTotales = hoyMenosFecha/(1000*60*60*24*365); //años
    let aniosEntero = Math.trunc(aniosTotales);
    let dias = (aniosTotales-aniosEntero)*365;
    return `Tienes ${aniosEntero} años, ${dias} días`;
}

// console.log(calculaEdad2());
// console.log(calculaEdad2([0,2]));
//console.log(calculaEdad2(new Date(1997,8,29)));











// 18) Programa una función que dada una cadena de texto cuente el número
// de vocales y consonantes,
// pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

function cuentaVocalesConsonantes (texto){
    if (texto === undefined) return console.error("No ingresó nada");
    if (typeof texto !== `string`) return console.warn("Ingrese una cadena de texto");
    const reVocales = /[aeiouAEIOUáéíóúÁÉÍÓÚ]/gi;
    const reConsonantes = /[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ\s]/gi;
    let arregloNoVocales = texto.match(reVocales);
    let arregloNoConsonantes = texto.match(reConsonantes);
    return console.log(`"${texto}" tiene ${arregloNoVocales.length} vocales y ${arregloNoConsonantes.length} consonantes`);
};

// cuentaVocalesConsonantes();
// cuentaVocalesConsonantes(0);
// cuentaVocalesConsonantes("Hola mundo");

//     let fraseInvertida = frase.split("").reverse().join("");
//     //  split("")   Separa el string letra por letra, ya que no se ingreso un separador especifico, solo se dejo ""
//     //  reverse()   Invierte el orden de los elementos de un array
//     //  join("")    Une todos los elementos de una matriz o array en un String
//     return fraseInvertida;
//
// let re = new RegExp(parteBuscada,`g`);
//         let arregloNoPalabras = frase.match(re);
//         console.log(`La frase "${frase}" tiene ${arregloNoPalabras.length} coincidencias para ${parteBuscada}`);



// 19) Programa una función que valide que un texto sea un nombre válido,
// pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function nombreValido(nombre){
    if (nombre === undefined) return console.error("No se ingresó ningún nombre");
    if (typeof nombre !== `string`) return console.warn("El parámetro ingresado no es una cadena de texto");
    if (!nombre) return console.warn("Se ingresó un texto vacio");
    const reLetras = /[^a-záéíóú\s]/gi;
    if (reLetras.test(nombre)){
        return console.log(`"${nombre}" no es un nombre válido, favor de revisar que no contenga carácteres especiales`);
    } else {
        return console.log(`"${nombre}" es un nombre válido, enhorabuena`);
    }
}

// nombreValido();
// nombreValido(3);
// nombreValido("");
// nombreValido("Jorge# Ricardo1.");
// nombreValido("Jorge Ricardo");



// 20) Programa una función que valide que un texto sea un email válido,
// pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
function emailValido(email=""){
    if (typeof email !== `string`) return console.warn("El parámetro ingresado no es una cadena de texto");
    if (!email) return console.warn("Se ingresó un email vacio");

    const reEmail =  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
    if (reEmail.test(email)){
        return console.log(`"${email}" es una dirección válida`);
    } else {
        return console.log(`"${email}" no es una dirección válida`);
    }
}

// emailValido();
// emailValido(0);
// emailValido("")
// emailValido("ejemp%lo@gmai,l.com");
// emailValido("es_un.ejemplo@gmail.com");

















// 21) Programa una función que dado un array numérico devuelve otro
// array con los números elevados al cuadrado,
// pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

function elevaCuadrado(numeros){
    if (numeros === undefined) return console.warn("No ingresaste ningún parámetro");
    if (numeros instanceof Array !== true) return console.error("No ingresaste un array");
    if (numeros.length === 0) return console.warn("El arreglo está vacio");
    for (let num of numeros){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
    }

    let numerosAlCuadrado = numeros.map(function(num) {
        return Math.pow(num,2);
    });

    return console.log(numerosAlCuadrado);
}

// elevaCuadrado();
// elevaCuadrado([]);
// elevaCuadrado("3,1,5");
// elevaCuadrado([2,3,"4",5]);
// elevaCuadrado([1,4,5]);






// 22) Programa una función que dado un array devuelva el número mas
// alto y el más bajo de dicho array,
// pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].

function numeroMaxMin(numeros){
    if (numeros === undefined) return console.warn("No ingresaste ningún parámetro");
    if (numeros instanceof Array !== true) return console.error("No ingresaste un array");
    for (let num of numeros){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
    }

    let numMax = Math.max(...numeros);
    let numMin = Math.min(...numeros);
    return console.log(`El número mayor es: ${numMax} y el numero menor es: ${numMin}`);
}

// numeroMaxMin();
// numeroMaxMin({});
// numeroMaxMin([1,"2","a"]);
// numeroMaxMin([1, 4, 5, 99, -60]);





// 23) Programa una función que dado un array de números devuelva un
// objeto con 2 arreglos en el primero almacena los números pares y
// en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0])
// devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

function separaParesImpares(numeros){
    if (numeros === undefined) return console.warn("No ingresaste ningún parámetro");
    if (numeros instanceof Array !== true) return console.error("No ingresaste un array");
    for (let num of numeros){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
        if (Number.isInteger(num) !== true) return console.warn("Al menos un número no es entero");
    }

    const numerosSeparados = {
        pares:[],
        impares:[]
    }

    numeros.forEach((numero, indice) => {
        if (numero%2 === 0){    // Es par
            numerosSeparados.pares.push(numero);
        } else {                // Es impar
            numerosSeparados.impares.push(numero);
        }
    });
    return console.log(`Numeros pares: ${numerosSeparados.pares} impares: ${numerosSeparados.impares}`);
}

// separaParesImpares();
// separaParesImpares({});
// separaParesImpares([1,"3","a",10]);
// separaParesImpares([1,2,3,4,5,6,7,8,9,0]);


function separaParesImpares2(numeros){
    if (numeros === undefined) return console.warn("No ingresaste ningún parámetro");
    if (numeros instanceof Array !== true) return console.error("No ingresaste un array");
    for (let num of numeros){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
        if (Number.isInteger(num) !== true) return console.warn("Al menos un número no es entero");
    }

    return console.log({
        pares: numeros.filter(num => num%2 === 0),
        impares: numeros.filter(num => num%2 === 1)
    })
}

// separaParesImpares2();
// separaParesImpares2({});
// separaParesImpares2([1,"3","a",10]);
// separaParesImpares2([1,2,3,4,5,6,7,8,9,0]);





















// 24) Programa una función que dado un arreglo de números devuelva un objeto
// con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente
// y el segundo de forma descendiente,
// pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

function arreglaAscDesc(arrNum){
    if (arrNum === undefined) return console.warn("No ingresaste ningún parámetro");
    if (arrNum instanceof Array !== true) return console.error("No ingresaste un array");
    for (let num of arrNum){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
        if (Number.isInteger(num) !== true) return console.warn("Al menos un número no es entero");
    }

    arrNum.sort(function (a, b) {   //Orden Ascendiente
        return a - b;
    });
    let numAsc = arrNum.slice();    //Guardo el array en uno nuevo
    arrNum.reverse();               // Orden Descendente
    let numDesc = arrNum.slice();

    const numerosOrdenados = {
        numerosAscendentes: numAsc,
        numerosDescendentes: numDesc
    }
    return console.log(numerosOrdenados);
}

// arreglaAscDesc([7, 5,7,8,6]);

function arreglaAscDesc2(arrNum){
    if (arrNum === undefined) return console.warn("No ingresaste ningún parámetro");
    if (arrNum instanceof Array !== true) return console.error("No ingresaste un array");
    for (let num of arrNum){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
        if (Number.isInteger(num) !== true) return console.warn("Al menos un número no es entero");
    }

    return console.log({
        arrNum,
        // arrNum.map(el => el)     Crea una copia del arraay
        // .sort()                  Oordena los elementos de acuerdo a su valor Unicode
        // .sort( (a, b) => a - b)  Ordena los números de forma ascendente
        asc: arrNum.map(el => el).sort( (a, b) => a - b),
        // .reverse() invierte el orden de los elementos del array
        desc: arrNum.map(el => el).sort((a, b) => a - b).reverse()
    });
}

// arreglaAscDesc2([7, 5,7,8,6,20]);







// 25) Programa una función que dado un arreglo de elementos, elimine los
// duplicados, pe. miFuncion(["x", 10, "x", 2, "x", "10", 10, true, true])
// devolverá ["x", 10, 2, "10", true].

function eliminaDuplicados(arr){
    if (arr === undefined) return console.warn("No ingresaste ningún parámetro");
    if (arr instanceof Array !== true) return console.error("No ingresaste un array");
    if (arr.length === 0) return console.warn("El arreglo está vacio");

    for (let i = 0; i < arr.length; i++) {
        let eTemp = arr[i];          //  Guarda el elemento a comparar
        arr.splice(i,1);             //  Quita el elemento del array

        // Busca el indice del elemento dentro del array (arr), que sea igual al
        // elemento a comparar "eTemp" y lo elimina, hasta que ya no se encuentre
        // coincidencia y findIndex devuelva "-1"
        while(arr.findIndex( (e) => e === eTemp ) !== -1){
            let indice = arr.findIndex( (e) => e === eTemp );
            arr.splice(indice,1);
        }

        // Vuelve a agregar el elemento guardado "eTemp" en la posicion correspondiante
        arr.splice(i,0,eTemp);
    }

    console.log(arr);
}

// eliminaDuplicados();
// eliminaDuplicados("1,2,3");
// eliminaDuplicados([]);
// eliminaDuplicados(["x", 10, "x", 2, "x", "10", 10, true, true]);

function eliminaDuplicados2(arr){
    if (arr === undefined) return console.warn("No ingresaste ningún parámetro");
    if (arr instanceof Array !== true) return console.error("No ingresaste un array");
    if (arr.length === 0) return console.warn("El arreglo está vacio");

    return console.log({
        original: arr,
        sinDuplicados: arr.filter((value,index,self) => self.indexOf(value) === index)
    });
}

// eliminaDuplicados2(["x", 10, "x", 2, "x", "10", 10, true, true]);

function eliminaDuplicados3(arr){
    if (arr === undefined) return console.warn("No ingresaste ningún parámetro");
    if (arr instanceof Array !== true) return console.error("No ingresaste un array");
    if (arr.length === 0) return console.warn("El arreglo está vacio");

    return console.log({
        original: arr,
        sinDuplicados: [...new Set(arr)]
    });
}

// eliminaDuplicados3(["x", 10, "x", 2, "x", "10", 10, true, true]);







// 26) Programa una función que dado un arreglo de números obtenga el
// promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

function promedioArray(arrNum){
    if (arrNum === undefined) return console.warn("No ingresaste ningún parámetro");
    if (arrNum instanceof Array !== true) return console.error("No ingresaste un array");
    for (let num of arrNum){
        if (typeof num !== `number`) return console.error("Al menos no de los elementos del arreglo no es un número");
    }

    let suma = 0;
    for (let i = 0; i < arrNum.length; i++){
        suma += arrNum[i];
    }
    console.log(`El promedio es ${suma/arrNum.length}`);
}

// promedioArray();
// promedioArray({});
// promedioArray([1,2,"3"]);
// promedioArray([9,8,7,6,5,4,3,2,1,0]);




















// 27) Programa una clase llamada Pelicula.
//
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos:
// id de la película en IMDB, titulo, director, año de estreno, país o países de
// origen, géneros y calificación en IMBD.
        //   - Todos los datos del objeto son obligatorios.
        //   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los
        //      7 restantes números.
        //   - Valida que el título no rebase los 100 caracteres.
        //   - Valida que el director no rebase los 50 caracteres.
        //   - Valida que el año de estreno sea un número entero de 4 dígitos.
        //   - Valida que el país o paises sea introducidos en forma de arreglo.
        //   - Valida que los géneros sean introducidos en forma de arreglo.
        //   - Valida que los géneros introducidos esten dentro de los géneros
        //      aceptados*.
        //   - Crea un método estático que devuelva los géneros aceptados*.
        //   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser
        //     decimal de una posición.
        //   - Crea un método que devuelva toda la ficha técnica de la película.
        //   - Apartir de un arreglo con la información de 3 películas genera 3
        //     instancias de la clase de forma automatizada e imprime la ficha técnica
        //     de cada película.
//
// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy,
// Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History,
// Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short,
// Sport, Talk-Show, Thriller, War, Western.

class Pelicula {
    constructor({id,titulo,director,estreno,pais,generos,calificacion}){
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.validarIMDB(id);
        this.validarTitulo(titulo);
        this.validarDirector(director);
        this.validarEstreno(estreno);
        this.validarPais(pais);
        this.validarGeneros(generos);
        this.validarCalificacion(calificacion);
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy",
        "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History",
        "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short",
        "Sport", "Talk-Show", "Thriller", "War", "Western"];
    }

    static generosAceptados(){
        return console.log(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
    }

    validarCadena(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" esta vacío`);
        if (typeof valor !== `string`) return console.error(`${propiedad} "${valor}" ingresado no es una cadena de texto`);
        return true;
    }
    validarLongitudCadena(propiedad,valor,longitud){
        if (valor.length > longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos ${longitud}`);
        return true;
    }
    validarNumero(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if (typeof valor !== "number") return console.error(`${propiedad} "${valor}" ingresado NO es un número`);
        return true;
    }
    validarArreglo(propiedad,valor){
        if (!valor) return console.warn(`${propiedad} "${valor}" está vacío`);
        if (!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado NO es un arreglo`);
        if (valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`);
        for (let cadena of valor){
            if (typeof cadena !== `string`) return console.error(`El valor "${cadena}" ingresado NO es una cadena de texto`);
        }

        return true;
    }



    validarIMDB(id){
        if (this.validarCadena("IMDB id",id))
            if (!(/^([a-z]){2}([0-9]{7}$)/.test(id)))
                return console.error(`IMDB id "${id}" no es válido, debe tener 9 caracteres, los 2 primeros letras minúsculas y los 7 restantes números`);
    }
    validarTitulo(titulo){
        if (this.validarCadena("Titulo",titulo))
            this.validarLongitudCadena("Titulo",titulo,100);
    }
    validarDirector(director){
        if (this.validarCadena("Director",director))
            this.validarLongitudCadena("Director",director,50);
    }
    validarEstreno(estreno){
        if (this.validarNumero("Estreno",estreno))
            if (!(/^([0-9]{4}$)/.test(estreno)))
                return console.error(`Año de estreno "${estreno}" no es válido, debe ser un número de 4 caracteres`);
    }
    validarPais(pais){
        this.validarArreglo("Pais",pais);
    }
    validarGeneros(generos){
        if (this.validarArreglo("Generos",generos)){
            for (let genero of generos){
                //  console.log(genero,Pelicula.listaGeneros.includes(genero))
                if (!Pelicula.listaGeneros.includes(genero)){
                    console.error(`Genero(s) incorrectos "${generos.join(", ")}"`);
                    Pelicula.generosAceptados();
                }
            }
        }

    }
    validarCalificacion(calificacion){
        if (this.validarNumero("Calificación",calificacion))
            return(calificacion < 0 || calificacion > 10)
                ? console.error(`La calificación tiene que estar en un rango entre 0 y 10`)
                : this.calificacion = calificacion.toFixed(1);
    }
    fichaTecnica(){
        console.log(`Ficha Técnica: \nTítulo: "${this.pais.join(", ")}"\nDirector: "${this.director}"\nAño: "${this.estreno}"\nPaís: "${this.pais.join(", ")}"\nGéneros: "${this.generos.join(", ")}"\nCalificación: "${this.calificacion}"\nIMDB: "${this.id}"`);
    }

}

// Pelicula.generosAceptados();

// const peli = new Pelicula({
    // id:"tt1234567",
    // titulo: "Los vengadores",
    // director: "John",
    // estreno: 2003,
    // pais: ["EU","UK"],
    // generos: ["Comedy","Action"],
    // calificacion: 7.92
// });
//
// peli.fichaTecnica();



const misPeliculas = [
    {
        id:"tt0816692",
        titulo: "Interstellar",
        director: "Christopher Nolan",
        estreno: 2014,
        pais: ["Spain"],
        generos: ["Adventure","Drama","Sci-Fi"],
        calificacion: 8.6
    },{
        id:"tt9683478",
        titulo: "The half of it",
        director: "Alice Wu",
        estreno: 2020,
        pais: ["Spain"],
        generos: ["Comedy","Drama","Romance"],
        calificacion: 6.9
    },{
        id:"tt1150308",
        titulo: "Scissor Seven",
        director: "Ronny Chieng",
        estreno: 2020,
        pais: ["China"],
        generos: ["Animation","Action"],
        calificacion: 8.1
    }
]

// misPeliculas.forEach(el => new Pelicula(el).fichaTecnica());
