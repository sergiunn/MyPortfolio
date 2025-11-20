import ProjectCard from "../components/ProjectCard";
function Projects() {
  return (
    <div>
      <h2 className="text-3xl font-bold">Projects</h2>
      <p className="mt-4 text-gray-600">
        Here you will find my projects.
      </p>
      <ProjectCard
        title="My First Project"
        description="This is a practice project to learn React."
        link="https://github.com/your/repo"
        imageUrl="https://picsum.photos/400/300"
      />
    </div>
  );
}

export default Projects;
