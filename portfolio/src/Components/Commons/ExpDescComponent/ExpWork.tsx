import { WorkData, WorksExperience } from "./Exp.model";
import TimelineCard from "./TimeLineCard";

function ExpWork({worksExp}:WorksExperience) {

    const works:WorkData[] = [...worksExp];

    return (
        <div className="ExpWorks">
            {works.map((work, index) => (
                <TimelineCard 
                    key={`${"work"}${index}`}
                    company={work.company}
                    job={work.job}
                    dateStart={work.dateStart}
                    dateEnd={work.dateEnd}
                    descriptions={work.descriptions}
                    stack={work.stack}
                />
            ))}
        </div>
    )
}

export default ExpWork;