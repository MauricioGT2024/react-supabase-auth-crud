import { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router'
function Login() {
	const [email, setEmail] = useState('')
	const navigate = useNavigate()
	const handleSubmit = async (e) => {
		e.preventDefault()

		try {
			const result = await supabase.auth.signInWithOtp({
				email: email,
				options: {
					emailRedirectTo:
						'https://5173-idx-clase-16-1742746347789.cluster-ve345ymguzcd6qqzuko2qbxtfe.cloudworkstations.dev/',
				},
			})
			console.log(result)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		if (!supabase.auth.getUser()) {
			navigate('/')
		}
	}, [navigate])
	return (
		<div className='row pt-4'>
			<div className='col-md-4 offset-md-4'>
				<form
					onSubmit={handleSubmit}
					className='card card-body'
				>
					<input
						type='email'
						name='email'
						placeholder='youremail@site.com'
						onChange={(e) => setEmail(e.target.value)}
						className='form-control mb-2'
					/>
					<button className='btn btn-secondary '>Send</button>
				</form>
			</div>
		</div>
	)
}

export default Login
