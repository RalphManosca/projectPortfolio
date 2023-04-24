const Card = ({ 
	name, 
	role, 
	description, 
	skills, 
	achievements, 
	learnings, 
	color
	}) => {

	const pillStyle = {
		color: 'white',
		paddingRight: '13px',
		paddingLeft: '13px',
		borderRadius: '2500px',
		backgroundColor: color,
	}

	return (
		<div className="card">
			<div className="card-image" style={{ backgroundColor: color }}>
				<img 
					src="https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJhbmRvbXxlbnwwfHwwfHw%3D&w=1000&q=80"
					style={{ width: '100px', height: '100px' }}
					alt="EXP image"
				/>
			</div>
			<div className="card-body">
				<span className="card-title text-center">{ name }</span>
				<span className="card-role text-center">{ role }</span>
				<span className="card-description">{ description }</span>
				<span className="card-skill-pills">
					Skills used: {skills.map((skill) => 
						<span style={ pillStyle }>{ skill }</span>
					)}
				</span>
				<ul>
					{achievements.map((achievement) =>
						<li>{ achievement }</li>
					)}
				</ul>
				<span className="card-closing-comment">{ learnings }</span>
			</div>
		</div>
	)
}

export default Card