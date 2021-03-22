
// console.log(window);
// console.log(document);

//****************************** Habla la PC **********************************
// let texto = "Hola soy tu PC, mucho gusto XDDDDD. Mierdaaaaaaaaaagria";
// const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
//
// hablar(texto);


// console.log(window.document);
// console.log(document);
// console.log(document.head);
// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.doctype);
// console.log(document.charset);
// console.log(document.title);
// console.log(document.links);
// console.log(document.images);
// console.log(document.forms);
// console.log(document.styleSheets);
// console.log(document.scripts);
// setTimeout(() => {
//   console.log(document.getSelection().toString());
// }, 2000);
// document.write("<h2>Hola Mundo desde el DOM</h2>");



// ---------------------- NODOS, ELEMENTOS y SELECTORES -------------------------

// // // Ya no se usan los getElement
// // console.log(document.getElementsByTagName("li"));
// // console.log(document.getElementsByClassName("card"));
// // console.log(document.getElementsByName("nombre"));
//
// // Se usa más querySelector y getElementById
// console.log(document.getElementById("menu"));
//
// console.log(document.querySelector("li"));
// console.log(document.querySelector(".card"));
// console.log(document.querySelector("#menu"));
// console.log(document.querySelectorAll("a"));
//
// document.querySelectorAll("a").forEach((el) => console.log(el));
// console.log(document.querySelectorAll(".card"[2]));
// console.log(document.querySelectorAll("#menu li"));










// -------------------------- ATRIBUTOS y DATA-ATTRIBUTES ----------------------



// console.log(document.documentElement.lang); //es
// console.log(document.documentElement.getAttribute("lang")); //es
//
// // Trae en donde esta
// console.log(document.querySelector(".link-dom").href); // http://127.0.0.1:3000/DOM.html
//
// // Trae el nombre de documento
// console.log(document.querySelector(".link-dom").getAttribute("href")); // DOM.html
//
// document.documentElement.lang = "en";
// console.log(document.documentElement.getAttribute("lang")); //en
// document.documentElement.setAttribute("lang","es-MX")
// console.log(document.documentElement.getAttribute("lang")); //es-MX
//
// const $linkDOM = document.querySelector(".link-dom");
//
// $linkDOM.setAttribute("target","_blank"); //Abre el recurso en una pestaa nueva
// $linkDOM.setAttribute("rel","noopener"); // Para evitar hackeos al evitar una relación
// $linkDOM.setAttribute("href","https://www.google.com.mx/")
// console.log($linkDOM.hasAttribute("rel"));
// $linkDOM.removeAttribute("rel");
// console.log($linkDOM.hasAttribute("rel"));
//
//
// // Data-Attributes
//
// console.log($linkDOM.getAttribute("data-description"));
// console.log($linkDOM.dataset);
// console.log($linkDOM.dataset.description);
// $linkDOM.setAttribute("data-yolo","You only Live Once");
// console.log($linkDOM.dataset.yolo);
// $linkDOM.dataset.description = "Hola soy el DOM";
// console.log($linkDOM.dataset.description);









// --------------------------DOM: ESTILOS Y VARIABLES CSS-----------------------

// const $linkDOM = document.querySelector(".link-dom");

// console.log($linkDOM.style);    // Muestra todos los estilos
// console.log($linkDOM.getAttribute("style")); // background-color:#F7DF1e; color:#222;
// console.log($linkDOM.style.backgroundColor);
// console.log($linkDOM.style.color);
// console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
//
// $linkDOM.style.setProperty("text-decoration","none");
// $linkDOM.style.setProperty("display","block");
// $linkDOM.style.width = "50%";
// $linkDOM.style.textAlign = "center";
// $linkDOM.style.marginLeft = "auto";
// $linkDOM.style.marginRight = "auto";
// $linkDOM.style.padding = "1rem";
// $linkDOM.style.borderRadius = ".5rem";


// Variables CSS- Custom Properties CSS
//
// const   $html = document.documentElement,
//         $body = document.body;
//
// let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
// let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");
//
// console.log("--------------Variables CSS-----------------");
// console.log(varDarkColor,varYellowColor);
//
// $body.style.backgroundColor = varDarkColor;
// $body.style.color = varYellowColor;
//
// $html.style.setProperty("--dark-color","black");
// varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
//
// $body.style.setProperty("background-color", varDarkColor);














// ---------------------------- CLASES CSS ------------------------------------


