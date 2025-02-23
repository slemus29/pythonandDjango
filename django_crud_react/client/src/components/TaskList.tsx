const TaskList = () => {
  const navigate = useNavigate()
    
    return(
        <div onClick={() => navigate('/tasks-create')}>Task List</div>
    )
}

export default TaskList