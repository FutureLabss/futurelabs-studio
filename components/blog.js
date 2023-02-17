import { Box, Grid, Stack, useMediaQuery, Typography, Card, CardContent } from "@mui/material"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import { useTheme } from "@emotion/react";


export default function Blog({ data }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box component="section" sx={{height: "100vh",display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 4.6%"}}>
          <Typography variant="large"  sx={{textAlign: "center", fontWeight: 700, }}>Latest Stories</Typography>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {
            mobile ? (
              <></>
            ) : (
              <>
              {data.map((item, index) => (
        <Grid key={index} item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center",}}>
            <Card sx={{ width: 300, my: 3, color: 'white', backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundImage: `url("https://res.cloudinary.com/usenmfon/image/upload/v1657896137/q7jtmxthhvhev8qxclop.jpg")`}}>
          <Link key={item.slug} href={`/blog/${item.slug}`}>
              <CardContent sx={{height: '200px',  backgroundColor: 'rgba(17, 16, 16, 0.6)'}}>
              <Stack sx={{ mb: 6, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Typography
                  sx={{ fontSize: 14}}
                  color="white"
                  gutterBottom
                >
                  {new Date(item.date).toLocaleDateString('en-us', { year: "numeric", day: "numeric",month: "short"})}
                </Typography>
              </Stack>

                {/* <Typography sx={{ fontSize: 14 }} color="white" gutterBottom className="roboto__font">
                  {item.user.username}
                </Typography> */}

                <Typography sx={{ fontSize: 23 }} color="white" gutterBottom className="raleway__font">
                  {item.title}
                </Typography>

                
                  <Typography variant="body2" sx={{ mt: 3,cursor: 'pointer', width:{md: '100%'}, textAlign:{md:  'center'} }} 
                  className="raleway__font" >
                    Read more &rarr; 
                  </Typography>
                
              </CardContent>
            </Link>
            </Card>
        </Grid>
      ))}
      </>
            )
          }
      
    </Grid>
          {/* <Grid container gap={2} sx={{ justifyContent: "center",alignItems: "center", height: "70%", }}>
            {
              data.map(blog => (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <Grid item sx={{height: "100px", width: "100px", border: "solid black"}}>
                    <Image src="https://res.cloudinary.com/usenmfon/image/upload/v1657896137/q7jtmxthhvhev8qxclop.jpg" width="20" height="20" alt="pc" />
                    <Typography>{blog.date}:{blog.title}</Typography>
                </Grid>
                </Link>
              ))
            }
          </Grid> */}
      </Box>
    </>
  )
}