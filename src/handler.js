import { addList, deleteList, doneList, editList, updateCompleteTaskTotal, updateTaskTotal } from "./lists.js";
import { listGroup } from "./selectors.js";

export const listGroupHandler = (event) => {
  const list = event.target.closest(".list");
  if (event.target.classList.contains("list-del-btn")) {
    deleteList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-edit-btn")) {
    editList(event.target.closest(".list").id);
  }
  if (event.target.classList.contains("list-done-check")) {
    doneList(event.target.closest(".list").id);
  }
};

export const addListHandler = () => {
  if (textInput.value.trim()) {
    addList(textInput.value);
  } else {
    alert("You should write a task");
  }
};

export const textInputHandler = (event) => {
  if (event.key === "Enter") {
    if (textInput.value.trim()) {
      addList(textInput.value);
    } else {
      alert("You should write a task");
    }
  }
};

export const deleteAllHandler = (listId) => {
  if (confirm("Are you sure to delete all lists ?")) {
    const lists = listGroup.querySelectorAll(".list");
    // console.log(lists);
    lists.forEach((list) => {
      list.classList.add("animate__animated", "animate__hinge");
      list.addEventListener("animationend", () => {
        list.remove();
        // updateTaskTotal();
        // updateCompleteTaskTotal();
      });
    });
  }
};

export const doneAllHandler = () => {
  const lists = listGroup.querySelectorAll(".list");
  lists.forEach((list) => {
    list.querySelector(".list-done-check").checked = true;
    doneList(list.id);
  });
};
