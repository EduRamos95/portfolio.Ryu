import { allSkills } from "../../../Const/skills.const";
import './hardskillList.scss';

function SkillList() {

const hardSkills:JSX.Element[] = [...allSkills];

    return (
        <div className="superskills">
            <div className="superskills__track">
            {hardSkills.map((icono, index) => (
                <div key={index} className="superskills__track__element">{icono}</div>
            ))}
            {hardSkills.map((icono, index) => (
                <div key={index} className="superskills__track__element">{icono}</div>
            ))}
            </div>
        </div>
    )
}

export default SkillList;