import { useState } from "react"

const ProjectCard = ({ name, image, description, link}) => {

	const [showDescription, setShowDescription] = useState(false)

	const handleMouseOver = (e) => {
		setShowDescription(true)
	}
	
	const handleMouseExit = (e) => {
		setShowDescription(false)
	}

	return (
		<>
			<div 
				className="project-card"
				onMouseEnter={(e) => handleMouseOver(e)}
				onMouseLeave={(e) => handleMouseExit(e)}
			>
				<div 
					className="project-card-content" 
					style={{backgroundImage: `url(${image})`}}
				>
					{showDescription ? 
						<div 
							style={{
								backgroundColor: 'red',
								height: '100%'
							}}
							className="wrapper flex-col gap-4 px-20"
						>
							<span className="text-center">{description}</span>
							<a href={link}>Check out for your self</a>
						</div>
						: 
						<span>{name}</span>
					}
				</div>
			</div>
		</>
	)
}

export default ProjectCard