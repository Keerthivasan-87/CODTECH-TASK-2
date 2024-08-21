var pop=document.querySelector(".popup-overlay")
var pop2=document.querySelector(".popup-box")
var btn=document.getElementById("add-pop")
btn.addEventListener("click",function(){
    pop.style.display="block"
    pop2.style.display="block"
})


//cancel but
var cancel=document.getElementById("button-input2")
cancel.addEventListener("click",function(event){
    event.preventDefault()
    pop.style.display="none"
    pop2.style.display="none"
})
//select book container
var container=document.querySelector(".container")
var add=document.getElementById("button")
var booktitle=document.getElementById("box")
var bookauthor=document.getElementById("box-1")
var text=document.getElementById("book-description-input")


add.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${booktitle.value}</h2> <h3>${bookauthor.value}</h3>
    <p>${text.value}</p> <button onclick='del(event)'>delete</button>`
    container.append(div)
    pop.style.display="none"
    pop2.style.display="none"
})
//delete button

function del(event){
     event.target.parentElement.remove()
}