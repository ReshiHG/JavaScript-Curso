(() => {
    const xhr = new XMLHttpRequest(),
        $xhr = document.querySelector("#xhr"),
        $fragment = document.createDocumentFragment();

    xhr.addEventListener("readystatechange", e => {
        // Solo se realizará el código cuando se haya cargado la petición del servidor (READY STATE COMPLETE)
        if (xhr.readyState === 4) {

            // console.log(xhr);

            // Se ejecuta el código, solo cuando ha tenido éxito la consulta
            if (xhr.status >= 200 && xhr.status < 300) {
                // console.log("La petición ha sido exitosa");

                let json = JSON.parse(xhr.responseText);
                // console.log(json);

                json.forEach(el => {
                    const $li = document.createElement("li");
                    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                    $fragment.appendChild($li);
                });

                $xhr.appendChild($fragment);

                // Se ejecuta este código cuando la petición no fue exitosa
            } else {
                // console.log("La petición no ha tenido éxito");
                let message = xhr.statusText || "Algo salió mal :c";
                $xhr.innerHTML = `Error ${xhr.status}: ${message}`
            }
        }
    });

    // Obtiene datos del servidor
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    // Envia datos al servidor
    xhr.send();

})();









// -------------------------Peticiones con FETCH-------------------------------

(() => {
    const $fetch = document.querySelector("#fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            // console.log(res);
            return res.ok // Si todo sale bien
                ?
                res.json() // se envia la promesa al siguiente "then"
                :
                promise.reject(res); // Si no, se rechaza la promesa y ejecuta el "Catch"
        })
        .then(json => {
            // console.log(json);
            // $fetch.innerHTML = json;
            json.forEach(el => {
                const $li = document.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });
            $fetch.appendChild($fragment);
        })
        .catch(err => {
            // console.log("Desde el fetch error",err);
            let message = err.statusText || "Ocurrió un error";
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            // console.log("Esto se ejecutará independientemente de que ocurra o no un error");
        });
})();




// --------------------------FETCH con Async-Await------------------------------

(() => {
    const $fetchAsync = document.querySelector("#fetch-async"),
        $fragment = document.createDocumentFragment();

    async function getData() {
        try {
            let res = await fetch("https://jsonplaceholder.typicode.com/users"),
                json = await res.json();

            // console.log(res, json);

            if (!res.ok) throw {
                status: res.status,
                statusText: res.statusText
            };

            json.forEach((el) => {
                const $li = document.createElement("li");

                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $fetchAsync.appendChild($fragment);

        } catch (e) {
            console.log(e);
            let message = e.statusText || "Ocurrió un error";
            $fetchAsync.innerHTML = `Error ${e.status}: ${message}`;
        } finally {
            // console.log("Esto se ejecutará independientemente de si entra en TRY o CATCH");
        }
    }

    getData();


})();




//----------------------------------Axios--------------------------------------
// IMPORTANTE: Para usar axios de debe instalar axios o poner un script en HTML
(() => {
    const $axios = document.querySelector("#axios"),
        $fragment = document.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        // console.log(res);
        let json = res.data;

        json.forEach((el) => {
            const $li = document.createElement("li");

            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch((err) => {
        // console.log("Estamos en el catch de Axios",err);
        console.log(err.response);
        let message = err.response.statusText || "Ocurrió un error";
        $axios.innerHTML = `Error ${err.response.status}: ${message}`;
    })
    .finally(() => {
        console.log("Esto se ejecutara intependientemente del resultado de axios");
    });

})();


//--------------------------------Axios Async-Await-----------------------------

(() => {
    const   $axiosAsync = document.querySelector("#axios-async"),
            $fragment = document.createDocumentFragment();

    async function getData(){
        try{
            let res = await axios.get("https://jsonplaceholder.typicode.com/users"),
                json = await res.data;
                // console.log(res,json);
            json.forEach((el) => {
                const $li = document.createElement("li");

                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $axiosAsync.appendChild($fragment);
        } catch (err) {
            console.log(err.response);
            let message = err.response.statusText || "Ocurrió un error";
            $axiosAsync.innerHTML= `Error ${err.response.status}: ${message}`;
        } finally {
            console.log("Esto se ejecutará independientemente del TRY CATCH del axios Async");
        }
    }

    getData();

})();
