async function deletar(id) {
    if (confirm("Você quer mesmo deletar este contato?")) {
        resp = await fetch(`http://contatosmart.infinityfreeapp.com/backend/delete.php?id=${id}`)
        window.location.href = "http://contatosmart.infinityfreeapp.com/front/Painel.html";
    }
}