import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import AboutMe from './ComponentsV2/AboutMe';
import Skills from './ComponentsV2/Skill';
import Experience from './ComponentsV2/Experience';
import Projects from './ComponentsV2/Projects';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Presentation from './ComponentsV2/Presentation';
import CardWrapper from './ComponentsV2/cardWrapper';

// {
//   "xs": "0px - 599px",
//   "sm": "600px - 899px",
//   "md": "900px - 1199px",
//   "lg": "1200px - 1535px",
//   "xl": "1536px en adelante"
// }


function App() {
  return (
    // <div className="App">
    //   <Header/>
    //   <div className="App__Body">
    //     <AboutMe/>
    //     <Skills/>
    //     <Experience/>
    //     <Projects/>
    //   </div>
    // </div>

    /*
    <Box sx={{ position: "relative", minHeight: "100vh", padding:2 }}>
      <Box
        sx={{ display: 'flex', flexDirection:'column',
          "::before": {
            content: '""',
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/dragon_background_2.jpeg)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: { xs: "center", md: "top" },
            zIndex: -1,
          },
        }}
        >
          <Presentation></Presentation>
      </Box>
    </Box>
    */

  <CardWrapper>

  <Box sx={{ 
    // display: 'flex',
    // flexDirection:'row',
    minHeight: '100vh',
    width:'100%'
   }}>
    {/* SIDEBAR */}
    <Box
      sx={{
        display: { xs: 'none', md: 'block' },
        minWidth: 100,
        bgcolor: 'grey.200',
        height: 'auto',
      }}
    >
      Sidebar
    </Box>

    {/* CONTENIDO PRINCIPAL */}
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      {/* HEADER */}
      <Box
        sx={{
          height: 64,
          bgcolor: 'primary.main',
          color: 'white',
          px: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>Perfil</Box>
        <Box>Menú / Botones</Box>
      </Box>

      {/* ======= MÓVIL ======= */}
      <Box
        sx={{
          display: { xs: 'block', md: 'none' },
          flex: 1,
          overflowY: 'auto',
        }}
      >
        {/* Primera pantalla */}
        <Box sx={{
          height: '100dvh',
          minHeight: '100dvh',
          position:'relative'
        }}>
          <Box sx={{ height: '100dvh', bgcolor: 'pink' }}>MainCourse</Box>
          <Box
            sx={{
              height: '34vh',
              width: '80%',
              bgcolor: 'lightblue',
              position:'absolute',
              bottom: 0,
              right: 0
            }}
            >
            Side Dish celeste (80% ancho, 1/3 altura)
          </Box>
        </Box>

        {/* Segunda pantalla */}
        <Box sx={{ display: 'flex', flexDirection: 'row', width:'100%'}}>
          <Box
            sx={{
              height: '66vh',
              width: '34%',
              bgcolor: 'pink',
            }}
          >
            Side Dish rosado (34vw, 66vh)
          </Box>
          <Box
            sx={{
              height: '66vh',
              width: '66%',
              bgcolor: 'lightblue',
            }}
          >
            Side Dish celeste (66vw, 66vh)
          </Box>
        </Box>

        {/* Side Dish blancos */}
        <Box
          sx={{
            height: '34vh',
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            py: 1,
            px: 2,
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              sx={{
                minWidth: 200,
                height: '100%',
                bgcolor: 'grey.300',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Blanco {i + 1}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ======= DESKTOP ======= */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          flex: 1,
        }}
      >
        {/* Top 2/3: MainCourse + SideDish celeste */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '3fr 1fr',
            height: '66vh',
            gap: 2,
            p: 2,
          }}
        >
          {/* MainCourse (ocupa 3fr) */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 4fr',
              gap: 2,
              bgcolor: 'pink.100',
            }}
          >
            <Box sx={{ bgcolor: 'lightgrey' }}>20%</Box>
            <Box sx={{ bgcolor: 'pink.300' }}>80% MainCourse</Box>
          </Box>

          {/* Grupo de Side Dishes - columna de 1fr */}
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Side Dish celeste (2/3 altura de los 2/3 totales) */}
            <Box sx={{ flex: '2', bgcolor: 'lightblue' }}>Side Dish celeste</Box>
            {/* Side Dish grande (1/3 de esos 2/3), desbordando un poco */}
            <Box
              sx={{
                flex: '1',
                bgcolor: 'lightblue',
                mt: -4,
                position: 'relative',
                left: '-10%',
                width: 'calc(100% + 10%)',
                zIndex: 1,
                display: 'flex',
                alignItems: 'center',
                px: 2,
              }}
            >
              Side Dish celeste grande
            </Box>
          </Box>
        </Box>

        {/* Side Dish blancos (1/3 de altura total, scroll horizontal) */}
        <Box
          sx={{
            height: '34vh',
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            p: 2,
          }}
        >
          {[...Array(5)].map((_, i) => (
            <Box
              key={i}
              sx={{
                minWidth: 200,
                height: '100%',
                bgcolor: 'grey.300',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              Blanco {i + 1}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
  </CardWrapper>





  );
}

export default App;
