import DefaultLayout from "../layout"
import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

const videos = [
  {
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1650284804/FutureLabs/Final_Branding_Video_faix3v.mp4",
    text1: "  Branding & Advertising",
    text2: "",
    text3: "Brand visibility is one of our core values ",
    poster: "/images/branding_1.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "    Community & Connectivity",
    text3: "We leverage on social media to reach and create bonds with the larger audience outside our locality",
    poster: "/images/connect.png",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "  Connect with us on LinkedIn",
    text3: "Checkout our latest updates on LinkedIn",
    poster: "/images/LinkedIn.jpg",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "  Connect with us on Twitter",
    text3: "Checkout our latest activities on Twitter",
    poster: "/images/Twitter.jpg",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: " Connect with us on Facebook",
    text3: "Checkout our latest activities on Facebook",
    poster: "/images/Facebook.jpg",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "    We are on Instagram",
    text3: "Visit our Instagram page to see what we do",
    poster: "/images/instagram.jpg",
    button: "",
    showAudio: true,
  },
]


function BrandingPage() {
 
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

export default BrandingPage