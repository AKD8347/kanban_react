const KEY = 'columns'

const initialColumnsData = [
    {
        id: 1,
        title: 'Backlog',
        tasks: []
    },
    {
        id: 2,
        title: 'Ready',
        tasks: []
    },
    {
        id: 3,
        title: 'In Progress',
        tasks: []
    },
    {
        id: 4,
        title: 'Finished',
        tasks: []
    }
]

export default {
    checkColumns() {
        if (!localStorage.getItem(KEY)) {
            localStorage.setItem(KEY, JSON.stringify(initialColumnsData))
        }
    },

    loadColumns() {
        return JSON.parse(localStorage.getItem(KEY)) || initialColumnsData
    },

    addTask(taskData) {
        const columns = this.loadColumns()

        const column = columns.find(columnItem => columnItem.id === taskData.columnId)
        column.tasks.push({
            id: Date.now().toString(),
            title: taskData.title,
            description: ''
        })

        localStorage.setItem(KEY, JSON.stringify(columns))
    },


    changeTaskPosition(taskData) {
        const columns = this.loadColumns()

        const prevColumn = columns.find(column => column.id === taskData.oldColumnId)

        let foundTask
        const newTasks = []
        prevColumn.tasks.forEach(task => {
            if (task.id === taskData.taskId) {
                foundTask = task
            } else {
                newTasks.push(task)
            }
        })
        prevColumn.tasks = newTasks

        const newColumn = columns.find(column => column.id === taskData.columnId)
        newColumn.tasks.push(foundTask)

        localStorage.setItem(KEY, JSON.stringify(columns))

        return columns
    },

    getTaskById(taskId) {
        const columns = this.loadColumns()

        for (let i = 0; i < columns.length; ++i) {
            const column = columns[i]

            for (let j = 0; j < column.tasks.length; ++j) {
                const task = column.tasks[j]

                if (task.id === taskId) {
                    return task
                }
            }
        }
    },

    updateTaskDescription(taskId, description) {
        const columns = this.loadColumns()

        for (let i = 0; i < columns.length; ++i) {
            const column = columns[i]

            for (let j = 0; j < column.tasks.length; ++j) {
                const task = column.tasks[j]

                if (task.id === taskId) {
                    task.description = description
                    localStorage.setItem(KEY, JSON.stringify(columns))
                    return
                }
            }
        }
    }
}