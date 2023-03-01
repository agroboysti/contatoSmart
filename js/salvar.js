
async function salvar() {

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value

    console.log("Nome" + verificarNome(nome))
    console.log("Email" + verificarEmail(email))
    console.log("Tel" + verificarTel(tel))




    if (verificarEmail(email) == true && verificarTel(tel) && verificarNome(nome)) {
        let classes = window.document.getElementsByClassName("inputs")
        let dados = {}
        for (var i = 0; i < classes.length; i++) {
            dados[classes[i].id] = classes[i].value
            // console.log(classes[i].id + ": " + classes[i].value)
        }

        console.log(dados)


        let resp = await fetch("http://contatosmart.infinityfreeapp.com/backend/insert.php", {
            headers: {},
            method: "POST",
            body: JSON.stringify(dados)
        })

        window.location.href = "http://contatosmart.infinityfreeapp.com/front/Painel.html"

    } else {

        var Notificacao = "Dados "

        if (verificarNome(nome) == false) {
            Notificacao += "nome "
        }

        if (verificarEmail(email) == false) {
            Notificacao += "email "
        }


        if (verificarTel(tel) == false) {
            Notificacao += "telefone "
        }

        Notificacao += "não são validos!"

        var erro = document.getElementById('error')
        erro.innerHTML = Notificacao
    }






    // window.location.href = "http://contatosmart.infinityfreeapp.com/front/Painel.html";


}

function limpar() {
    document.getElementById('nome').value = ""
    document.getElementById('email').value = ""
    document.getElementById('tel').value = ""
}
