import { Box, Grid, Stack, Typography } from "@mui/material"
import Link from "next/link"
import Head from "next/head"

export default function Blog({ data }) {
  return (
    <>
      <Box component="section" sx={{height: "100vh",display: "flex", flexDirection: "column", justifyContent: "center", padding: "4% 4.6%"}}>
          <Typography variant="large"  sx={{textAlign: "center", fontWeight: 700, }}>Latest Stories</Typography>
          <Grid container gap={2} sx={{ justifyContent: "center",alignItems: "center", height: "70%", border: "solid red"}}>
            {
              data.map(blog => (
                <Link key={blog.slug} href={`/blog/${blog.slug}`}>
                <Grid item sx={{height: "100px", width: "100px", border: "solid black"}}>
                    <Typography>{blog.date}:{blog.title}</Typography>
                </Grid>
                </Link>
              ))
            }
          </Grid>
      </Box>
    </>
  )
}