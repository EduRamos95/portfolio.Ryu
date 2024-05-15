import { useEffect, useRef, useState } from "react";
import { WorkData } from "./Exp.model";
import './TimeLineCard.scss';

import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";


function TimelineCard({ company, job, dateStart, dateEnd, descriptions, stack }:WorkData) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentHeight, setCurrentHeight] = useState<number>(0);
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(()=>{
    if (ulRef.current?.scrollHeight) {
      setCurrentHeight(ulRef.current.scrollHeight);
    }
  },[isVisible])
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };  
  
  return (
      <div className="timeline-card">
        <div className="timeline-card__content" onClick={toggleVisibility}>
          <div className="timeline-card__content__sup">
              <h3 className="timeline-card__content__sup__title">{company}</h3>
              <p className="timeline-card__content__sup__date">{dateStart} - {dateEnd}</p>
          </div>
          <hr />
          <p className="timeline-card__content__job">{job}
          <span>
          {
            !isVisible ? (<TiArrowSortedDown />):(<TiArrowSortedUp />)
          }  
          </span>
          </p>
        </div>
        
        <ul ref={ulRef} 
        className={`timeline-card__list ${isVisible ? 'visible' : ''}`}
        style={{
          height: isVisible ? currentHeight + 'px' : '0px',          
          transitionDuration: isVisible ? '0.5s' : '0.3s',
          transitionDelay: isVisible ? `${0}s`:`${0.3 * descriptions.length + 0.3}s` ,
        }
        }
        >
      {descriptions.map((activity, index) => {

        const lastIndex = descriptions.length - 1;
        const reversedIndex = !isVisible ? lastIndex - index : index;
        return (
          <li key={`${"description"}${index}`}
          style={{
            transitionDelay: `${reversedIndex * 0.3 + 0.3}s`, // Establecer un retraso escalonado para cada elemento
            opacity: isVisible ? 1 : 0, // Establecer la opacidad según la visibilidad
          }}
          >{activity}</li>
          )
        }
      )}
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