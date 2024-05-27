import IconLink from "../IconLinkComponent/IconLink";
import ReelStack from "../ReelStackComponent/ReelStack";
import { ProjectData } from "./ProjectCard.model";
import "./ProjectCard.scss";

const defaultImg:string[] = ["/img/defaultProject.png"];
const base:string = "cardProjects";
let show:boolean = false;

function ProjectCard({
  title,
  content,
  github,
  demo,
  descriptions,
  stack,
  front,
  back,
  orm,
  db,
  img = defaultImg,
}: ProjectData) {
  
  // const buttons = [
  //   { link: github, label: "GitHub" },
  //   { link: demo, label: "Demo" },
  //   { link: "", label: "Details" },
  // ];

  function handleClick(): void {
    show = !show;
  }
  
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__Image">
            <img src={`${base}/${img[0]}`} alt="Project PNG" />
      </div>
      <div className="ProjectCard__Content">
        <div className="ProjectCard__Content__Title">
          <h2>{title}</h2> 
          
          <div className="ProjectCard__Content__Title__Icons">
            <IconLink  label="GitHub" linked={github}/>
            { demo ? (<IconLink  label="Demo" linked={demo}/>):(null)}
            <IconLink  label="Details" click={handleClick}/>
          </div>

        </div>
          <hr></hr>
        <div className="ProjectCard__Content__Description">
          <p>{content}</p>
        </div>
        <div className="ProjectCard__Content__DescriptionAll">
          <ul>
            {descriptions.map((desc, index) => (
              <li key={`desc_${index}`}>{desc}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="ProjectCard__Stack">
        <ReelStack stack={stack} />
      </div>
    </div>
  );
}

export default ProjectCard;
