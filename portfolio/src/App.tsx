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
import { blue, red } from '@mui/material/colors';

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
    <Box sx={{ position: "relative", minHeight: "100vh"}}>
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
    <Box sx={{
      width:'100%',
      height: "100%",
      backgroundImage: `url(${process.env.PUBLIC_URL}/imgs/dragon_background_2.jpeg)`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: { xs: "center", md: "top" },
      zIndex: -1,
      padding: { xs: "16px", sm: "20px", md: "24px" },
    }}>

  <CardWrapper sx={{
    minHeight: '100dvh',
    height:'100%',
    boxSizing: 'border-box',
    padding: { xs: "16px", sm: "20px", md: "24px" },
    // padding: 0,
    // margin: { xs: "16px", sm: "20px", md: "24px" },
    // backgroundColor:'gray'
    backgroundColor: 'rgba(255, 255, 255, 0.3)', // Fondo semi-transparente
    backdropFilter: 'blur(16px)',                // Desenfoque del fondo
  }}>

    <Box sx={{ 
      // display: {xs:'block', md:'flex'},
      display:'flex',
      flexDirection:'row',
      minHeight: '100vh',
      width:'100%',
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
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth:0 }}>
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
            display: { xs: 'flex', md: 'none' },
            flexDirection:'column',
            gap: 2,
            flex: 1,
            overflowY: 'auto',
          }}
        >
          {/* Primera pantalla */}
          <Box sx={{
            height: {xs:'calc(100dvh - 104px)' ,sm:'calc(100dvh - 108px)' ,md:'calc(100dvh - 112px)' },
            minHeight: {xs:'calc(100dvh - 104px)' ,sm:'calc(100dvh - 108px)' ,md:'calc(100dvh - 112px)' },
            borderRadius: '32px',
            overflow:'hidden',
            position:'relative'
          }}>
            <Box sx={{ height: '100%', bgcolor: 'pink' }}>MainCourse</Box>

            <Box sx={{
              position:'absolute',
              bottom: 0,
              right: 0,
              height:'100%',
              width:'100%',
              display:'flex',
              flexDirection:'column',
              justifyContent:'flex-end',
              alignItems:'flex-end',
            }}>
              <Typography variant='h3' color='primary'
                sx={{
                  width:'100%',
                  textAlign:'center',
                  my:2,
                }}
              >
                RyuJak
              </Typography>
              
              <Box
                sx={{
                  padding:4,
                  width:'90%',
                  height: 'calc(33%)',
                  bgcolor: 'lightblue',
                  border: '1px solid black',
                  borderRadius: '30px', 
                  display:'flex',
                  flexDirection:'column',
                  alignItems:'flex-end',
                }}
                >
                  <Box sx={{
                    width:'75%',
                    height:'50%',
                    backgroundColor:'red',
                  }}>

                  </Box>
                  <Box sx={{
                    width:'100%',
                    height:'50%',
                    backgroundColor:'blue',
                  }}>

                  </Box>
              </Box>
            </Box>
          </Box>

          {/* Segunda pantalla */}
          <Box sx={{ display: 'flex', flexDirection: 'row', gap:0.5 ,width:'100%'}}>
            <Box
              sx={{
                height: '66vh',
                width: '34%',
                bgcolor: 'pink',
                borderRadius: '32px',
                overflow:'hidden',
              }}
            >
              Side Dish rosado (34vw, 66vh)
            </Box>
            <Box
              sx={{
                height: '66vh',
                width: '66%',
                bgcolor: 'lightblue',
                borderRadius: '32px',
                overflow:'hidden',
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
              pb:0.5,
              // py: 1,
              // px: 2,
              // Scrollbar fino estilo mobile
              scrollbarWidth: 'thin', // Firefox
              scrollbarColor: 'black transparent',

              '&::-webkit-scrollbar': {
                height: '6px', // Grosor del scrollbar horizontal
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: 'transparent',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#ccc',
                borderRadius: '9999px',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                backgroundColor: '#999',
              },
            }}
          >
            {[...Array(5)].map((v, i) => (
              <Box
                key={`${v}-box`}
                sx={{
                  minWidth: 200,
                  height: '100%',
                  bgcolor: 'grey.300',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '32px',
                  overflow:'hidden',
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
    </Box>

  );
}

export default App;
