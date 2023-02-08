import DefaultLayout from "../layout"
import FullPage from "../components/fullPage";
import HalfPage from "../components/halfPage";

const videos = [
    {
        link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669905979/About_Hero_Video_kuskdy.mp4",
        text1: "WE ARE FUTURISTS!",
        text2: "",
        text3: "",
        poster: "/images/about_3.jpg",
        button: "",
        showAudio: false,
    },
    {
        link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906852/about_4_oakopa.mp4",
        text1: "THE BEST FUTURE IMAGINABLE",
        text2: "",
        text3: "We draw from our deep skillsets across multiple domains to build the best future imaginable",
        poster: "/images/about_4.webp",
        button: "",
        showAudio: false,
    },
    {
        link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907205/about_underscore_7_cfhk5q.mp4",
        text1: "DREAM BIG",
        text2: "",
        text3: "The future was created by men who dared to dream it better than they met it.",
        poster: "/images/about_7.jpg",
        button: "",
        showAudio: false,
    },
]

const data = [
  {
    text1: "",
    text2: "WE ARE FUTURELABS!",
    text3: "We will help you plan for the future with extraordinary foresight, You can either grow exponentially as the android OS or go extinct like blackberry",
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906508/Comp_1_1_ixmb3j.mp4",
    bg: "",
    button: "",
    poster: "/images/about_1.jpg",
    reverse: false,
  },
  {
    text1: "",
    text2: "THE BEST FUTURE IMAGINABLE",
    text3: "We combine a p2p and deep learning model to deliver impactful business solutions",
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669906737/Comp_1_1_z63wwg.mp4",
    bg: "",
    button: "",
    poster: "/images/about_2.webp",
    reverse: true,
  },
  {
    text1: "",
    text2: "SEAMLESS COLLABORATION",
    text3: "We Intuitively understand our client’s business language, enabling seamless collaboration",
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907073/about_5_pt2jkg.mp4",
    bg: "",
    button: "",
    poster: "/images/about_5.webp",
    reverse: false,
  },
  {
    text1: "",
    text2: "TURBOCHARGE YOUR KPIs",
    text3: "We will analyze your brand data and draw valuable insights to increase revenue",
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669907139/About_6_kcbr3x.mp4",
    bg: "",
    button: "",
    poster: "/images/about_6.webp",
    reverse: true,
  },
  
]

function AboutPage() {
  return (
    <DefaultLayout>
        <FullPage video={videos[0]}/>
        <HalfPage data={data[0]} />
        <HalfPage data={data[1]} />
        <FullPage video={videos[1]}/>
        <HalfPage data={data[2]} />
        <HalfPage data={data[3]} />
        <FullPage video={videos[2]}/>
    </DefaultLayout>
  )
}

export default AboutPage