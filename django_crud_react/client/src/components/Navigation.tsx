import {Link} from 'react-router-dom'
function Navigation() {
    return (
      <div className='flex justify-between py3'>
        <Link to={"/tasks"}>Create tasks
        <h1 className='font-bold text-3xl mb-4'>
            Task App
        </h1>
        </Link>
        <button className='bg-indigo-500 px-3 py-2 rounded-lg'>
        <Link to={"/tasks-create"}>Create tasks</Link>
        </button>
      </div>
    )
  }
  
  export default Navigation