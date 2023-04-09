import './app-footer.css'
import {useSelector} from "react-redux";

function AppFooter() {
    const activeTasks = useSelector(state => {
        const columns = state.board.columns
        return columns.find(column => column.id === 1)?.tasks.length || 0
    })

    const finishedTasks = useSelector(state => {
        const columns = state.board.columns
        return columns.find(column => column.id === 4)?.tasks.length || 0
    })

    return <footer className="app-footer">
        <div className="app-footer__section">
            <div className="app-footer__item">Active tasks: {activeTasks}</div>
            <div className="app-footer__item">Finished tasks: {finishedTasks}</div>
        </div>
        <div className="app-footer__section">
            <div className="app-footer__item">Kanban board by NAME, YEAR</div>
        </div>
    </footer>
}

export default AppFooter