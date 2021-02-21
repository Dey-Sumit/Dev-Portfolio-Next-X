import ProjectCard from "../components/ProjectCard";
import { projects } from "../data";

const Projects = () => {
  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {/* <AnimatePresence> */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-black-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard project={project} key={project.id} />
          </div>
        ))}
        {/* </AnimatePresence> */}
      </div>
    </div>
  );
};

export default Projects;
