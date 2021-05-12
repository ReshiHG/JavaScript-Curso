const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.querySelector("#crud-template").content,
    $fragment = d.createDocumentFragment();

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async e => {

    if (e.target === $form) {

        e.preventDefault();

        if (!e.target.id.value) {
            //CREATE - Post
            try {
                const res = await axios.post("http://localhost:5000/scps", {
                    number: e.target.numeroSCP.value,
                    name: e.target.nombreSCP.value,
                    class: e.target.claseSCP.value
                });

                limpiarForm();

            } catch (err) {
                console.log(err);
                $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
            } finally {
                console.log("Se ejecuto un POST");
            }
        } else {
            //UPDATE - Put
            try {
                const res = await axios.put(`http://localhost:5000/scps/${e.target.id.value}`, {
                    number: e.target.numeroSCP.value,
                    name: e.target.nombreSCP.value,
                    class: e.target.claseSCP.value
                });
                limpiarForm();
            } catch (err) {
                console.log(err);
                $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
            } finally {
                console.log("Se ejecuto un PUT");
            }
        }
    }
})

d.addEventListener("click", async e => {
    if (e.target.matches(".edit")) {
        $title.textContent = "Editar SCP";
        $form.numeroSCP.value = e.target.dataset.number;
        $form.nombreSCP.value = e.target.dataset.name;
        $form.claseSCP.value = e.target.dataset.class;
        $form.id.value = e.target.dataset.id;
    }

    if (e.target.matches(".delete")) {
        let isDelete = confirm(`¿Deseas eliminar el SCP-${e.target.dataset.number}?`);

        if (isDelete) {
            // DELETE - DELETE
            try {
                const res = await axios.delete(`http://localhost:5000/scps/${e.target.dataset.id}`);
                limpiarForm();
            } catch (err) {
                console.log(err);
                $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
            } finally {
                console.log("Se ejecuto un DELETE");
            }
        }
    }
})

async function getAll() {
    try {
        const res = await axios.get("http://localhost:5000/scps"),
            datos = await res.data;

        if (res.statusText !== "OK") promise.reject(res);

        datos.forEach(el => {
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

    } catch (err) {
        console.log(err);
        $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);

    } finally {
        console.log("Se ejecuto un GET");
    }
}

function limpiarForm() {
    $title.textContent = "Agregar SCP";
    $form.numeroSCP.value = null;
    $form.nombreSCP.value = null;
    $form.claseSCP.value = null;
    $form.id.value = null;
}
