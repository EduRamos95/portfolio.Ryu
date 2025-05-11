import { work1, work2, work3, work4 } from "../Components/Commons/ExpDescComponent/Exp.const";
import { WorkData } from "../Components/Commons/ExpDescComponent/Exp.model";
import ExpWork from "../Components/Commons/ExpDescComponent/ExpWork";





function Experience() {
    const works:WorkData[] = [work4,work3,work2,work1];

    return (
        <div id="experience" className="cardBlock">
            <p className="text-white letter letter-tittle">Experience</p>
            <ExpWork worksExp={works}/>
        </div>
    )
}

export default Experience;