import { work1, work2, work3 } from "../Commons/ExpDescComponent/Exp.const";
import { WorkData } from "../Commons/ExpDescComponent/Exp.model";
import ExpWork from "../Commons/ExpDescComponent/ExpWork";


function Experience() {
    const works:WorkData[] = [work3,work2,work1];

    return (
        <div id="experience" className="cardBlock">
            <p className="text-white letter letter-tittle">Experience</p>
            <ExpWork worksExp={works}/>
        </div>
    )
}

export default Experience;