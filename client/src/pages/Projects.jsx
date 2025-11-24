import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projects = [
    {
      title: "Primul",
      description: "Arată primul proiect.",
      link: "https://github.com/your-repo",
      imageUrl: "https://picsum.photos/400/300",
    },
    {
      title: "Al doilea proiect",
      description: "Proiectul 2",
      link: "https://github.com/your-repo2",
      imageUrl: "https://picsum.photos/400/300",
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mt-4 text-gray-600">Here you will find my projects.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
