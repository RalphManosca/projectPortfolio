import { Routes, Route } from 'react-router-dom'
import Home from '@/routes/Home'
import About from '@/routes/About'
import Contact from '@/routes/Contact'
import NoMatch from '@/routes/NoMatch'
import Layout from './Layout'

const PortFolioApp = () => {
  	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact_me' element={<Contact />} />
				<Route path='*' element={<NoMatch />} />
			</Route>
		</Routes>
  	)
}

export default PortFolioApp
