function teste() {
    //document = refere ao documento html
    //getElement = buscar um elemento (id, class, tag)
    //.value = buscar o valor dentro do input
    var inputTeste = document.getElementById("inputTeste").value
    
    //.innerHtml = colocar algo dentro do elemento com tags
    //.innerText = cpçpcar algo dentro do elemento apenas texto
    document.getElementById("resposta").innerHTML += `
        <div class"elementos">
            ${inputTeste}
        </div>
    `
}
 
function repeticao(){
    
//enquanto(condição) faca fimEnquanto
    let contador = 0
    while(contador <=10){
        document.getElementById("resposta2").innerHTML += "*" 
        contador++
    }
}

function lista(){
    //var arrayComen = array()
    //arrayComen[0] = "info"

     
    var livros = [true, "string", 100, []]

    var listaProdutos = ['Documentos Cientificos', 'Mangá', 'Livros', 'Revistas', 'Apostilas']

    console.log(listaProdutos)

    listaProdutos.forEach(produto => {
        document.getElementById("resposta3").innerHTML += `
            <div class="elementos">
                ${produto}
            </div>

        `
    });
}