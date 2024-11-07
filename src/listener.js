import { addListHandler, deleteAllHandler, doneAllHandler, listGroupHandler, textInputHandler } from "./handler.js";
import { addTaskBtn, deleteAll, doneAll, listGroup, textInput } from "./selectors.js";

const listenerGroup = () => {
  addTaskBtn.addEventListener("click", addListHandler);
  listGroup.addEventListener("click", listGroupHandler);
  textInput.addEventListener("keyup", textInputHandler);
  deleteAll.addEventListener("click", deleteAllHandler);
  doneAll.addEventListener("click", doneAllHandler);
};

export default listenerGroup;

