import './board-column-task.css'

import {Link} from "react-router-dom";

function BoardColumnTask({task}) {
    return <Link to={`/tasks/${task.id}`} className="board-column-task">{task.title}</Link>
}

export default BoardColumnTask