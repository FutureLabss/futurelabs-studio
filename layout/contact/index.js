import {Box, Stack, Typography, TextField, InputLabel, Input, Button, Grid} from '@mui/material'


function Contact() {
  return (
    <Box sx={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 4.9%"}}>
            <Typography variant="large" sx={{textAlign: "center", fontWeight: 700, }}>Contact Us</Typography>
        <Grid container sx={{ height: "70%"}}>
            <Grid item md={6} display="flex" flexDirection="column" justifyContent="space-between">
                <Stack>
                    <InputLabel htmlFor="name" sx={{ fontWeight: 700, fontSize: "18px",}}>My name is</InputLabel>
                    <Input sx={{width: "20rem"}} id="name" placeholder="Your name" />
                </Stack>  
                <Stack>
                    <InputLabel htmlFor="phonenumber" sx={{ fontWeight: 700, fontSize: "18px",}}>My phone number is</InputLabel>
                    <Input sx={{width: "20rem"}} id="phonenumber" placeholder="Your phone number" />
                </Stack> 
                <Stack>
                    <InputLabel htmlFor="company" sx={{ fontWeight: 700, fontSize: "18px",}}>I work at</InputLabel>
                    <Input sx={{width: "20rem"}} id="company" placeholder="Your company" />
                </Stack> 
                <Stack>
                    <InputLabel htmlFor="email" sx={{ fontWeight: 700, fontSize: "18px",}}>Reach me at</InputLabel>
                    <Input sx={{width: "20rem"}} id="email" placeholder="Your@email.com" />
                </Stack>     
            </Grid>
            <Grid item md={6} display="flex" flexDirection="column">
                <Stack>
                    <InputLabel htmlFor="message" sx={{ fontWeight: 700, fontSize: "18px",}}>Message</InputLabel>
                    <TextField
                        id="message"
                        multiline
                        rows={4}
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