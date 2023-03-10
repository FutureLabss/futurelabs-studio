import DefaultLayout from "../layout"
import FullPage from "../components/fullPage";
import Head from "next/head";

const videos = [
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627711/Products_compilation_zmpmzx.mp4",
    text2: "Your product is your strategy and good design doesn’t just look and feel good, it works",
    poster: "/images/homeImage1.jpg",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1651836353/FutureLabs/Rude_Ui_animation_kil6nt.mp4",
    text1: "Hail App",
    text2: "Hail a bike with ease",
    poster: "/images/product_1.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627716/Shopin_animation_oimtji.mp4",
    text1: "Shop for your feet",
    text2: "Get the best footwear on your mobile",
    poster: "/images/product_2.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/usenmfon/video/upload/v1653400836/FutureLabs/Money_nudfwv.mp4",
    text1: "Money App",
    text2: "Make Faster and Secure Payments",
    poster: "/images/product_3.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627716/FUture_pay_phone_render_2_vgeve1.mp4",
    text1: "Securing Payments for Tomorrow",
    text2: "Seamless Cross-border Payments and Currency Conversion",
    poster: "/images/product_4.webp",
    button: "",
    showAudio: true,
  },
]

function ProductPage() {
 
  return (
    <>
      <Head>
          <title>Products - Futurelabs studio</title>
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

export default ProductPage