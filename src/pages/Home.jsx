import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
function Home() {
	const [showTaskDone, setshowTaskDone] = useState(false)
	const navigate = useNavigate()
	const user = supabase.auth.getUser()
	useEffect(() => {
		if (!user) {
			navigate('/login')
		}
	}, [navigate])
	return (
		<div className='row pt-4'>
			<div className='col-md-4 offset-md-4'>
				<TaskForm />
				<header className='d-flex justify-content-around my-3'>
					<span className='h5'>
						{showTaskDone ? 'Tasks Done' : 'Tasks to do'}
					</span>
					<button
						className='btn btn-primary'
						onClick={() => setshowTaskDone(!showTaskDone)}
					>
						{showTaskDone ? 'Show tasks to do' : 'Show tasks Done'}
					</button>
				</header>
				<TaskList done={showTaskDone} />
			</div>
		</div>
	)
}

export default Home
