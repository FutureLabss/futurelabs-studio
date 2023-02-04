
function Video({ data }) {
  return (
    <video autoPlay muted loop poster={data.poster} style={{objectFit: "cover", height: "100%", width: "100%", filter: "brightness(50%)",}}>
      <source src={data.link} type="video/mp4"/>
    </video>
  )
}

export default Video