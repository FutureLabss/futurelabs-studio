import DefaultLayout from "../layout"

import HalfPage from "../components/halfPage"
import FullPage from "../components/fullPage";

const videos = [
  {
    link: "https://res.cloudinary.com/eacademy/video/upload/v1643989706/Agency/Strategy.mp4",
    text1: "Vision & Growth",
    text2: "",
    text3: "Vision propels growth, we help startups scale by asking the right question; why? ",
    poster: "/images/strategy_1.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671624444/Idea_Generation_without_Social_Media_Icons_l5m04b.mp4",
    text1: "Ideas Aren’t Enough",
    text3: "This generation is only fascinated by results,  let’s help you go from ideas to MVPs rapidly",
    poster: "/images/strategy_2.webp",
    button: "",
    showAudio: true,
  },
  {
    link: "https://res.cloudinary.com/unlimitedreactive/video/upload/v1671624442/Project_1000_hcron7.mp4",
    text2: "Bringing You Project 1000",
    text3: "We partnered with American Cybersecurity experts to train young minds with digital skills, as a means to fight cyber fraud",
    poster: "/images/strategy_3.webp",
    button: "",
    showAudio: true,
  },

]

function StrategyPage() {
 
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

export default StrategyPage