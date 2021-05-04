const d = document,
    $table = d.querySelector(".crud-table"),
    $form = d.querySelector(".crud-form"),
    $title = d.querySelector(".crud-title"),
    $template = d.querySelector("#crud-template").content,
    $fragment = d.createDocumentFragment();

fetch("http://localhost:5000/scps", {
        method: "POST",
        body: JSON.stringify({
            number: 666,
            name: "Lucy",
            class: "Keter"
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
