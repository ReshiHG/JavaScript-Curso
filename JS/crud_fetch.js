const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.querySelector("#crud-template").content,
    $fragment = d.createDocumentFragment();



d.addEventListener("DOMContentLoaded", getAllSCP);

d.addEventListener("submit", e => {
    if (e.target === $form) {
        e.preventDefault();

        if (!e.target.id.value) {   // Si el id no existe, se CREA un nuevo objeto
            fetch("http://localhost:5000/scps", {
                    method: "POST",
                    body: JSON.stringify({
                        number: e.target.numeroSCP.value,
                        name: e.target.nombreSCP.value,
                        class: e.target.claseSCP.value
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(res => {
                    return res.ok
                    ?
                    limpiarForm()
                    :
                    promise.reject(res)
                })
                .catch(err => {
                    console.log(err);
                    $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
                })
                .finally(console.log("Se hizo un POST"));

        } else {                    // Si el id existe, se MODIFICA el objeto
            fetch(`http://localhost:5000/scps/${e.target.id.value}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        number: e.target.numeroSCP.value,
                        name: e.target.nombreSCP.value,
                        class: e.target.claseSCP.value
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
            .then(res => {
                return res.ok
                ?
                limpiarForm()
                :
                promise.reject(res)
            })
            .catch(err => {
                console.log(err);
                $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
            })
            .finally(console.log("Se ejecutun PUT"))
        }
    }
});

d.addEventListener("click", e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar SCP";
        $form.numeroSCP.value = e.target.dataset.number;
        $form.nombreSCP.value = e.target.dataset.name;
        $form.claseSCP.value = e.target.dataset.class;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        fetch(`http://localhost:5000/scps/${e.target.dataset.id}`, {
            method: 'DELETE',
        })
        .then(res => {
            return res.ok
            ?
            console.log(res)
            :
            promise.reject(res)
        })
        .catch(err => {
            console.log(err);
            $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
        })
        .finally(console.log("Se hizo un DELETE"))
    }
});

function getAllSCP() {
    fetch(`http://localhost:5000/scps`)
        .then(res => {
            return res.ok // Si todo sale bien
                ?
                res.json() // se envia la promesa al siguiente "then"
                :
                promise.reject(res); // Si no, se rechaza la promesa y ejecuta el "Catch"
        })
        .then(json => {
            // console.log(json);
            json.forEach(el => {
                $template.querySelector(".SCP_Number").textContent = el.number;
                $template.querySelector(".SCP_Name").textContent = el.name;
                $template.querySelector(".SCP_Class").textContent = el.class;
                $template.querySelector(".edit").dataset.id = el.id;
                $template.querySelector(".edit").dataset.number = el.number;
                $template.querySelector(".edit").dataset.name = el.name;
                $template.querySelector(".edit").dataset.class = el.class;
                $template.querySelector(".delete").dataset.id = el.id;
                $template.querySelector(".delete").dataset.number = el.number;
                $template.querySelector(".delete").dataset.name = el.name;
                $template.querySelector(".delete").dataset.class = el.class;

                let $clone = d.importNode($template, true);
                $fragment.appendChild($clone);
            });
            $table.querySelector("tbody").appendChild($fragment);
        })
        .catch(err => {
            console.log(err);
            $table.insertAdjacentHTML("afterend",`<p><b>${err}</b></p>`);
        })
        .finally(console.log("Se ejecuto el GET"));
}

function limpiarForm (){
    $title.textContent = "Agregar SCP";
    $form.numeroSCP.value = null;
    $form.nombreSCP.value = null;
    $form.claseSCP.value = null;
    $form.id.value = null;
};
