import { companies } from '@/sampleData.js'
import { projects } from "@/sampleData"
import ProjectCard from '@/components/ProjectCard'
import Card from '@/components/Card'

const Home = () => {
	return (
		<>
			<div className="wrapper flex-wrap gap-4">
				{companies.map((company) =>
					<Card
						key={company.id}
						name={company.companyName}
						role={company.role}
						description={company.workDescription}
						skills={company.skills}
						achievements={company.achievements}
						learnings={company.learnings}
						color={company.backgroundSRC}
					/>
				)}
			</div>
			<div className="wrapper flex-col">
				<h1>Projects I have worked on: </h1>
				{projects.map((project) => 
					<ProjectCard 
						key={project.id}
						name={project.name}
						image={project.imageBanner}
						description={project.projectDescription}
						link={project.link}
					/>		
				)}
			</div>
		</>
	)
}

export default Home