import DefaultLayout from "../layout"
import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

const videos = [
  {
    link: "https://res.cloudinary.com/dps0unrwm/video/upload/v1657903348/Futurelabs/2D_Animation_olttrg.mp4",
    text1: "  Art bridges the gulf between  dreams and reality",
    text2: "",
    text3: "",
    poster: "/images/digital3.jpg",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "  A better Future",
    text3: "Art helps us reimagine what could be, the future is a masterpiece",
    poster: "/images/digital1.jpg",
    button: "",
    showAudio: false,
  },
  {
    link: "",
    text1: "  Attention to details",
    text3: "Imagine a future where resources are illimitable if we can dream it, we can build it.",
    poster: "/images/digital2.png",
    button: "",
    showAudio: false,
  },
  {
    link: "",
    text1: "  Versatile",
    text3: "We use both digital and local media to pass messages ",
    poster: "/images/digital4.png",
    button: "",
    showAudio: false,
  },

]

function DigitalArtPage() {
 
  return (
    <DefaultLayout>
         {
          videos.map((item, index) => {
              return (
                  <FullPage key={index} video={item}/>
                )
          })
        }
    </DefaultLayout>
  )
}

export default DigitalArtPage