// const $card = document.querySelector(".card");
//
// console.log($card);
// console.log($card.className);
// console.log($card.classList);
// console.log($card.classList.contains("rotate-45"));
//
// // Añadir clase, puedes agregar dos o más si separas por coma ("rotate.45","sepia")
// $card.classList.add("rotate-45");
// console.log($card.classList.contains("rotate-45"));
//
// // Remover clase, puedes remover dos o mas si separas por coma ("rotate.45","sepia")
// $card.classList.remove("rotate-45");
// console.log($card.classList.contains("rotate-45"));
//
// // Añade y remueve la clase TOGGLE
// console.log("Toggle");
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// console.log($card.classList.contains("rotate-45"));
// $card.classList.toggle("rotate-45");
// $card.classList.replace("rotate-45","rotate-135");








//-------------------------------- DOM: Texto y HTML ---------------------------


// const $whatIsDOM = document.getElementById("que-es");
//
// let text = `
//     <p>
//         El modelo de objetos del Documento (<b><i>DOM-Document Object Model</i></b>) es un API para documentos HTML y XML
//     </p>
//     <p>
//         Este proveé una representación estructural del documento, permitiendo modificar su cotenido y presentación visual mediante código JS.
//     </p>
//     <p>
//         <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
//     </p>
// `;
//
// $whatIsDOM.innerText = text;     // Inserta el texto, respeta los saltos de linea
// $whatIsDOM.textContent = text;   // Inserta texto, no respeta saltos de linea
// $whatIsDOM.innerHTML = text;     // Reemplaza el contenido que está dentro de la etiqueta HTML
// $whatIsDOM.outerHTML = text;    // Reemplaza todo el contenido de la etiqueta HTML










//------------------------DOM TRAVERSING: RECORRIENDO EL DOM-----------------------------

// $cards = document.querySelector(".cards");
//
// console.log($cards);
// console.log($cards.children);
// console.log($cards.children[2]);
// console.log($cards.parentElement);
// console.log($cards.firstChild);     // #text que es
// console.log($cards.firstElementChild);
// console.log($cards.lastElementChild);
// console.log($cards.previousElementSibling);
// console.log($cards.nextElementSibling);
//
// console.log($cards.closest("div"));
// console.log($cards.closest("body"));
// console.log($cards.children[3].closest("section"));








// --------------------Creando elementos y fragmentos---------------------------



//
// const   $figure = document.createElement("figure"),
//         $img = document.createElement("img"),
//         $figcaption = document.createElement("figcaption")
//         $figcaptionText = document.createTextNode("Animals"),
//         $cards = document.querySelector(".cards"),
//
//         $figure2 = document.createElement("figure");
//
// $img.setAttribute("src","https://placeimg.com/200/200/animals");
// $img.setAttribute("alt", "Animals");
// $figure.classList.add("card");
//
// $figcaption.appendChild($figcaptionText);
// $figure.appendChild($img);
// $figure.appendChild($figcaption);
// $cards.appendChild($figure);
//
//
// $figure2.innerHTML = `
//     <img src="https://placeimg.com/200/200/people" alt="people">
//     <figcaption>People</figcaption>
// `;
//
// $figure2.classList.add("card");
// $cards.appendChild($figure2);
//
//
//
// const   estaciones = ["Primavera","Verano","Otoño","Invierno"],
//         $ul = document.createElement("ul");
//
// document.write("<h3>Estaciones del Año</h3>");
// document.body.appendChild($ul);
//
// estaciones.forEach((el) => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $ul.appendChild($li);
// });
//
//
//
// const   continentes = ["África","América","Asia","Europa","Oceanía"],
//         $ul2 = document.createElement("ul");
//
// document.write("<h3>Continentes del Mundo</h3>");
// document.body.appendChild($ul2);
//
// continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));
//
//
//
//
//          Esta es la mejor forma de agregar elementos a html
//
// const   meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
//         $ul3 = document.createElement("ul"),
//         $fragment = document.createDocumentFragment();
//
// meses.forEach(el => {
//     const $li = document.createElement("li");
//     $li.textContent = el;
//     $fragment.appendChild($li);
// });
//
// document.write("<h3>Meses del Año</h3>");
// $ul3.appendChild($fragment);
// document.body.appendChild($ul3);


























//------------------------- DOM: Templates HTML ------------------------------

// La etiqueta template crea una especie de maqueta que se inserta en el DOM y de esta forma se ahorra un poco de tiempo en la carga de la página


