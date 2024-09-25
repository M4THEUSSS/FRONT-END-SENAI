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
    alert
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

    var livros = [true,"string",100,[]]
    console.log(livros[2])

    var listaProduto = ['manga','livros','revista','jornal']
    console.log(livros[2])
    listaProduto

   
}