
async function mostrar() {
  setTimeout(async () => {
    // pegar dados no back
    let resp = await fetch("http://contatosmart.infinityfreeapp.com/backend/read.php", {});



    // extrair dados da resposta
    var dados = await resp.json();


    // pego o elemento tabela
    var tab = document.getElementById("lista")

    tab.innerHTML = ""

    var linha = `<tr>`
    linha += `<td>ID</td>`
    linha += `<td>Nome</td>`
    linha += `<td>Telefone</td>`
    linha += `<td>Email</td>`
    linha += `<td>Ações</td>`
    linha += `</tr>`




    for (let item of dados) {
      // adiciono uma linha na tabelas
      linha += `<tr>`
      linha += `<td>${item.id}</td>`
      linha += `<td >${item.nome}</td>`
      linha += `<td>${item.tel}</td>`
      linha += `<td>${item.email}</td>`
      linha += `<td>`
      linha += `<a href="http://contatosmart.infinityfreeapp.com/front/edit.html?id=${item.id}">Edit</a>`
      linha += `<button onclick="deletar(${item.id})">Delete</button>`
      linha += `</tr>`
    }
    console.log(linha)
    tab.innerHTML += linha

    // para cada item...

  }, 500)
}

window.onload = mostrar
