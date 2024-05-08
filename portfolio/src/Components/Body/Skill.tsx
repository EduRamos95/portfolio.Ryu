import SkillList from "../Commons/Card/hardskillList";
import '../Commons/styles/Skill.scss';

function Skills() {

    return (
        <div id="skills" className="cardBlock">
            <p className="text-white letter">Skills</p>
            <SkillList/>
        </div>
    )
}

export default Skills;