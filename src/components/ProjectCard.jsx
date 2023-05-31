import { useState } from "react"

const ProjectCard = ({ name, image, description, link }) => {

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
						<div className="project-card-content__hovered">
							<span>{description}</span>
							<a href={link} target="_blank">Check out for yourself</a>
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