import React from 'react';
import {Box, Grid, Button, Typography} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Video from './video'
import useSound from '../hooks/useSound';
import useElementOnScreen from '../hooks/useElementOnScreen';

function FullPage({ video }) {
  const [ containerRef, videoRef  ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
  })
  // const videoRef = useRef(null)
  const { sound, handleSound } = useSound(videoRef)

  return (
    <Box component="section" ref={containerRef} className="vid" sx={{height: "100vh",  position: "relative"}}>
        <Video data={video} videoRef={videoRef} />
        <Box sx={{width:"100%", padding: "8% 4.6%", position: "absolute", bottom: {md: "0.5rem", xs: "2.5rem"}, left: 0, zIndex: 1}}>
          <Grid container gap={1} justifyContent="space-between" sx={{marginBottom:  {md: "0.2rem", xs: "1rem"},}}>
          <Grid item md={5} xs={8} my={2}>
            <Typography variant="large" color="secondary" sx={{fontStyle: "normal", fontWeight: 700, lineHeight: "120%"}}>
              {video.text1}
            </Typography>
            <Typography variant="h6" color="secondary.gray" sx={{fontStyle: "normal", fontWeight: "normal", lineHeight: "150%"}}>
              {video.text2}
            </Typography>
            <Typography variant="h6" color="secondary" sx={{fontWeight: "normal",}} >
              {video.text3}
            </Typography>

          </Grid>
          {/* Show audio icon only when it satisfies the conditions below */}
          {
            video.button && video.showAudio ? (
                  ""
                ):(
                  video.showAudio ? (
                    <Grid item md={6} sx={{display:"flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "flex-end" }} onClick={handleSound}>
                    {
                    sound ? (
                        <Image src="/images/mute.png" width="40" height="40" alt="sound"></Image>
                      ):(
                        <Image src="/images/unmute.png" width="40" height="40" alt="sound"></Image>
                      )
                    }
                  </Grid>
                  ): (
                    ""
                  )
                )
              }
          </Grid>
          <AudioAndButton video={video} sound={sound} handleSound={handleSound} />
         </Box>
    </Box>
  )
}

export default  FullPage

export function AudioAndButton({ video, sound, handleSound }){
  return (
    <Grid container justifyContent="space-between">
      <Grid item>
        {
          video.button ? (
          <Link href={video.button} alt={video.buttonText}>
            <Button variant="outlined" sx={{width: "12rem"}}>{video.buttonText}</Button>
          </Link>  
          ):(
            ""
          )
        }
      </Grid>
      {/* Show audio icon only when it satisfies the conditions below */}
        {
          video.button && video.showAudio ? (
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
  )
}