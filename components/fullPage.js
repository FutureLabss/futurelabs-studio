import {useState} from 'react';
import {Box, Stack, Grid, Button, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Video from './video'

function FullPage({ video }) {
  const [sound, setSound] = useState(true);
  const handleSound = () =>{
    console.log("clicked")
    setSound(!sound);
  }

  return (
    <Box sx={{height: "100vh",  position: "relative"}}>
        <Video data={video}/>
        <Box sx={{width:"100%",  padding: "8% 2%", position: "absolute", bottom: 0, left: 0, zIndex: 1}}>
          <Stack sx={{maxWidth: "500px"}}>
            <Typography variant="h4" color="secondary" sx={{fontStyle: "normal", fontWeight: 700, fontSize: "52px", lineHeight: "120%"}}>
              {video.text1}
            </Typography>
            <Typography variant="h6" color="secondary" sx={{fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "150%"}}>
              {video.text2}
            </Typography>
          </Stack>
          <Grid container justifyContent="space-between">
            <Grid item>
            {
              video.button ? (
              <Link href={video.button}>
                <Button variant="outlined" sx={{width: "10rem"}}>Learn More</Button>
              </Link>  
              ):(
                ""
              )
            }
            </Grid>
              {
                video.showAudio ? (
                  <Grid item sx={{}} onClick={handleSound}>
                    {
                    sound ? (
                      <Image src="/images/mute.png" width="40" height="40" alt="sound"></Image>
                    ):(
                      <Image src="/images/unmute.png" width="40" height="40" alt="sound"></Image>
                    )
                    }
                  </Grid>
                ):(
                  ""
                )
              }
          </Grid>
         </Box>
    </Box>
  )
}

export default  FullPage