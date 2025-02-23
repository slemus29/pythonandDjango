import { useEffect, useState } from "react"
import TaskList from "../components/TaskList"
import TaskCard from "../components/TaskCard"
import { getAllTask } from "../services/task.api"
function TasksPage() {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        console.log('Pagina Cargada')
        async function loadTask() {
            const res = await getAllTask()
            setTasks(res.data)
            console.log(res)
        }
        loadTask()
    }, [])
    return <div className="grid grid-cols-3 gap-3">

      { 
        tasks.map(task => (
            <TaskCard task={task} />
        ))
      }
    </div>
  }
  
  export default TasksPage