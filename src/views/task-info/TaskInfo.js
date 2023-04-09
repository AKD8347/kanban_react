import './task-info.css'

import {useState} from "react";
import {useParams} from "react-router";
import api from "../../api";

import CloseIcon from '../../assets/img/close-icon.svg'
import {Link} from "react-router-dom";

const DEFAULT_TASK_DESCRIPTION = 'This task has no description'

function TaskInfo() {
    const {taskId} = useParams()

    const task = api.getTaskById(taskId)

    const [isEditing, setIsEditing] = useState(false)
    const [taskDescription, setTaskDescription] = useState(task.description || DEFAULT_TASK_DESCRIPTION)

    const openEditingDescription = () => {
        setIsEditing(true)
    }

    const changeTaskDescriptionHandler = (e) => {
        setTaskDescription(e.target.value)
    }

    const updateTaskDescription = () => {
        api.updateTaskDescription(taskId, taskDescription)
        if (!taskDescription) {
            setTaskDescription(DEFAULT_TASK_DESCRIPTION)
        }
        setIsEditing(false)
    }

    return <div className="task-info">
        <Link to="/" className="task-info__close">
            <img src={CloseIcon}/>
        </Link>

        <div className="task-info__content">
            <div className="task-info__title">{task.title}</div>
            {
                !isEditing ?
                    <div className="task-info__description" onClick={openEditingDescription}>{taskDescription}</div>
                    :
                    <>
                        <textarea className="task-info__description task-info__description--textarea"
                                  value={taskDescription} onChange={changeTaskDescriptionHandler}>
                        </textarea>
                        <button className="task-info__btn" onClick={updateTaskDescription}>Submit</button>
                    </>
            }
        </div>
    </div>
}

export default TaskInfo