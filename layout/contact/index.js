import { useState } from 'react'
import { Box, Stack, Typography, TextField, InputLabel, Input, Button, Grid, useMediaQuery, CircularProgress, Alert } from '@mui/material'
import { useTheme } from "@emotion/react";
import axios from "axios";

const SERVER_URL = 'https://futurelabs-blog.onrender.com/contact';

function Contact() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));


    const handleSubmit = async(event) => {
        event.preventDefault();

        let form = event.currentTarget;
        let formData = new FormData(form)
        let payload = Object.fromEntries(formData.entries())

        try{
            setError("")
            setLoading(true)
            await axios.post(SERVER_URL, payload)
            setMessage("Successfully sent!")
        }catch(error){
            setError("Failed to send, please try again")
        }
        setTimeout(() => setMessage(""), 3000)
        setLoading(false);

        document.forms[0].reset();
    }

  return (
    <Box component="section" id="contact" sx={{height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 4.6%"}}>
        <Typography variant="large"  sx={{textAlign: "center", fontWeight: 700, }}>Contact Us</Typography>
        <form onSubmit={handleSubmit}>
            <Grid container my={2} sx={{ height: "70%", display: "flex", justifyContent: {sm: "space-between"} }}>
                <Grid item md={6} display="flex" flexDirection="column" justifyContent="space-between">
                    <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                        <InputLabel htmlFor="name" sx={{ fontWeight: 700, fontSize: "18px",}}>My name is</InputLabel>
                        <Input sx={{width: "20rem"}} type="text" name="name" id="name" placeholder="Your name" required/>
                    </Stack>  
                    <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                        <InputLabel htmlFor="phonenumber" sx={{ fontWeight: 700, fontSize: "18px",}}>My phone number is</InputLabel>
                        <Input sx={{width: "20rem"}} name="phone" id="phone" placeholder="Your phone number" required/>
                    </Stack> 
                    <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                        <InputLabel htmlFor="company" sx={{ fontWeight: 700, fontSize: "18px",}}>I work at</InputLabel>
                        <Input sx={{width: "20rem"}} type="text" name="company" id="company" placeholder="Your company" required/>
                    </Stack> 
                    <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                        <InputLabel htmlFor="email" sx={{ fontWeight: 700, fontSize: "18px",}}>Reach me at</InputLabel>
                        <Input sx={{width: "20rem"}} type="email" name="email" id="email" placeholder="Your@email.com" required/>
                    </Stack>     
                </Grid>
                <Grid item md={6} display="flex" flexDirection="column">
                    <Stack sx={{marginTop: {md: "10px", xs: "20px"}}}>
                        <InputLabel htmlFor="message" sx={{ fontWeight: 700, fontSize: "18px",}}>Message</InputLabel>
                        <TextField
                            id="message"
                            name="message"
                            multiline
                            rows={mobile ? 6 : 9}
                            placeholder="Start typing here..."
                            variant="standard"
                            sx={{width: "20rem"}}
                            required
                        />
                    </Stack>
                    {
                        error && (
                            <Alert severity="error">{error}</Alert>
                        )
                    }
                    {
                        message && (
                            <Alert severity="success">{message}</Alert>
                        )
                    }
                    {
                        loading ? <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "center", border: "solid white" }}><CircularProgress size={30} /></Stack>:
                        <Button variant="contained" type="submit" sx={{width: "10rem", marginTop: {md: "10px", xs: "20px"}, color: "white"}}>Submit</Button>
                    }
                </Grid>
            </Grid>
        </form>
    </Box>
  )
}

export default Contact