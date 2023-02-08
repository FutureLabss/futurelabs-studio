import { Grid, Button, Typography, useMediaQuery, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import Video from "./video";
import Text from "./text";

function HalfPage({ data }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
        <Grid container direction={data.reverse ? "row-reverse" : "row"} sx={{ minHeight: '100vh',}}>
          {
            mobile ? (
              <>
              {
                data.poster ? (
                  <Box sx={{height: "100vh", position: "relative"}}>
                    <Video data={data}/>
                    <Text data={data}/>                
                  </Box>
                ):(
                  <Grid item xs={12} display="flex" flexDirection="column" justifyContent="center" sx={{backgroundColor: data.bg, padding: "0% 2%",}}>
                    <Typography variant="h4" color="secondary" sx={{fontStyle: "normal", fontWeight: 500, fontSize: "14px", lineHeight: "120%", letterSpacing: 3.0}}>
                      {data.text1}
                    </Typography>
                    <Typography variant="large" color="secondary" sx={{fontStyle: "normal", fontWeight: 700, fontSize: "52px", lineHeight: "120%"}}>
                      {data.text2}
                    </Typography>
                    <Typography variant="h5" color="secondary" sx={{fontStyle: "normal", fontWeight: 400, fontSize: "20px", lineHeight: "150%"}}>
                      {data.text3}
                    </Typography>
                    {
                      data.button ? (
                        <Link href={data.button}>
                          <Button variant="outlined" sx={{width: "10rem", marginTop: "1rem"}} color={data.buttonColor}>Learn More</Button>
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
                <Grid item md={6} xs={6} display="flex" flexDirection="column" justifyContent="center" sx={{padding: "0 2%",}}>
                  <Typography variant="h4" color="primary" sx={{fontStyle: "normal", fontWeight: 500, fontSize: "16px", lineHeight: "120%", letterSpacing: 3.0}}>
                    {data.text1}
                  </Typography>
                  <Typography variant="h4" sx={{fontStyle: "normal", fontWeight: 700, fontSize: "52px", lineHeight: "120%"}}>
                    {data.text2}
                  </Typography>
                  <Typography variant="h6">
                    {data.text3}
                  </Typography>
                  {
                      data.button ? (
                        <Link href={data.button}>
                          <Button variant="outlined" sx={{width: "10rem", marginTop: "1rem"}} >Learn More</Button>
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
                        <Video data={data}/>
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
  )
}

export default HalfPage