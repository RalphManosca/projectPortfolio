import React from 'react'
import ReactDOM from 'react-dom/client'
import PortFolioApp from '@/components/PortFolioApp'
import { BrowserRouter } from "react-router-dom"
import '@/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<PortFolioApp />	
		</BrowserRouter>
	</React.StrictMode>,
)
