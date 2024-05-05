import './../Commons/styles/AboutMe.scss';


/* Otros estilos */



function AboutMe() {
    return (
        <div id="about" className="cardBlock">
            <div className="contentBlock">
                <p className="contentBlock__Hello letter">Hi!</p>
                <p className="contentBlock__Name letter">I'm RyuJak</p>
                <p className="contentBlock__Profession letter">Full-stack Developer</p>
                <div className="contentBlock__Contact">
                    <div className="contentBlock__Contact__Icon"></div>
                    <div className="contentBlock__Contact__Icon"></div>
                    <div className="contentBlock__Contact__Icon"></div>
                </div>
                <div className="contentBlock__Interview">
                    <span>Send me a Email...</span>
                </div>
            </div>
            <div className="avatar">
                <img src="svgs/zorro_v2.svg" alt="Avatar PNG"/>
            </div>
        </div>
    )
}

export default AboutMe;