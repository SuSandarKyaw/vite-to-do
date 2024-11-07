import initialRender from "./initialRender";
import listenerGroup from "./listener";
import observer from "./observer";

class Todo{
    init(){
        observer()
        initialRender()
        listenerGroup()
    }
}

export default Todo;