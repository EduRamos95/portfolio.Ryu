import ButtonLink, { colorBtn } from "../ButtonLinkComponent/ButtonLink";
import ReelStack from "../ReelStackComponent/ReelStack";
import { ProjectData } from "./ProjectCard.model";
import "./ProjectCard.scss";

const defaultImg = ["/img/defaultProject.png"];
const base = "cardProjects";

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
  const buttons = [
    { link: github, label: "GitHub" },
    { link: demo, label: "Demo" },
  ];

  const shouldRenderButtons = buttons.some(
    (button) => button.link && button.link !== ""
  );
  
  return (
    <div className="ProjectCard">
      <div className="ProjectCard__Image">
            <img src={`${base}/${img[0]}`} alt="Project PNG" />
      </div>
      <div className="ProjectCard__Content">
        <div className="ProjectCard__Content__Title">
          <h2>{title}</h2>
        </div>
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
      {shouldRenderButtons ? (
        <div className="ProjectCard__Button">
          {buttons.map((button, index) => (
            <ButtonLink
              key={index}
              linked={button.link}
              label={button.label}
              color={index % 2 !== 0 ? colorBtn.primary : colorBtn.secondary}
            />
          ))}
        </div>
      ) : null}
      <div className="ProjectCard__Stack">
        <ReelStack stack={stack} />
      </div>
    </div>
  );
}

export default ProjectCard;
