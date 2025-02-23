import {useForm} from 'react-hook-form'
import { createTask, deleteTask, getTask, updateTask } from '../services/task.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import toast from 'react-hot-toast'


function TaskFormPage() {
  const {register, handleSubmit, setValue, formState: {
    errors
  }} = useForm()
  const navigate = useNavigate()
  const params = useParams()
  const onSubmit = handleSubmit ( async data => {
    if(params.id) {
      await updateTask(params.id, data)
      toast.success('Task updated!', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: "#fff"
        }
      })
    } else {
      await createTask(data)
      toast.success('Task created!', {
        position: 'bottom-right',
        style: {
          background: '#101010',
          color: "#fff"
        }
      })
    }
    
    navigate('/tasks')
  })

  useEffect(() =>{
    const loadTask = async () => {
      if(params.id) {
        const {data} = await getTask(params.id)
        console.log(data)
        setValue('title', data.title)
        setValue('description', data.description)
      }
    }
    loadTask()
  })
  
  return (
    <div className='max-w-xl mx-auto'>
    <form action="" onSubmit={onSubmit}>
      <input className='bg-zinc-700 p-3 rounded-lg block w-full mb-3' type="text" placeholder="title" {...register('title', {required: true})} />
      { errors.title && <span>this fild is required</span>}
      <textarea name="description" rows={3} placeholder="description" {...register('description', {required: true})}></textarea>
      { errors.description && <span>this field is required</span>}
      <button className='bg-indigo-500 p-3 roudned-lg block w-full mt-3'>Save</button>
    </form>
   { params.id && <div className='flex justify-end'>
    <button className='bg-red-500 p-3 roudned-lg block w-48 mt-3' onClick={ ()=> {
      const accepted = window.confirm('Are you sure?')
      if(accepted) {
        deleteTask(params.id)
        toast.success('Task deleted!', {
          position: 'bottom-right',
          style: {
            background: '#101010',
            color: "#fff"
          }
        })
      navigate('/tasks')

      }
   }
      
      }>Delete</button></div>}
    </div>
  )
}

export default TaskFormPage