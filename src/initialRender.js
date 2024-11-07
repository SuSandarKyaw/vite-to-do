import { addList, tasks } from "./lists";

const initialRender = () => {
    tasks.forEach(task => addList(task))
}

export default initialRender;