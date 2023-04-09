import {
    createBrowserRouter,
} from "react-router-dom";

import Board from "../views/board/Board";
import TaskInfo from "../views/task-info/TaskInfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Board/>
    },
    {
        path: '/tasks/:taskId',
        element: <TaskInfo />
    }
]);

export default router