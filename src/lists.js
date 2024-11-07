import Swal from "sweetalert2";
import {
  completedTaskTotal,
  listGroup,
  taskTotal,
  templateList,
  textInput,
} from "./selectors.js";
import { v4 as uuidv4 } from "uuid";

export const tasks = ["learn js", "memorize chinese vocab", "sleep early"];
export const updateTaskTotal = () => {
  //count
  const lists = document.querySelectorAll(".list");
  taskTotal.innerText = lists.length;
};
export const updateCompleteTaskTotal = () => {
  //count
  const lists = document.querySelectorAll(".list input:checked");
  completedTaskTotal.innerText = lists.length;
};

//create new lists
export const createNewList = (currentTask) => {
  const list = templateList.content.cloneNode(true);
  list.querySelector(".list").id = "list" + uuidv4();
  list.querySelector(".list-task").innerText = currentTask;
  return list;
};

export const deleteList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      currentList.classList.add("animate__animated", "animate__hinge");
      currentList.addEventListener("animationend", () => {
        currentList.remove();
        // updateTaskTotal();
        // updateCompleteTaskTotal();
      });
    }
  });
};

export const editList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  listEditBtn.setAttribute("disabled", true);
  listDoneCheck.setAttribute("disabled", true);

  const newTaskInput = document.createElement("input");
  newTaskInput.className =
    " border border-stone-950 font-mono px-2 py-1 w-[180px] focus-visible:outline-none";
  newTaskInput.value = listTask.innerText;
  listTask.after(newTaskInput);
  newTaskInput.focus();
  listTask.classList.add("hidden");

  newTaskInput.addEventListener("blur", () => {
    listEditBtn.removeAttribute("disabled");
    listDoneCheck.removeAttribute("disabled");
    // console.log("finish");
    listTask.innerText = newTaskInput.value;
    listTask.classList.remove("hidden");
    newTaskInput.remove();
  });
};

export const doneList = (listId) => {
  const currentList = document.querySelector(`#${listId}`);
  const listDoneCheck = currentList.querySelector(".list-done-check");
  const listTask = currentList.querySelector(".list-task");
  const listEditBtn = currentList.querySelector(".list-edit-btn");
  // updateCompleteTaskTotal();
  listTask.classList.toggle("line-through");
  currentList.classList.add("duration-200");
  currentList.classList.toggle("opacity-30");
  currentList.classList.toggle("scale-90");
  if (listDoneCheck.checked) {
    listEditBtn.setAttribute("disabled", true);
  } else {
    listEditBtn.removeAttribute("disabled");
  }
};

export const addList = (list) => {
  const newTextInput = textInput.value;
  listGroup.append(createNewList(list));
  textInput.value = "";
  // updateTaskTotal();
};
