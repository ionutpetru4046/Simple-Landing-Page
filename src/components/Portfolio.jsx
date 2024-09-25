import { PORTFOLIO_PROJECTS } from "../constants"

const Portfolio = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="portfolio">
        <div className="mb-20">
            <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase 
            mt-20 mb-12">Portfolio</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {PORTFOLIO_PROJECTS.map((project) => (
                    <div key={project.id} className="group relative overflow-hidden rounded-3xl 
                    mx-4">
                        <img src={project.image} />
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Portfolio
