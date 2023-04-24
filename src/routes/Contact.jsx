import { useState } from "react"

const Contact = () => {

	const [emailContent, setEmailContent] = useState({
		name: '',
		email: '',
		message: ''
	})

	const handleChange = (e) => {
		setEmailContent({...emailContent, [e.target.name]: e.target.value})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		//Add emailJS later
	}

	return (
		<>
			<h1>Contact Page</h1>
			<form action={handleSubmit} className="flex flex-col">

				<input 
					type="text" 
					name="name"
					value={emailContent.name}
					onChange={(e) => handleChange(e)}
				/>
				
				<input 
					type="email" 
					name="email" 
					value={emailContent.email}
					onChange={(e) => handleChange(e)}
				/>
				
				<textarea 
					name="message" 
					id="message" 
					placeholder="Say something cool ;-)"
					value={emailContent.message}
					onChange={(e) => handleChange(e)}
				/>

				<button>Send Message</button>
			</form>
		</>
	)
}

export default Contact