import './board-column.css'

import {useState} from "react";

import BoardColumnTask from "../board-column-task/BoardColumnTask";
import AppSelect from "../../../../components/app-select/AppSelect";

import PlusIcon from '../../../../assets/img/plus-icon.svg'


function BoardColumn({columnData, prevColumn, onAddNewTask, onChangeTaskPosition}) {
    const [isCreating, setIsCreating] = useState(false)
    const [newTask, setNewTask] = useState('')
    const [isAdding, setIsAdding] = useState(false)

    const isBacklog = columnData.id === 1

    const submitHandler = (e) => {
        e.preventDefault()

        if (!isBacklog) {
            setIsAdding(true)
            return
        }

        if (isCreating && newTask.length) {
            onAddNewTask({
                title: newTask,
                columnId: columnData.id
            })

            setNewTask('')
        }

        setIsCreating(!isCreating)
    }

    const inputNewTaskHandler = (e) => {
        setNewTask(e.target.value)
    }

    const changeTaskPositionHandler = (taskId) => {
        setIsAdding(false)
        onChangeTaskPosition({
            taskId,
            columnId: columnData.id,
            oldColumnId: prevColumn.id
        })
    }

    return <div className="board-column">
        <div className="board-column__title">{columnData.title}</div>
        <div className="board-column__content">
            {columnData.tasks.map((task, i) => <BoardColumnTask task={task} key={i}/>)}

            <form className="board-column__form" onSubmit={submitHandler}>
                {isCreating &&
                    <div className="board-column__input-wrapper">
                        <input data-testid={`${columnData.title}-input`} className="board-column__input" value={newTask}
                               onChange={inputNewTaskHandler}></input>
                    </div>
                }
                {!isAdding ?
                    <button data-testid={`${columnData.title}-btn`}
                            className={['board-column__btn', isCreating ? 'board-column__btn--adding' : ''].join(' ')}
                            onClick={submitHandler}
                            disabled={prevColumn && !prevColumn.tasks.length}>
                        {!isCreating && <img src={PlusIcon}/>}
                        <span>{isCreating ? 'Submit' : 'Add card'}</span>
                    </button>
                    :
                    <AppSelect options={prevColumn.tasks} onChange={changeTaskPositionHandler}></AppSelect>
                }
            </form>
        </div>
    </div>
}

export default BoardColumn