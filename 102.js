// console.log(document)

// const mainheading = document.getElementById("main-heading")
// mainheading.textContent = "this is wooooooo ";
// console.log(mainheading.textContent)

// const mainheading = document.getElementById("main-heading")
// mainheading.innerText = " is wooooooo ";
// console.log(mainheading.innerText)


// const mainheading = document.querySelector("div.headline h1")
// mainheading.style.color = "blue"
// mainheading.style.backgroundColor = "red"

// const hello = document.querySelector("a")
// console.log(hello.getAttribute("href"))
// hello.setAttribute("href") = "pexel.com"
// console.log(hello.getAttribute("href"))

// const array = document.querySelectorAll("a")
// for (let i = 0; i < array.length; i++) {
//     const change = array[i];
//     change.style.backgroundColor = "white"
//     change.style.color = "black"
//     change.style.borderRadius = "0.5rem"
//     change.style.padding = "2px"
//  }

// for (let navitem of array) {
//     navitem.style.backgroundColor = "white"
//     navitem.style.color = "black"
//     navitem.style.borderRadius = "0.5rem"
//     navitem.style.padding = "2px"
// }


// const btn = document.querySelector(".btn-headline")

// function clickme(){
//   console.log("you clicked me ! ")
// }

// btn.addEventListener("click", clickme)


const todoForm = document.querySelector(".form-todo")
const todoInput = document.querySelector(".form-todo input[type='text']")
const todoList = document.querySelector(".todo-list")
console.log(todoInput)
todoForm.addEventListener("submit" , (e)=>{
   e.preventDefault()
   const newTodoText = todoInput.value ;
   const newLi = document.createElement("li")
   const newInnerHtml =  `
   <span class="text">${newTodoText}</span>
   <div class="todo-btns">
       <button class="todo-btn delete ">delete</button>
       <button class="todo-btn done">done</button>
   </div>
`
newLi.innerHTML = newInnerHtml
todoList.append(newLi)
   todoInput.value = ""
   
})

todoList.addEventListener("click", (e)=>{
if(e.target.classList.contains("delete")){
  const targetedLi = e.target.parentNode.parentNode
  targetedLi.remove() 


}
if(e.target.classList.contains("done")){
    const LiSpan = e.target.parentNode.previousElementSibling;
      LiSpan.style.textDecoration = "Line-through"
  }}
)