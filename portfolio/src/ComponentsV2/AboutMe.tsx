
// import { SlSocialGithub } from "react-icons/sl";
// import { SlSocialLinkedin } from "react-icons/sl";
// import { FaWhatsapp } from "react-icons/fa";

/* Otros estilos */

// function AboutMe() {
//   return (
//     <div id="about-me" className="presentationCard">
//         <div id="about" className="cardBlock">
        
//             <div className="contentBlock">
//             <p className="contentBlock__Hello letter">Hi!</p>
//             <p className="contentBlock__Name letter">I'm Edu R.</p>
//             <p className="contentBlock__Profession letter">
//                 Full-stack Developer
//             </p>
//             <div className="contentBlock__Contact">
//                 <a href="https://github.com/EduRamos95" target="_blank" rel="noopener noreferrer" className="contentBlock__Contact__Icon"><SlSocialGithub /></a>
//                 <a href="https://www.linkedin.com/in/eduramos95/" target="_blank" rel="noopener noreferrer" className="contentBlock__Contact__Icon"><SlSocialLinkedin /></a>
//                 <a href="https://wa.me/51937823875" target="_blank" rel="noopener noreferrer" className="contentBlock__Contact__Icon"><FaWhatsapp /></a>
//             </div>
//             <div className="contentBlock__Interview">
//                 <span>Send me a Email...</span>
//             </div>
//             </div>

//             <div className="avatar_H">
//                 <img src={`${process.env.PUBLIC_URL}/svgs/zorro_v2.svg`} alt="Avatar PNG" />
//             </div>
        
//         </div>
//         <div className="avatar">
//           <img src={`${process.env.PUBLIC_URL}/svgs/zorro_v2.svg`} alt="Avatar PNG" />
//         </div>
//     </div>
//   );
// }

import { Box, Typography, Stack, IconButton, Button } from "@mui/material";
import { SlSocialGithub, SlSocialLinkedin } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";
import CardWrapper from "./cardWrapper";

export default function AboutMe() {
  return (
    <Box
      id="about-me"
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        maxWidth: "1200px",
        mx: "auto",
        gap: 2,
      }}
    >
      {/* Bloque de contenido */}
      <CardWrapper>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-beetween",
          width: "100%",
        }}>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flexBasis: { sm: "60%" },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Typography variant="h5" sx={{ mt: { xs: 4, sm: 0 }, transform: "scaleY(1.15)" }}>
            Hi!
          </Typography>
          <Box>
            <Typography variant="h3" sx={{ my: 1 }}>
              I'm Edu R.
            </Typography>
            <Typography variant="h5" sx={{ transform: "scaleY(1.15)" }}>
              Full-stack Developer
            </Typography>
          </Box>

          {/* Iconos de contacto */}
          <Stack direction="row" spacing={2} sx={{ mt: 2, justifyContent: { xs: "center", sm: "start" } }}>
            <IconButton component="a" href="https://github.com/EduRamos95" target="_blank" sx={{ color: "black" }}>
              <SlSocialGithub size={24} />
            </IconButton>
            <IconButton component="a" href="https://www.linkedin.com/in/eduramos95/" target="_blank" sx={{ color: "black" }}>
              <SlSocialLinkedin size={24} />
            </IconButton>
            <IconButton component="a" href="https://wa.me/51937823875" target="_blank" sx={{ color: "black" }}>
              <FaWhatsapp size={24} />
            </IconButton>
          </Stack>

          {/* Botón de entrevista */}
          <Button>
            <Typography variant="body1" sx={{ color: "orange", fontWeight: 700 }}>
              Send me an Email...
            </Typography>
          </Button>
        </Box>

        {/* Imagen del avatar */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexBasis: { sm: "40%" },
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={`${process.env.PUBLIC_URL}/svgs/zorro_v2.svg`}
            alt="Avatar"
            sx={{ maxWidth: "260px", width: "75%", transform: "scale(1.5)" }}
          />
        </Box>
      </Box>
        </CardWrapper>
      {/* Imagen de avatar en mobile */}
      <Box sx={{ display: { xs: "flex", sm: "none" }, 
      justifyContent: "center", 
      width: "100%", 
      mt:2}}>
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/svgs/zorro_v2.svg`}
          alt="Avatar"
          sx={{ maxWidth: "260px", width: "75%", mb: -2 }}
        />
      </Box>
    </Box>
  );
}


// export default AboutMe;
