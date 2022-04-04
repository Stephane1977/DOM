/**
 * DOM & EVENTS
 */
// permet de selectionner un ou plusieurs éléments HTML H1
let h1 = document.getElementsByTagName("h1");
console.log(h1);

//permet de selectionner un ou plusiers class

let container = document.getElementsByClassName("container");
console.log(container);

let content = document.getElementById("content");

console.log(content);

//content.innerText = "C est modifié!";

//content.style.color = "yellow";

//content.style.backgroundColor = "red"

// innerText ne permet pas de traiter du HTML
// content.inner = "<strong> Je suis  strong</strong>";

content.animate([
    {transform: "rotate(360deg)"}
],{
    duration :2000,
    literations : Infinity
})

content.classList.add("success", "arrondi");

content.classList.remove("arrondi");


/**
 * 
 * selection d'element -saison 2
 */
//query selector() sectionnera UN seul élément et le premier trouvé.
// pad boucles pour lire un querySelectyor()

//selectionner un element HTML selon son TAG

//let element = document.querySelector("h1");

//Sélectionner un élémnent HTML selon sa classe

//let element = document.querySelector(".container");

//selectionner un élemnt HTML seon son ID
let element = document.querySelector("#content");

/**
 * querySelectorAll, selectionnera zero ou PLUSIEURS élements
 */
let elements = document.querySelectorAll('.container');
elements.forEach(element =>{
    element.style.backgroundColor ="blue";
});

//Sélectionne l'element HTML voulu

const button = document.querySelector("button");
//nous allons "ecouter si un clic est effectué sur ce bouton"
button.addEventListener("click",()=>{
//console.log("Tu viens de cliquer sur le bouton !");


let container = document.querySelector(".container:nth-child(1)");
//console.log(container);

//creation d'un nouvel élément HTML <p></p>
let paragraph = document.createElement("p")
paragraph.innerText = "Je suis le paragraphe";
paragraph.classList.add("texte");
container.appendChild(paragraph);
});