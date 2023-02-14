import DefaultLayout from "../layout"
import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

function ModellingPage() {

  const videos = [
    {
      link: "https://res.cloudinary.com/usenmfon/video/upload/v1650975960/FutureLabs/All_3D_video_bxracl.mp4",
      text1: "A Better future",
      text2: "Reimagine reality without the physical constraints",
      poster: "/images/modelling_1.webp",
      button: "",
      showAudio: true,
    },
    {
      link: "https://res.cloudinary.com/not-set/video/upload/v1644321263/Military_Drone_Animation_by_Maverick_for_FutureLABS_jm6vgp.mp4",
      text1: "Reinvent",
      text2: "What if a 12 year old genius re-imagined the future of urban transportation, flying cars, drones and vertical takeoffs?",
      poster: "/images/modelling_2.webp",
      button: "",
      showAudio: true,
    },
    {
      link: "https://res.cloudinary.com/usenmfon/video/upload/v1656941904/FutureLabs/Triump_Car_Animation_wsfqpa.mp4",
      text1: "Attention",
      text2: "What’s a 3D Art without attention to details and photorealism?",
      poster: "/images/modelling_3.jpg",
      button: "",
      showAudio: true,
    },
    {
      link: "https://res.cloudinary.com/usenmfon/video/upload/v1650975960/FutureLabs/All_3D_video_bxracl.mp4",
      text1: "Boundless",
      text2: "Who could you be, what could you create if resources where boundless?",
      poster: "/images/modelling_1.webp",
      button: "",
      showAudio: true,
    },
    {
      link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671627716/FUture_pay_phone_render_2_vgeve1.mp4",
      text1: "Clarity",
      text2: "With our 3D models, you have clarity on what you want to build before you start building",
      poster: "/images/modelling_4.webp",
      button: "",
      showAudio: true,
    },
  ]
  
 
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

export default ModellingPage