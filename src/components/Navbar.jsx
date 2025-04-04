import { Link } from 'react-router'
import { supabase } from '../supabase/client'
function Navbar() {
	return (
		<nav
			class='navbar navbar-expand-lg bg-body-tertiary'
			data-bs-theme='dark'
		>
			<div class='container'>
				<Link
					class='navbar-brand'
					to='#'
				>
					React Supabase
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNavAltMarkup'
					aria-controls='navbarNavAltMarkup'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div
					class='collapse navbar-collapse'
					id='navbarNavAltMarkup'
				>
					<div class='navbar-nav ms-auto'>
						<Link
							class='nav-link active'
							aria-current='page'
							to='#!'
							onClick={async () => await supabase.auth.signOut()}
						>
							Logout
						</Link>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
