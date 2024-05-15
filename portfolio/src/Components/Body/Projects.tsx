import { ProjectAirBnbClone, ProjectCoreCapital, ProjectSimpleShell } from "../Commons/ProjectCardComponent/Project.const";
import ProjectCard from "../Commons/ProjectCardComponent/ProjectCard";
import { ProjectData } from "../Commons/ProjectCardComponent/ProjectCard.model";
import '../Commons/styles/Projects.scss';

function Projects() {

    const ProjectsData:ProjectData[] = [ProjectCoreCapital, ProjectAirBnbClone, ProjectSimpleShell];

    return (
        <div id="projects" className="cardBlock">
            <p className="text-white letter letter-tittle">Projects</p>
            <div className="ProjectCardGroup">
            {
                ProjectsData.map((project, index) => (
                    <ProjectCard key={`project_${index}`} {...project}/>
                ))
            }
            </div>
        </div>
    )
}

export default Projects;