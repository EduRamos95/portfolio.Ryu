import { ProjectAirBnbClone, ProjectCoreCapital, ProjectNoCountry, ProjectSimpleShell } from "../Components/Commons/ProjectCardComponent/Project.const";
import ProjectCard from "../Components/Commons/ProjectCardComponent/ProjectCard";
import { ProjectData } from "../Components/Commons/ProjectCardComponent/ProjectCard.model";
import '../Commons/styles/Projects.scss';

function Projects() {

    const ProjectsData:ProjectData[] = [ProjectNoCountry, ProjectCoreCapital, ProjectAirBnbClone, ProjectSimpleShell];

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