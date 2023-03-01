async function atualizar() {


    var url_string = window.location.href;
    var url = new URL(url_string);
    var data = url.searchParams.get("id");
    let classes = window.document.getElementsByClassName("inputs")
    let dados = {}

    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let tel = document.getElementById('tel').value


    if (verificarEmail(email) == true && verificarTel(tel) && verificarNome(nome)) {
        for (var i = 0; i < classes.length; i++) {
            dados[classes[i].id] = classes[i].value
            // console.log(classes[i].id + ": " + classes[i].value)
        }




        let resp = await fetch(`http://contatosmart.infinityfreeapp.com/backend/update.php?id=${data}`, {
            headers: {},
            method: "POST",
            body: JSON.stringify(dados)
        })

        window.location.href = "http://contatosmart.infinityfreeapp.com/front/Painel.html";


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
}
