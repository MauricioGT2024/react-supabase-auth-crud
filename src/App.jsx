import './App.css'
import { useEffect } from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client'
import { TaskContextProvider } from './context/TaskContext'
import Navbar from './components/Navbar'

function App() {
	const navigate = useNavigate()

	useEffect(() => {
		supabase.auth.onAuthStateChange((event, session) => {
			if (!session) {
				navigate('/login')
			} else {
				navigate('/')
			}
		})
	}, [])
	return (
		<TaskContextProvider>
			<Navbar />
			<div className='container' >
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='*'
						element={<NotFound />}
					/>
				</Routes>
			</div>
		</TaskContextProvider>
	)
}

export default App
