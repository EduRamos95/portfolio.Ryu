import "./../Commons/styles/AboutMe.scss";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

/* Otros estilos */

function AboutMe() {
  return (
    <div id="about-me" className="presentationCard">
        <div id="about" className="cardBlock">
        
            <div className="contentBlock">
            <p className="contentBlock__Hello letter">Hi!</p>
            {/* <p className="contentBlock__Name letter">I'm RyuJak</p> */}
            <p className="contentBlock__Name letter">I'm Edu R.</p>
            <p className="contentBlock__Profession letter">
                Full-stack Developer
            </p>
            <div className="contentBlock__Contact">
                <div className="contentBlock__Contact__Icon"><SlSocialGithub /></div>
                <div className="contentBlock__Contact__Icon"><SlSocialLinkedin /></div>
                <div className="contentBlock__Contact__Icon"><FaWhatsapp /></div>
            </div>
            <div className="contentBlock__Interview">
                <span>Send me a Email...</span>
            </div>
            </div>

            <div className="avatar_H">
                <img src="svgs/zorro_v2.svg" alt="Avatar PNG" />
            </div>
        
        </div>
        <div className="avatar">
          <img src="svgs/zorro_v2.svg" alt="Avatar PNG" />
        </div>
    </div>
  );
}

export default AboutMe;
