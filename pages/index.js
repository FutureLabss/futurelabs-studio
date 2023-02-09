import DefaultLayout from "../layout";
import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

const videos = [
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669901267/Homepage_video_qd3fs5.mp4",
    text1: "",
    text2: "We transform ideas into phenomenal products for outliers",
    poster: "/images/homeImage1.jpg",
    button: "/services",
    showAudio: false,
  },
  {
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1655290226/FutureLabs/flhy_-_Copy_abrth0.mp4",
    text1: "We Strategize",
    text2: "In God we trust, others must bring data, we take our time sifting through data and building models.",
    poster: "/images/homeImage2.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/not-set/video/upload/v1645534184/VID-20220217-WA0018_rtkkjs.mp4",
    text1: "Seamless Cross-border Payments",
    text2: "Securing Payments For Tomorrow on the Web",
    poster: "/images/homeImage3.webp",
    button: "",
    showAudio: true,
  },
]

const data = [
  {
    text1: " WE ARE FUTURELABS !",
    text2: "We are A digital agency With global footprints.",
    text3: "Giving Users the best experience while turning ideas into impactful solutions one happy client per time.",
    link: "https://res.cloudinary.com/dremo/image/upload/v1638808890/Futurelabs-logo_2_sgxejz.svg",
    bg: "#FF9000",
    button: "/about",
    reverse: false,
    buttonColor: "secondary"
  },
  {
    text1: "",
    text2: "We tell stories",
    text3: "We are gifted storytellers, driving viral brand adoption through compelling and relatable stories about our products and services.",
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1655290725/FutureLabs/Comp_1_1_rr5xub.mp4",
    bg: "",
    button: "/strategy",
    poster: "/images/about_2.webp",
    reverse: true,
  },
]

function HomePage() {    
  return (
    <DefaultLayout>
      <FullPage video={videos[0]} />
      <HalfPage data={data[0]}/>
      <HalfPage data={data[1]} />
      <FullPage video={videos[1]} />
      <FullPage video={videos[2]} />
    </DefaultLayout>
  )
}

export default HomePage