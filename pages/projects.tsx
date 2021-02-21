import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as projectsData } from "../data";
import { Category } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("All");

  const handleFilterCategory = (category: Category | "All") => {
    if (category === "All") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const new_array = projectsData.filter((project) =>
      project.category.includes(category)
    );

    setProjects(new_array);
    setActive(category);
  };
  return (
    <div className="px-5 py-2 overflow-y-scroll " style={{ height: "65vh" }}>
      <nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
        {/* //use className */}
        <li
          className={`cursor-pointer hover:text-green ${
            active === "All" ? "text-green" : ""
          }`}
          onClick={() => handleFilterCategory("All")}
        >
          All
        </li>
        <li
          className={`cursor-pointer hover:text-green ${
            active === "react" ? "text-green" : ""
          }`}
          // use typescript to send value
          onClick={() => handleFilterCategory("react")}
        >
          React
        </li>

        <li
          className={`cursor-pointer hover:text-green ${
            active === "mongo" ? "text-green" : ""
          }`}
          onClick={() => handleFilterCategory("mongo")}
        >
          Mongo
        </li>
        <li
          className={`cursor-pointer hover:text-green ${
            active === "express" ? "text-green" : ""
          }`}
          onClick={() => handleFilterCategory("express")}
        >
          Express{" "}
        </li>

        <li
          className={`cursor-pointer hover:text-green ${
            active === "django" ? "text-green" : ""
          }`}
          onClick={() => handleFilterCategory("django")}
        >
          Django
        </li>
      </nav>

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
