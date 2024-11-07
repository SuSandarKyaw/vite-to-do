import { updateCompleteTaskTotal, updateTaskTotal } from "./lists";
import { listGroup } from "./selectors"

const observer = () => {


    const job = () => {
        // console.log("Change")
        updateTaskTotal()
        updateCompleteTaskTotal()
    }
    const observerOptions = {
        attributes : true,
        childList: true,
        subtree: true,
      };
    const listGroupObserver = new MutationObserver(job)
    listGroupObserver.observe(listGroup,observerOptions)
}

export default observer