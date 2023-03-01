async function addinput() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var data = url.searchParams.get("id");

    let resp = await fetch(`http://contatosmart.infinityfreeapp.com/backend/select.php?id=${data}`)

    resp = await resp.json()

    // for (let i = 0; resp.length > i; i++) {
    //     window.document.getElementById(`${resp.id}`)
    // }

    window.document.getElementById("nome").value = resp.nome
    window.document.getElementById("tel").value = resp.tel
    window.document.getElementById("email").value = resp.email

}

window.onload = addinput