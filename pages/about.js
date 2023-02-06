import DefaultLayout from "../layout"
import FullPage from "../components/fullPage";

const videos = [
    {
        link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1669905979/About_Hero_Video_kuskdy.mp4",
        text1: "",
        text2: "WE ARE FUTURISTS!",
        poster: "/images/about_3.jpg",
        button: "",
        showAudio: false,
    },
]

function AboutPage() {
  return (
    <DefaultLayout>
        <FullPage video={videos[0]}/>
    </DefaultLayout>
  )
}

export default AboutPage