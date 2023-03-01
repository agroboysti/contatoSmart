function verificarEmail(email) {
    const expEmail = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})$/i
    return expEmail.test(email)
}

function verificarTel(tel) {
    const expTel = /(\(?\d{2}\)?\s)?(\d{4,5}\-?\d{4})/g
    return expTel.test(tel)
}

function verificarNome(nome) {
    if (nome == "") {
        return false
    } else {
        return true
    }
}




