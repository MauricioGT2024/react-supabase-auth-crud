import { useTasks } from '../context/TaskContext'

function TaskCard({ task }) {
	const { deleteTask, updateTask } = useTasks()
	const handleDelete = () => {
		deleteTask(task.id)
	}

	const handleToggleDone = () => {
		updateTask(task.id, { done: !task.done })
	}
	return (
		<div className='card card-body'>
			<h1 className='h5'>
				{`${task.id}. ${task.name}`}
				<br />
				{task.done ? 'Done' : 'To do'}
			</h1>
			<p>{task.done ? '✔️' : 'To do ❌'}</p>
			<div className='ms-auto'>
				<button
					className='btn btn-danger btn-sm me-1'
					onClick={() => handleDelete()}
				>
					Delete
				</button>
				<button
					className='btn btn-secondary btn-sm'
					onClick={() => handleToggleDone()}
				>
					Done
				</button>
			</div>
		</div>
	)
}

export default TaskCard
