import { useState, useEffect } from "react";
import {
  Box,
  Stack,
  Grid,
  Typography,
  TextField,
  Button,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useTheme } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SERVER_URL = "https://futurelabs-blog.onrender.com/contact/send";

const testimonial = [
  {
    id: 0,
    name: "Richard Wilcox",
    position: " CEO of Centzmi",
    testimonial:
      "FutureLabs has been a game changer for us. Their innovative tech solutions and hands-on approach helped streamline our operations and accelerate our growth. We are proud to partner with such a forward-thinking tech hub.",
    image: "/images/avatar.jpg",
  },

  {
    id: 1,
    name: "Sarah Adeyemi",
    position: "Founder of QuickLink",
    testimonial:
      "Working with FutureLabs has been an incredible experience. Their team helped us build a scalable platform from the ground up, and their technical expertise has been invaluable in solving complex challenges. FutureLabs truly understands the needs of startups.",
    image: "/images/avatar.jpg",
  },

  {
    id: 2,
    name: "Uche",
    position: "Pawazap",
    testimonial:
      "FutureLabs took care of our website with integrated APIs that have been instrumental in enhancing our services. Their team made the entire process seamless, and the support has been excellent.",
    image: "/images/avatar.jpg",
  },
];

function Footer() {
  const [date, setDate] = useState();
  const [data] = useState(testimonial);
  const [loading, setLoading] = useState(false);
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = async (event) => {
    event.preventDefault();

    let form = event.currentTarget;
    let formData = new FormData(form);
    let payload = Object.fromEntries(formData.entries());

    try {
      setLoading(true);
      await axios.post(SERVER_URL, payload);
    } catch (error) {
      console.log("Failed to send, please try again");
    }
    setLoading(false);

    document.forms[0].reset();
  };

  const SubscribeButton = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0",
      },
    },
  });

  const MuiTypography = styled(Typography)({
    "&:hover": {
      backgroundColor: "transparent",
      color: "#FF9000",
    },
  });

  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <Box component="section" sx={{ height: "100vh" }}>
      <Stack
        className="slide-container"
        sx={{
          height: "70%",
          display: { md: "flex", xs: "none" },
          justifyContent: "center",
          paddingTop: "2rem",
        }}
      >
        <Slide arrows={false} slidesToShow={1}>
          {data.map((item, index) => (
            <Box
              className="each-slide"
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                  borderRadius: "20px",
                  background: "#fafafa",
                  boxShadow: "20px 20px 60px #d5d5d5, -20px -20px 60px #ffffff",
                  textAlign: "center",
                  width: { md: "90%", xs: "80vw" },
                  height: { md: "260px", xs: "50vh" },
                  marginBottom: "20px",
                  padding: "2%",
                }}
              >
                <Image
                  src={item.image}
                  width="60"
                  height="60"
                  style={{ borderRadius: "50%" }}
                  alt="client"
                  className="bg-black"
                />
                <Typography
                  variant="p"
                  sx={{
                    padding: "20px",
                    textAlign: "center",
                    fontSize: "1.1rem",
                  }}
                >
                  {item.testimonial}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    marginBottom: { md: "0.1rem", xs: "1rem" },
                    fontSize: { xs: "1rem" },
                    fontWeight: "900",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    marginBottom: { md: "0.1rem", xs: "1rem" },
                    fontSize: { xs: ".9rem" },
                    fontWeight: "300",
                  }}
                >
                  {item.position}
                </Typography>
              </Box>
            </Box>
          ))}
        </Slide>
      </Stack>
      <Stack
        sx={{
          height: { md: "30%", xs: "100%" },
          display: "flex",
          justifyContent: { md: "space-between", xs: "flex-end" },
        }}
      >
        <Grid container sx={{ height: { md: "75%", xs: "80%" } }}>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              padding: "0 4.9%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: { sm: "center" },
            }}
          >
            <Image
              src="https://res.cloudinary.com/dekbvdqnb/image/upload/v1634901054/Futurelabs-logo_1_udit2z.png"
              width="150"
              height="25"
              alt="futurelabs"
              style={{ display: mobile ? "none" : "block" }}
            />
            <Typography>
              <strong>Get directions:</strong>{" "}
              <a href="tel:2347080343781"> +234 708 034-3781</a>
            </Typography>
            <Typography>
              <strong>Quick response:</strong>{" "}
              <a href="mailto:info@futurelabs.com.ng">
                {" "}
                info@futurelabs.com.ng
              </a>
            </Typography>
            <Stack sx={{ display: "flex", flexDirection: "row" }}>
              <Link href="https://twitter.com/FutureLabsNG" alt="twitter link">
                <TwitterIcon />
              </Link>
              <Link
                href="https://www.linkedin.com/company/future-labs-ng/"
                alt="linkedin link"
              >
                <LinkedInIcon sx={{ marginLeft: "0.7rem" }} />
              </Link>
              <Link
                href="https://www.facebook.com/FutureLabsNews"
                alt="facebook link"
              >
                <FacebookIcon sx={{ marginLeft: "0.7rem" }} />
              </Link>
            </Stack>
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            sx={{
              padding: { md: "0% 13%", xs: "0% 4.9%" },
              alignItems: { sm: "center" },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Company
            </Typography>
            <Link href="/">
              <MuiTypography sx={{ fontWeight: 300 }}>HOME</MuiTypography>
            </Link>
            <Link href="/about">
              <MuiTypography sx={{ fontWeight: 300 }}>ABOUT</MuiTypography>
            </Link>
            <Link href="/services">
              <MuiTypography sx={{ fontWeight: 300 }}>SERVICES</MuiTypography>
            </Link>
            {/* <Link href="/">
                            <MuiTypography sx={{fontWeight: 300}}>BLOG</MuiTypography>
                        </Link> */}
          </Grid>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              padding: "0% 4.9%",
              alignItems: { sm: "center" },
              justifyContent: { md: "space-around", xs: "space-around" },
            }}
            display="flex"
            flexDirection="column"
          >
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Let&apos;s Get in Touch
            </Typography>
            <Typography variant="caption">
              Sign up to receive our newsletter on industry trends
            </Typography>
            <form
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                maxWidth: "400px",
              }}
              onSubmit={handleSubmit}
            >
              <SubscribeButton
                size="small"
                type="email"
                name="email"
                id="outlined-basic"
                label="Enter email here..."
                variant="outlined"
                sx={{
                  borderTopRightRadius: "0",
                  borderBottomRightRadius: "0",
                  width: "100%",
                }}
              />
              {loading ? (
                <Stack
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    border: "solid white",
                  }}
                >
                  <CircularProgress size={30} />
                </Stack>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  sx={{
                    color: "white",
                    borderTopLeftRadius: "0",
                    borderBottomLeftRadius: "0",
                  }}
                >
                  Send
                </Button>
              )}
            </form>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            backgroundColor: "#FF9000",
            padding: ".4rem 0rem",
          }}
        >
          <Stack sx={{ margin: "0 0.1rem" }}>&copy;</Stack>
          <Stack sx={{ margin: "0 0.1rem" }}>{date}</Stack>
          <Stack sx={{ margin: "0 0.1rem" }}>FUTURELABS</Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
