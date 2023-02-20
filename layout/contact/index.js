import {Box, Stack, Typography, TextField, InputLabel, Input, Button, Grid, useMediaQuery} from '@mui/material'
import { useTheme } from "@emotion/react";


function Contact() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box component="section" id="contact" sx={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 4.6%"}}>
            <Typography variant="large"  sx={{textAlign: "center", fontWeight: 700, }}>Contact Us</Typography>
        <Grid container my={2} sx={{ height: "70%"}}>
            <Grid item md={6} display="flex" flexDirection="column" justifyContent="space-between">
                <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                    <InputLabel htmlFor="name" sx={{ fontWeight: 700, fontSize: "18px",}}>My name is</InputLabel>
                    <Input sx={{width: "20rem"}} id="name" placeholder="Your name" />
                </Stack>  
                <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                    <InputLabel htmlFor="phonenumber" sx={{ fontWeight: 700, fontSize: "18px",}}>My phone number is</InputLabel>
                    <Input sx={{width: "20rem"}} id="phonenumber" placeholder="Your phone number" />
                </Stack> 
                <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                    <InputLabel htmlFor="company" sx={{ fontWeight: 700, fontSize: "18px",}}>I work at</InputLabel>
                    <Input sx={{width: "20rem"}} id="company" placeholder="Your company" />
                </Stack> 
                <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                    <InputLabel htmlFor="email" sx={{ fontWeight: 700, fontSize: "18px",}}>Reach me at</InputLabel>
                    <Input sx={{width: "20rem"}} id="email" placeholder="Your@email.com" />
                </Stack>     
            </Grid>
            <Grid item md={6} display="flex" flexDirection="column">
                <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                    <InputLabel htmlFor="message" sx={{ fontWeight: 700, fontSize: "18px",}}>Message</InputLabel>
                    <TextField
                        id="message"
                        multiline
                        rows={mobile ? 6 : 9}
                        placeholder="Start typing here..."
                        variant="standard"
                        sx={{width: "20rem"}}
                    />
                </Stack>
                <Button variant="contained" sx={{width: "10rem", marginTop: {md: "10px", xs: "20px"}, color: "white"}}>Submit</Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Contact