// const   $cards = document.querySelector(".cards"),
//         $template = document.getElementById("template-card").content,
//         $fragment = document.createDocumentFragment(),
//         cardContent = [
//             {
//                 title: "Tecnología",
//                 img: "https://placeimg.com/200/200/tech",
//             },
//             {
//                 title: "Animales",
//                 img: "https://placeimg.com/200/200/animals",
//             },
//             {
//                 title: "Arquitectura",
//                 img: "https://placeimg.com/200/200/arch",
//             },
//             {
//                 title: "Personas",
//                 img: "https://placeimg.com/200/200/people",
//             },
//             {
//                 title: "Naturaleza",
//                 img: "https://placeimg.com/200/200/nature",
//             }
//         ];
//
// cardContent.forEach( el => {
//     $template.querySelector("img").setAttribute("src",el.img);
//     $template.querySelector("img").setAttribute("alt",el.title);
//     $template.querySelector("figcaption").textContent = el.title;
//
//     let $clone = document.importNode($template,true);
//     $fragment.appendChild($clone);
// });
//
// $cards.appendChild($fragment);














// --------------------DOM: Modificando elementos (Old Style)-------------------

// const $cards = document.querySelector(".cards"),
//         $newCard = document.createElement("figure"),
//         $cloneCards = $cards.cloneNode(true);
//
//
// $newCard.innerHTML = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption>Any</figcaption>
// `;
// $newCard.classList.add("card");

// //replaceChild      reemplaza un nodo
// $cards.replaceChild($newCard,$cards.children[2]);

// // insertBefore     Inserta un nodo antes de el nodo indicado
// $cards.insertBefore($newCard,$cards.firstElementChild);

// // removeChild          Remueve el elemento indicado
// $cards.removeChild($cards.lastElementChild);

// document.body.appendChild($cloneCards);
























//--------------DOM: Modificando Elementos (New Style) ----------------

/*
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

Posiciones:
    beforebegin(hermano anterior)
    afterbegin(primer hijo)
    beforeend(ultimo hijo)
    afterend(hermano siguiente)
*/

// const $cards = document.querySelector(".cards"),
//         $newCard = document.createElement("figure");
//
// let $contentCard = `
//     <img src="https://placeimg.com/200/200/any" alt="Any">
//     <figcaption></figcaption>
// `;
// $newCard.classList.add("card");
//
// //Añade una nueva carta antes de ".cards"
// //$cards.insertAdjacentElement("beforebegin",$newCard);
//
// $newCard.insertAdjacentHTML("beforeend",$contentCard);
// $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any");
//
// //Añade una nueva carta después de ".cards" pero adentro
// $cards.insertAdjacentElement("afterbegin",$newCard);



















// -----------------------------Manejadores de Eventos--------------------------

// function holaMundo(){
//     alert("Hola mundo");
//     console.log(event);
// }
//
// const $eventoSemantico = document.getElementById("evento-semantico");
//
// $eventoSemantico.onclick = holaMundo; // si ponemos "holaMundo()" se ejecuta la función cuando se carga el archivo JS y ya no funcionará el botón
// $eventoSemantico.onclick = function (e) {
//     alert("Hola Mundo Manejador de Eventos");
//     console.log(e);
//     console.log(event);
// }
//
//
// const $eventoMultiple = document.getElementById("evento-multiple");
//
// // En el addEventListener ya no se pone la preposición "on"
// $eventoMultiple.addEventListener("click",holaMundo);
// $eventoMultiple.addEventListener("click", (e) => {
//     alert("Hola Mundo Manejador de Eventos Múltiple");
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
// });





















//----------------Eventos con Parámetros y Remover Eventos--------------------------
// // NOTA: Necesita el código de "Manejadores de Eventos"
//
// // La funciones manejadores, solo pueden recibir el parámetro "event"
//
// function saludar(nombre="Desconocido/a"){
//     alert(`Hola ${nombre}`);    // Saldrá "Hola {object MauseEvent}"
// }
//
// $eventoMultiple.addEventListener("click",saludar);
//
// // Para solucionar el problema anterior, se añade una arrow function
//
// $eventoMultiple.addEventListener("click", () => {
//     saludar();
//     saludar("Richy");
// });
//
//
// const $eventoRemover = document.getElementById("evento-remover");
//
// const removerDobleClick = (e) => {
//     alert(`Removiendo el evento tipo ${e.type}`);
//     console.log(e);
//     $eventoRemover.removeEventListener("dblclick",removerDobleClick);
//     $eventoRemover.disabled = true;
// }
//
// $eventoRemover.addEventListener("dblclick",removerDobleClick);












// -------------------------FLUJO DE EVENTOS (BURBUJA y CAPTURA)-------------------

