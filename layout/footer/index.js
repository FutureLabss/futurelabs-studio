import { useState, useEffect} from 'react'
import { Box, Stack, Grid, Typography, TextField, Button, useMediaQuery, CircularProgress, } from  '@mui/material'
import { styled } from '@mui/material/styles'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useTheme } from "@emotion/react";
import Link from 'next/link'
import Image from 'next/image'
import axios from 'axios'
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SERVER_URL = 'https://futurelabs-blog.onrender.com/contact/send';

const testimonial = [
    {
      id: 0,
      name: "Ima-obong",
      position: "Senior Designer at FutureLabs",
      testimonial: "Working with Futurelabs has been a wonderful experience. I had been entrusted with opportunities and responsibilities early on, helping me accelerate my growth.The work culture of Futurelabs is nurturing.",
      image: "/images/Imaobong.png",
    },
    {
      id: 1,
      name: "Abasifreke",
      position: "CTO at FutureLabs",
      testimonial: "When I set foot into Futurelabs in 2021 as a Senior Software Engineer since then I’ve had numerous chances to be part of something exciting, to be able to learn new things as well as demonstrate my strong commitment and contributions.",
      image: "/images/Abas.png",
    },
    {
      id: 2,
      name: "Triumph",
      position: "Senior Model Designer at FutureLabs",
      testimonial: "Let me start by saying Futurelabs has a talented team of programmers and artists. They are able to produce work that is of a very high standard. They also strive to deliver projects within budget.",
      image: "/images/Triumph.png",
    },
]

function Footer() {
    const [date, setDate] = useState();
    const [data] = useState(testimonial);
    const [loading, setLoading] = useState(false)
    const theme = useTheme();
    const mobile = useMediaQuery(theme.breakpoints.down("md"));

    const handleSubmit = async(event) => {
        event.preventDefault();

        let form = event.currentTarget;
        let formData = new FormData(form)
        let payload = Object.fromEntries(formData.entries())

        try{
            setLoading(true)
            await axios.post(SERVER_URL, payload)
        }catch(error){
            console.log("Failed to send, please try again")
        }
        setLoading(false);

        document.forms[0].reset();
    } 

    const SubscribeButton = styled(TextField)({
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderTopRightRadius: '0',
              borderBottomRightRadius: '0'
            },
        },   
    })

    useEffect(() => {setDate(new Date().getFullYear())}, [])
  return (
    <Box component="section" sx={{ height: "100vh" }}>
        <Stack className="slide-container" sx={{height: "70%", display: {md: "flex", xs: "none"} , justifyContent: "center", paddingTop: "2rem"}}>
            <Slide arrows={false} slidesToShow={1}>
                {
                    data.map((item, index) => (
                        <Box className="each-slide" key={index} sx={{ display: "flex", justifyContent: "center"}}>
                            <Box sx={{display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", borderRadius: "20px", background: "#fafafa", boxShadow: "20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff", textAlign: "center", width: {md: "90%", xs: "80vw"}, height: {md: "260px", xs: "50vh"}, marginBottom: "20px", padding: "2%"}}>
                                <Image src={item.image} width="60" height="60" style={{borderRadius: "50%"}} alt="client" />
                                <Typography variant="p" sx={{padding: "20px", textAlign: "center", fontSize: "1.1rem"}}>{item.testimonial}</Typography>
                                <Typography variant="p" sx={{marginBottom: {md: "0.1rem", xs: "1rem"}, fontSize: {xs: "1rem"}, fontWeight: "900"}}>{item.name}</Typography>
                                <Typography variant="p" sx={{marginBottom: {md: "0.1rem", xs: "1rem"}, fontSize: {xs: ".9rem"}, fontWeight: "100"}}>{item.position}</Typography>
                            </Box>
                        </Box>
                    ))
                }
            </Slide>
        </Stack>
        <Stack sx={{height: {md: "30%", xs: "100%"}, display: "flex",  justifyContent: {md: "space-between", xs: "flex-end"}}}>
            <Grid container sx={{height: {md: "75%", xs: "80%"},}}>
                <Grid item md={4} xs={12} sx={{ padding: "0 4.9%", display: "flex", flexDirection: "column", justifyContent: "space-around",}}>
                    <Image src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png" width="150" height="25" alt="futurelabs" style={{display: mobile ? "none": "block"}}/>
                    <Typography>
                        <strong>Get directions:</strong> <a href="tel:2347080343781" > +234 708 034-3781</a>
                    </Typography>
                    <Typography>
                        <strong>Quick response:</strong> <a href="mailto:info@futurelabs.com.ng"> info@futurelabs.com.ng</a>
                    </Typography>
                    <Stack sx={{display: "flex", flexDirection: "row",}}>
                        <Link href="https://twitter.com/FutureLabsNG">
                            <TwitterIcon />
                        </Link>
                        <Link href="https://www.linkedin.com/company/future-labs-ng/">
                            <LinkedInIcon sx={{marginLeft: "0.7rem" }}/>
                        </Link>
                        <Link href="https://www.facebook.com/FutureLabsNews">
                            <FacebookIcon sx={{marginLeft: "0.7rem" }}/>
                        </Link>
                    </Stack>
                </Grid>
                <Grid item md={4} display="flex" flexDirection="column" justifyContent="space-around" sx={{padding: {md: "0% 13%", xs: "0% 4.9%"},}}>
                    <Typography variant="h5" sx={{fontWeight: 700}}>Company</Typography>
                        <Link href="/">
                            <Typography sx={{fontWeight: 100}}>HOME</Typography>
                        </Link> 
                        <Link href="/about">
                            <Typography sx={{fontWeight: 100}}>ABOUT</Typography>
                        </Link> 
                        <Link href="/services">
                            <Typography sx={{fontWeight: 100}}>SERVICES</Typography>
                        </Link> 
                        {/* <Link href="/">
                            <Typography sx={{fontWeight: 100}}>BLOG</Typography>
                        </Link> */}
                </Grid>
                <Grid item md={4} xs={12} sx={{ padding: "0% 4.9%",}} display="flex" flexDirection="column" justifyContent="space-around" >
                    <Typography variant="h5" sx={{fontWeight: 700}}>Let&apos;s Get in Touch</Typography>
                    <Typography variant="caption">Sign up to receive our newsletter on industry trends</Typography>
                        <form style={{display: "flex", flexDirection: "row"}} onSubmit={handleSubmit}>
                            <SubscribeButton size="small" type="email" name="email" id="outlined-basic" label="Enter email here..." variant="outlined" sx={{borderTopRightRadius: "0", borderBottomRightRadius: "0"}} />
                    {
                        loading ? <Stack sx={{display: "flex", flexDirection: "row", justifyContent: "center", border: "solid white" }}><CircularProgress size={30} /></Stack>:
                            <Button variant="contained" size="small" type="submit" sx={{color: "white", borderTopLeftRadius: "0", borderBottomLeftRadius: "0"}}>Send</Button>
                    }
                        </form>
                </Grid>
            </Grid>
            <Box sx={{display: "flex", justifyContent: "center", color: "#fff", backgroundColor: "#FF9000",}}>
                <Stack sx={{margin: "0 0.1rem"}}>&copy;</Stack>
                <Stack sx={{margin: "0 0.1rem"}}>{date}</Stack>
                <Stack sx={{margin: "0 0.1rem"}}>FUTURELABS</Stack>
            </Box>
        </Stack>
    </Box>
  )
}

export default Footer