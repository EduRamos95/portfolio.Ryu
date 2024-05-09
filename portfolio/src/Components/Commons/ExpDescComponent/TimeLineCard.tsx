import { WorkData } from "./Exp.model";
import './TimeLineCard.scss';

function TimelineCard({ company, job, dateStart, dateEnd, descriptions, stack }:WorkData) {
    return (
      <div className="timeline-card">
        <div className="timeline-card__sup">
            <h3 className="timeline-card__sup__title">{company}</h3>
            <p className="timeline-card__sup__date">{dateStart} - {dateEnd}</p>
        </div>
        <hr />
        <p className="timeline-card__job">{job}</p>
        <ul>
          {descriptions.map((activity, index) => (
            <li key={`${"description"}${index}`}>{activity}</li>
          ))}
        </ul>
        <div className="timeline-card__stack">
            <p>Stack:</p>
            <div className="timeline-card__stack__group">

            {stack.map((tecnology, index) => (
                <div key={`${"stack"}${index}`} className="timeline-card__stack__group__element">
                    {tecnology}
                </div>
            ))}
            </div>
        </div>
      </div>
    );
}

export default TimelineCard;