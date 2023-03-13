import React from 'react';
import { Grid, Button, Typography, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import Video from "./video";
import Text from "./text";
import useElementOnScreen from '../hooks/useElementOnScreen';

function HalfPage({ data }) {
  const [ containerRef, videoRef  ] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
  })

  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
        <Box component="section" ref={containerRef} >
          <Grid container direction={data.reverse ? "row-reverse" : "row"} sx={{ minHeight: '100vh',}}>
            {
              mobile ? (
                <>
                {
                  data.poster ? (
                    <Box sx={{height: "100vh", position: "relative"}}>
                      <Video data={data} videoRef={videoRef} />
                      <Text data={data}/>                
                    </Box>
                  ):(
                    <Grid item gap={1} xs={12} display="flex" flexDirection="column" justifyContent="center" sx={{backgroundColor: data.bg, padding: "0 4.6%",}}>
                      <Typography variant="h4" color="secondary" sx={{fontStyle: "normal", fontWeight: 700,  lineHeight: "120%", letterSpacing: 3.0}}>
                        {data.text1}
                      </Typography>
                      <Typography variant="large" color="secondary" sx={{fontStyle: "normal", fontWeight: 700, }}>
                        {data.text2}
                      </Typography>
                      <Typography variant="h6" color="secondary" sx={{fontStyle: "normal", fontWeight: "normal", lineHeight: "150%"}}>
                        {data.text3}
                      </Typography>
                      {
                        data.button ? (
                          <Link href={data.button} alt={data.buttonText}>
                            <Button variant="outlined" sx={{width: "12rem", marginTop: "1rem"}} color={data.buttonColor}>{data.buttonText}</Button>
                          </Link>  
                          ):(
                            ""
                        )
                      }
                    </Grid>
                  )
                }
                </>
              ): (
                <>
                  <Grid item gap={1} md={6} xs={6} display="flex" flexDirection="column" justifyContent="center" sx={{padding: "0 4.6%",}}>
                    <Typography variant="h4" color="primary" sx={{fontStyle: "normal", fontWeight: 700,  lineHeight: "120%", letterSpacing: 3.0}}>
                      {data.text1}
                    </Typography>
                    <Typography variant="large" sx={{fontStyle: "normal", fontWeight: 700, lineHeight: "120%"}}>
                      {data.text2}
                    </Typography>
                    <Typography variant="h6" sx={{fontWeight: "normal",}}>
                      {data.text3}
                    </Typography>
                    {
                        data.button ? (
                          <Link href={data.button} alt={data.buttonText}>
                            <Button variant="outlined" sx={{width: "12rem", marginTop: "1rem"}} >{data.buttonText}</Button>
                          </Link>  
                          ):(
                            ""
                        )
                      }
                  </Grid>
                  <Grid item xs={6} md={6} sx={{backgroundColor: data.bg}}>
                    {
                      data.poster ? (
                        <Box sx={{height: "100vh", position: "relative"}}>
                          <Video data={data} videoRef={videoRef} />
                        </Box>
                      ) : (
                        <Box sx={{height: "100%",display: "flex", justifyContent: "center", alignItems: "center"}}>
                          <Image src={data.link} height="200" width="200" alt="futurelabs"></Image>
                        </Box>
                      )
                    }
                  </Grid>
                </>
              )
            }
            </Grid>
          </Box>
  )
}

export default HalfPage