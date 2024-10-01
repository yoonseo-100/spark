"use strict";
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const sidebar = document.getElementById("sidebar");
const toggleSidebarBtn = document.querySelector(".toggle-sidebar");
let toDos = [];
// 할일 삭제 함수
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}
// 할일 완료/취소 토글 함수
function toggleComplete(event) {
    const checkbox = event.target;
    const text = checkbox.nextElementSibling;
    if (checkbox.checked) {
        text.style.textDecoration = "line-through";
        text.style.color = "#888";
    }
    else {
        text.style.textDecoration = "none";
        text.style.color = "#000";
    }
}
// 할일 리스트에 표시 함수
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id.toString();
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    checkbox.addEventListener("change", toggleComplete);
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "삭제";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", deleteToDo);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
}
// 할일 제출 시 처리 함수
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = {
        text: todoInput.value,
        id: Date.now(),
    };
    toDos.push(newTodo);
    todoInput.value = "";
    paintToDo(newTodo);
    saveToDos();
    showSidebar();
}
// 할일 저장 함수
function saveToDos() {
    localStorage.setItem("todos", JSON.stringify(toDos));
}
// 사이드바 보이기 함수
function showSidebar() {
    sidebar.classList.add("show");
}
// 사이드바 숨기기 함수
function hideSidebar() {
    sidebar.classList.remove("show");
}
// 사이드바 숨기기 이벤트 리스너
if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", hideSidebar);
}
// 할일 폼 제출 시 이벤트 리스너
if (todoForm) {
    todoForm.addEventListener("submit", handleToDoSubmit);
}
// 로컬스토리지에 저장된 할일을 불러오기
const savedToDos = localStorage.getItem("todos");
if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    showSidebar();
}
