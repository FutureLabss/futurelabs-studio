import { Grid, Typography, Button } from "@mui/material";
import Link from "next/link"

function Text({ data }) {
    return (
        <Grid gap={1} item xs={12} display="flex" flexDirection="column" justifyContent="center" sx={{backgroundColor: data.bg, padding: "0 4.6%", position: "absolute", bottom: {md: "0.5rem", xs: "2.5rem"}, left: 0, zIndex: 1}}>
        <Typography variant="h4" color="secondary" sx={{fontStyle: "normal", fontWeight: 700, lineHeight: "120%", letterSpacing: 3.0}}>
          {data.text1}
        </Typography>
        <Typography variant="large" color="secondary" sx={{fontStyle: "normal", fontWeight: 700,}}>
          {data.text2}
        </Typography>
        <Typography variant="h6" color="secondary.gray" sx={{fontStyle: "normal", fontWeight: "normal", lineHeight: "150%"}}>
          {data.text3}
        </Typography>
        {
          data.button ? (
            <Link href={data.button}>
              <Button variant="outlined" sx={{width: "12rem", marginTop: "1rem"}} color={data.buttonColor}>{data.buttonText}</Button>
            </Link>  
            ):(
              ""
          )
        }
      </Grid>   
    )
  }
  
  export default Text