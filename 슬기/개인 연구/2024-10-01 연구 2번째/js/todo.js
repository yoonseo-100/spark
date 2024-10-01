interface ToDo {
    text: string;
    id: number;
}

const toDoForm = document.getElementById("todo-form") as HTMLFormElement;
const toDoInput = document.querySelector<HTMLInputElement>("#todo-form input")!;
const toDoList = document.getElementById("todo-list") as HTMLUListElement;
let toDos: ToDo[] = [];

const TODOS_KEY = "todos";

function saveToDos(): void {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const li = target.parentElement as HTMLLIElement;
    li.remove();
    
    // 로컬 스토리지에서 해당 할 일을 제거
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodo: ToDo): void {
    const li = document.createElement("li");
    li.id = newTodo.id.toString();
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event: SubmitEvent): void {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    
    const newTodoObj: ToDo = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
    const parsedToDos: ToDo[] = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
