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
		<div className="contact-form">
			<div className="first-box">	
				<img 
					src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2560%2Cc_limit/Monkey-Selfie.jpg" 
					alt="Contact Image"
					style={{
						maxWidth: '300px',
						width: '100%'
					}}
				/>
			</div>
			<form 
				action={handleSubmit} 
				className="second-box"
			>
				<div className="input-containers">
					<label htmlFor="name">
						Name
					</label>
					<input 
						type="text" 
						name="name"
						id="name"
						value={emailContent.name}
						onChange={(e) => handleChange(e)}
						style={{width: '400px'}}
					/>
				</div>
				<div className="input-containers">
					<label htmlFor="email">
						Email
					</label>
					<input 
						type="email" 
						name="email"
						id="email"
						value={emailContent.email}
						onChange={(e) => handleChange(e)}
						style={{width: '400px'}}
					/>
				</div>
				<div className="input-containers">
					<label htmlFor="message">
						Message
					</label>
					<textarea 
						name="message" 
						id="message" 
						placeholder="Say something cool ;-)"
						value={emailContent.message}
						onChange={(e) => handleChange(e)}
						style={{width: '400px', height: '200px', resize: 'none'}}
					/>
				</div>
				<button className="submit-button">Send Message</button>
			</form>
		</div>
	)
}

export default Contact