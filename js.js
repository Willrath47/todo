'use strict'

console.log("hehexd");

const boton = document.querySelector('.boton-submit');
const input = document.querySelector('.input');

const todoItems = document.querySelector('.to-do-items');



input.addEventListener("keydown", function (event) 
{if(event.key==="Enter")
    addItem();
    console.log("bruh");

})
 boton.addEventListener("click", addItem);

    
   


function addItem(){
    var divParent =document.createElement("div");
    var divChild =document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");

    divParent.className="item-texto";
    divChild.className="item";
    divParent.innerHTML='<div>'+input.value+'<div>';
    document.body.appendChild(divParent);
    document.body.appendChild(divChild);


    divChild.appendChild(checkIcon)
    checkIcon.className="fa-solid fa-check";
    checkIcon.style.color="gray";
    checkIcon.addEventListener("click",function(){
        checkIcon.style.color="green";

    })
    
    trashIcon.className="fa-solid fa-trash-can";
    trashIcon.style.color="darkgray";
    trashIcon.addEventListener("click",function(){
        divParent.remove();

    })
    divChild.appendChild(trashIcon)
    divParent.appendChild(divChild);
    todoItems.appendChild(divParent);

    input.value='';    
}
