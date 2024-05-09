import { WorkData } from "./Exp.model";

function TimelineCard({ company, job, dateStart, dateEnd, descriptions, stack }:WorkData) {
    return (
      <div className="timeline-card">
        <h3 className="timeline-card__title">{company}</h3>
        <hr />
        <p className="timeline-card__cargo">{job}</p>
        <p className="timeline-card__fecha">{dateStart} - {dateEnd}</p>
        <ul>
          {descriptions.map((activity, index) => (
            <li key={`${"description"}${index}`}>{activity}</li>
          ))}
        </ul>
        <p>Stack:</p>
        <div className="timeline-card__stack">
          {stack.map((tecnology, index) => (
            <div key={`${"stack"}${index}`} className="timeline-card__stack__element">
                {tecnology}
            </div>
          ))}
        </div>
      </div>
    );
}

export default TimelineCard;