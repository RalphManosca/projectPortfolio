import { Fragment } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {

	const links = [
		{ text: 'Home', path: '/' },
		{ text: 'About', path: '/about' },
		{ text: 'Contact me', path: '/contact_me' },
	]

	return (
		<nav className="nav-bar">
			<h1>Welcome to my page!</h1>
			<ul className="flex gap-4">
				{links.map((link) =>
					<Fragment key={link.text}>
						<li>
							<NavLink 
								to={link.path} 
							>
								{link.text}
							</NavLink>
						</li>
					</Fragment>
				)}
			</ul>
		</nav>
	)
}

export default Navbar