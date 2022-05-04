const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = document.querySelector("#todo-form input");
const Button = document.querySelector("#toDo button");

const TODOS_KEY = "toDos";
let toDos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id!==parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo){
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const button = document.createElement("button");
  button.innerText="❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value="";
  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

function deleteToDoList(){
  remove(li);
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

function sexyFilter(item){
  return 
}