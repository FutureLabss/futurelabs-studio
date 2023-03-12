import DefaultLayout from "../layout"
import Head from "next/head"
import FullPage from "../components/fullPage";

const videos = [
  {
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1650284804/FutureLabs/Final_Branding_Video_faix3v.mp4",
    text1: "Branding & Advertising",
    text2: "Proper branding builds brand authority and customer loyalty",
    poster: "/images/branding_1.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "Community & Connectivity",
    text2: "We leverage on social media to reach and create bonds with the larger audience outside our locality",
    poster: "/images/connect.png",
    button: "",
    showAudio: true,
  },
  {
    link: "",
    text1: "Connect with us on LinkedIn",
    text2: "Checkout our latest updates on LinkedIn",
    poster: "/images/LinkedIn.jpg",
    button: "https://www.linkedin.com/company/future-labs-ng/",
    buttonText: "Visit Page",
    showAudio: true,
  },
  {
    link: "",
    text1: "Connect with us on Twitter",
    text2: "Checkout our latest activities on Twitter",
    poster: "/images/Twitter.jpg",
    button: "https://twitter.com/FutureLabsNG",
    buttonText: "Visit Page",
    showAudio: true,
  },
  {
    link: "",
    text1: "Connect with us on Facebook",
    text2: "Checkout our latest activities on Facebook",
    poster: "/images/Facebook.jpg",
    button: "https://www.facebook.com/FutureLabsNews",
    buttonText: "Visit Page",
    showAudio: true,
  },
  {
    link: "",
    text1: "We are on Instagram",
    text2: "Visit our Instagram page to see what we do",
    poster: "/images/instagram.jpg",
    button: "https://www.instagram.com/futurelabshq/",
    buttonText: "Visit Page",
    showAudio: true,
  },
]


function BrandingPage() {
 
  return (
    <>
      <Head>
          <title>Branding - Futurelabs studio</title>
          <meta name="description" content="Learn more about the FutureLabs Community & Work"/>
      </Head>
      <DefaultLayout>
        {
            videos.map((item, index) => {
                return (
                    <FullPage key={index} video={item}/>
                  )
            })
          }
      </DefaultLayout>
    </>
  )
}

export default BrandingPage