import Box from '@mui/material/Box'

function FullPage({ video }) {
  return (
    <Box sx={{height: "100vh", filter: "brightness(50%)"}}>
        <video autoPlay muted loop poster={video.poster} style={{objectFit: "cover", height: "100%", width: "100%"}}>
            <source src={video.link} type="video/mp4"/> 
        </video> 
    </Box>
  )
}

export default  FullPage