import './board.css'
import BoardColumn from "./components/board-column/BoardColumn";

import {useEffect} from "react";

import {loadColumns, addTask, changeTaskPosition} from "../../store/features/boardSlice";
import {useDispatch, useSelector} from "react-redux";

function Board() {
    const dispatch = useDispatch()
    const columns = useSelector(state => state.board.columns)

    useEffect(() => {
        dispatch(loadColumns())
    }, [])

    const addNewTaskHandler = (newTaskData) => {
        dispatch(addTask(newTaskData))
        dispatch(loadColumns())
    }

    const changeTaskPositionHandler = (taskData) => {
        dispatch(changeTaskPosition(taskData))
    }

    const getPrevColumn = (i) => {
        if (i === 0) {
            return null
        }

        return columns[i - 1]
    }

    return <div className="board">
        {columns.map((column, i) =>
            <BoardColumn
                key={i}
                columnData={column}
                prevColumn={getPrevColumn(i)}
                onAddNewTask={addNewTaskHandler}
                onChangeTaskPosition={changeTaskPositionHandler}/>
        )
        }
    </div>
}

export default Board