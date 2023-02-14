import DefaultLayout from "../layout"
import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

const videos = [

  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671625335/website_compilation_1_ekvtpf.mp4",
    text1: "Websites",
    text2: "Websites are the heart of the internet, an engaging website sets the tone for your branding and global marketing outcomes",
    poster: "/images/websites_1.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/not-set/video/upload/v1640267570/around_main_comp_d1x979.mp4",
    text1: "Around",
    text2: "The extraordinary noise-canceling experience requires an extraordinary website",
    poster: "/images/websites_1.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671625337/VID_20220316_175006_638_a4uhed.mp4",
    text1: "Emmy Chris",
    text2: "We partnered with Minister EmmyChris to bring the gospel closer to worshippers",
    poster: "/images/websites_2.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671625336/final_future_ride_2_vhgl9g.mp4",
    text1: "Transcend",
    text2: "Reimagining the future of transportation in Akwa Ibom",
    poster: "/images/websites_4.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627716/FUture_pay_phone_render_2_vgeve1.mp4",
    text1: "Securing Payments for Tomorrow",
    text2: "Seamless Cross-border Payments and Currency Conversion",
    poster: "/images/websites_3.webp",
    button: "",
    showAudio: true,
  },
]

function WebsitesPage() {
 
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

export default WebsitesPage