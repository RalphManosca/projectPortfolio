import { companies } from '@/sampleData.js'
import { projects } from "@/sampleData"
import ProjectCard from '@/components/ProjectCard'
import Card from '@/components/Card'
import Section from '@/components/Section'

const Home = () => {
	return (
		<div className="home-container">
			<Section>
				<div className="heading-container">
					<h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem et assumenda nihil aliquid!</h1>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo excepturi voluptatum, quasi ratione pariatur aspernatur.</p>
				</div>
				<div className="home-image-container">
					<img src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_2560%2Cc_limit/Monkey-Selfie.jpg" alt="" />
				</div>
			</Section>
			<Section>
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
			</Section>
			<Section>
				<div className="wrapper flex-col gap-y-6">
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
			</Section>
		</div>
	)
}

export default Home