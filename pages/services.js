import DefaultLayout from "../layout"
import FullPage from "../components/fullPage";
import Head from "next/head"

const data = [
  {
    poster: "/images/services_1.webp",
    link: "https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4",
    text1: "Strategy",
    button: "/strategy",
    buttonText: "Learn More",
    showAudio: true,
  },
  {
    poster: "/images/services_2.webp",
    link: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655900224/Futurelabs/Products_compilation_wef4u2.mp4",
    text1: "Product Design",
    button: "/products",
    buttonText: "Learn More",
    showAudio: true,
  },
  {
    poster: "/images/services_3.webp",
    link: "https://res.cloudinary.com/dps0unrwm/video/upload/v1655900985/Futurelabs/website_compilation_1_ua7nyt.mp4",
    text1: "Websites",
    button: "/websites",
    buttonText: "Learn More",
    showAudio: true,
  },
  {
    poster: "/images/services_4.webp",
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1650284804/FutureLabs/Final_Branding_Video_faix3v.mp4",
    text1: "Branding",
    break: " Advertising",
    button: "/strategy",
    buttonText: "Learn More",
    showAudio: true,
  },
  {
    poster: "/images/services_5.webp",
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1650975960/FutureLabs/All_3D_video_bxracl.mp4",
    text1: "3D Modelling",
    button: "/modelling",
    buttonText: "Learn More",
    showAudio: true,
  },
  {
    poster: "/images/services_6.jpg",
    link: "https://res.cloudinary.com/dps0unrwm/video/upload/v1657903348/Futurelabs/2D_Animation_olttrg.mp4",
    text1: "Digital Art",
    break: "NFTs",
    button: "/digitalart",
    buttonText: "Learn More",
    showAudio: true,
  },
];

function ServicesPage() {
 
  return (
    <>
      <Head>
          <title>Services - Futurelabs studio</title>
          <meta name="description" content="Learn more about the FutureLabs Community & Work"/>
      </Head>
      <DefaultLayout>
          {
            data.map((item, index) => {
                return (
                    <FullPage key={index} video={item}/>
                  )
            })
          }
      </DefaultLayout>
    </>
  )
}

export default ServicesPage