async function buscar() {
    setTimeout(async () => {
        let busca = document.getElementById(`buscar`).value



        // pegar dados no back
        let resp = await fetch("http://contatosmart.infinityfreeapp.com/backend/buscar.php", {
            headers: {},
            method: "POST",
            body: JSON.stringify({ buscar: busca })
        });






        //extrair dados da resposta
        var dados = await resp.json();

        //pego o elemento tabela
        var tab = document.getElementById("lista")

        tab.innerHTML = ""


        var linha = `<tr>`
        linha += `<td>ID</td>`
        linha += `<td>Nome</td>`
        linha += `<td>Telefone</td>`
        linha += `<td>Email</td>`
        linha += `<td>Ações</td>`
        linha += `</tr>`

        //para cada item...
        for (let item of dados) {
            //adiciono uma linha na tabela
            linha += `<tr>`
            linha += `<td>${item.id}</td>`
            linha += `<td>${item.nome}</td>`
            linha += `<td>${item.tel}</td>`
            linha += `<td>${item.email}</td>`
            linha += `<td>`
            linha += `<a href="http://contatosmart.infinityfreeapp.com/front/edit.html?id=${item.id}">Edit</a>`
            linha += `<button onclick="deletar(${item.id})">Delete</button>`
            linha += `</td>`
            linha += `</tr>`
        }
        tab.innerHTML += linha
    }, 1000)
}