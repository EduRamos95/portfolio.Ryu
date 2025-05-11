import Box from "@mui/material/Box";

export default function Presentation() {
  return (
    <Box sx={{
      position: 'relative',
      width:'100%',
      height:'100%',
      minHeight:'100dvh',
    }}>
      <Box sx={{
        zIndex:'-1',
        position: 'absolute',
        width:'100%',
        height:'100%',
      }}>
        <img src={`${process.env.PUBLIC_URL}/svgs/zorro_v2.svg`} alt="Avatar PNG" />
      </Box>
      <Box
        sx={{
        width: '100%',
        height: '33%',
        backgroundColor: 'white',
        clipPath: 'polygon(40px 0, 100% 0, 100% 100%, 0% 100%, 0% 40px)',
        border: '1px solid black',
        borderRadius: '0 30px 30px 30px',
      }}>

      </Box>
    </Box>
  )
}