import DefaultLayout from "../layout";
import { Box } from "@mui/material";
import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

const videos = [
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669901267/Homepage_video_qd3fs5.mp4",
    text: "",
    poster: "/images/homeImage1.jpg"
  },
  {
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1655290226/FutureLabs/flhy_-_Copy_abrth0.mp4",
    text: "",
    poster: "/images/homeImage2.webp"
  },
  {
    link: "https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4",
    text: "",
    poster: "/images/homeImage3.webp"
  },
]

const data = [
  {
    text1: " WE ARE FUTURELABS !",
    text2: "We are A digital agency With global footprints.",
    text3: "Giving Users the best experience while turning ideas into impactful solutions one happy client per time.",
    link: "https://res.cloudinary.com/dremo/image/upload/v1638808890/Futurelabs-logo_2_sgxejz.svg",
    bg: "#FF9000",
    reverse: false,
    buttonColor: "secondary"
  },
  {
    text1: "",
    text2: "We tell stories",
    text3: "We are gifted storytellers, driving viral brand adoption through compelling and relatable stories about our products and services.",
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1655290725/FutureLabs/Comp_1_1_rr5xub.mp4",
    bg: "",
    poster: "/images/about_2.webp",
    reverse: true,
  },
]

function HomePage() {
  return (
    <DefaultLayout>
        <Box sx={{}}>
          <FullPage video={videos[0]} />
        </Box>
        <Box sx={{}}>
          <HalfPage data={data[0]}/>
        </Box>
        <Box sx={{}}>
          <HalfPage data={data[1]} />
        </Box>
        <Box sx={{}}>
          <FullPage video={videos[1]} />
        </Box>
        <Box sx={{}}>
          <FullPage video={videos[2]} />
        </Box>
    </DefaultLayout>
  )
}

export default HomePage