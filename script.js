
const enterButton = document.getElementById("enter-in")
const input = document.getElementById("input");
input.addEventListener("keydown", function (event){
    if (event.key === "Enter"){
        addToDo();
    }
})

enterButton.addEventListener("click", () =>{
    addToDo();
})

function addToDo(){

    const item = document.createElement("div");
    const text = document.createElement("div");
    const buttons = document.createElement("div");
    const checkButton = document.createElement("i");
    const deleteButton = document.createElement("i");

    text.textContent = input.value;
    item.className = "item";
    checkButton.className = "fas fa-check-square";
    deleteButton.className = "fas fa-trash";

    checkButton.style.color = "gray";
    deleteButton.style.color = "gray";

    checkButton.addEventListener("click", () =>{
        checkButton.style.color = "green";
        setTimeout(() => {  item.remove(); }, 3000);
        
    })
    buttons.appendChild(checkButton);

    deleteButton.addEventListener("click", () =>{
        item.remove();
    })
    buttons.appendChild(deleteButton);

    item.appendChild(text);
    item.appendChild(buttons);


    document.querySelector("#to_do_items").appendChild(item);
    input.value = "";



}