// const $divsEventos = document.querySelectorAll(".eventos-flujo div");
//
// console.log($divsEventos);
//
// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}.`);
// }
//
// $divsEventos.forEach(div => {
//     // // fase de BURBUJA, va del elemento interno al más externo
//     // div.addEventListener("click",flujoEventos);
//
//     // // fase de CAPTURA, va del elemento EXTERNO al más INTERNO
//     // div.addEventListener("click",flujoEventos,true);
//
//     // Si se quiere ejecutar una sola vez el evento
//     div.addEventListener("click",flujoEventos,{
//         capture: true,
//         once: true,
//     });
// });





















// ---------------DOM: stopPropagation & prevenDefault-----------------------------

// const   $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//         $linkEventos = document.querySelector(".eventos-flujo a");
//
// console.log($divsEventos);
//
// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}.`);
//     e.stopPropagation();
// }
//
// $divsEventos.forEach(div => {
//     // fase de BURBUJA, va del elemento interno al más externo
//     div.addEventListener("click",flujoEventos);
// });
//
// $linkEventos.addEventListener("click",(e) => {
//     alert("Hola soy Yo");
//     e.preventDefault(); //Evita el comportamiento por defecto (abrir enlace)
//     e.stopPropagation();
// });















//------------------------DOM: Delegación de eventos----------------------------------

// const   $divsEventos = document.querySelectorAll(".eventos-flujo div"),
//         $linkEventos = document.querySelector(".eventos-flujo a");
//
//
// function flujoEventos(e) {
//     console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}.`);
//     e.stopPropagation();
// }
//
// document.addEventListener("click",(e) => {
//     console.log("Click en ",e.target);
//
//     if (e.target.matches(".eventos-flujo div")) {
//         flujoEventos(e)
//     }
//
//     if (e.target.matches(".eventos-flujo a")){
//         alert("Hola soy Yo");
//         e.preventDefault();
//     }
// });
















//-------------------------------BOM: propiedades y eventos------------------------

// window.addEventListener("resize",(e)=>{
//     console.clear();
//     console.log("-----Evento resize------");
//     console.log(window.innerWidth);
//     console.log(window.innerHeight);
//     console.log(window.outerWidth);
//     console.log(window.outerHeight);
//     console.log(e);
// });
//
// window.addEventListener("scroll",(e) =>{
//     console.clear();
//     console.log("-----Evento scroll------");
//     console.log(window.scrollX);
//     console.log(window.scrollY);
//     console.log(e);
// });
//
// window.addEventListener("load", e => {
//     // Es LENTO porque carga tooodo lo de la página
//     // console.clear();
//     console.log("-----Evento load------");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);
// });
//
// document.addEventListener("DOMContentLoaded", e => {
//     // Es MÁS RÁPIDO, porque inicia cuando carga solo el documento HTML
//     // console.clear();
//     console.log("-----Evento ContentLoaded------");
//     console.log(window.screenX);
//     console.log(window.screenY);
//     console.log(e);
// });





















//--------------------------------BOM: Métodos---------------------------------

// const   $btnAbrir = document.getElementById("abrir-ventana"),
//         $btnCerrar = document.getElementById("cerrar-ventana"),
//         $btnImprimir = document.getElementById("imprimir-ventana");
//
// let ventana;
//
// $btnAbrir.addEventListener("click",e => {
//     ventana = window.open("https://www.google.com.mx");
// });
//
// $btnCerrar.addEventListener("click",e => {
//     // close(); // cierra la ventana actual
//     ventana.close();
// });
// $btnImprimir.addEventListener("click",e => {
//     window.print();
// });






















//---------------BOM: URL, HISTORIAL y NAVEGADOR--------------------------------

// console.log("_______________Objeto URL (location)_____________-");
// console.log(location);
// console.log(location.origin);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.href);
// console.log(location.hash);
// console.log(location.search);
// console.log(location.pathname);



// console.log("_____________Objeto Historial (history)______________");
// console.log(history);
// console.log(history.length);
// // Las siguientes tres instrucciones funcionan como las flechas del navegador
// console.log(history.forward(1));    // Avanzas una página
// console.log(history.back(1));       // Rtrocedes una página
// console.log(history.go(-1));        // te vas al historial -1


// console.log("________________Objeto Navegador (navigator)_____________");
// console.log(navigator);
// console.log(navigator.connection);
// console.log(navigator.geolocation);
// console.log(navigator.mediaDevices);
// console.log(navigator.mimeTypes);
// console.log(navigator.onLine);
// console.log(navigator.serviceWorker);
// console.log(navigator.Storage);
// console.log(navigator.usb);
// console.log(navigator.userAgent);
