
function clicou() {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    let newLi = document.createElement("li");
    newLi.innerText = "item adicionado";

    ul.prepend(newLi);

    ul.children[0].append("(alterado)");

}






/* 

    */