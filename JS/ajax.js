// (() => {
//     const   xhr = new XMLHttpRequest(),
//             $xhr = document.querySelector("#xhr"),
//             $fragment = document.createDocumentFragment();
//
//     xhr.addEventListener("readystatechange", e => {
//         // Solo se realizará el código cuando se haya cargado la petición del servidor (READY STATE COMPLETE)
//         if (xhr.readyState === 4) {
//
//             // console.log(xhr);
//
//             // Se ejecuta el código, solo cuando ha tenido éxito la consulta
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 // console.log("La petición ha sido exitosa");
//
//                 let json = JSON.parse(xhr.responseText);
//                 // console.log(json);
//
//                 json.forEach(el => {
//                     const $li = document.createElement("li");
//                     $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//                     $fragment.appendChild($li);
//                 });
//
//                 $xhr.appendChild($fragment);
//
//             // Se ejecuta este código cuando la petición no fue exitosa
//             } else {
//                 // console.log("La petición no ha tenido éxito");
//                 let message = xhr.statusText || "Algo salió mal :c";
//                 $xhr.innerHTML = `Error ${xhr.status}: ${message}`
//             }
//         }
//     });
//
//     // Obtiene datos del servidor
//     xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
//
//     // Envia datos al servidor
//     xhr.send();
//
// })();
//
//
//
//
//
//
//
//
//
//
// // -------------------------Peticiones con FETCH-------------------------------
//
// (() => {
//     const   $fetch = document.querySelector("#fetch"),
//             $fragment = document.createDocumentFragment();
//
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         // console.log(res);
//         return res.ok           // Si todo sale bien
//         ? res.json()            // se envia la promesa al siguiente "then"
//         : Promise.reject(res);  // Si no, se rechaza la promesa y ejecuta el "Catch"
//     })
//     .then(json => {
//         // console.log(json);
//         // $fetch.innerHTML = json;
//         json.forEach(el => {
//             const $li = document.createElement("li");
//             $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
//             $fragment.appendChild($li);
//         });
//     })
//     .catch(err => {
//         // console.log("Desde el fetch error",err);
//         let message = err.statusText || "Ocurrió un error";
//         $fetch.innerHTML = `Error ${err.status}: ${message}`;
//     })
//     .finally(() => {
//         console.log("Esto se ejecutará independientemente de que ocurra o no un error");
//     });
// })();

// -------------------------Peticiones con FETCH SUPERHEROES API-------------------------------
    const   $fetchSH = document.querySelector("#fetch-sh"),
            $fragment2 = document.createDocumentFragment();

    fetch(`https://reqres.in/api/users`)
    .then(res => res.json())
    .then(data => console.log(data))
