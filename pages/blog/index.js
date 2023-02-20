import DefaultLayout from "../../layout"
import { Box, Typography, Stack } from "@mui/material"
import BlogSection from "../../components/blog"
import fs from "fs"
import matter from "gray-matter"

export default function Blog({ blogs }) {
  return (
    <DefaultLayout>
        <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "100%",
          backgroundImage: `url("https://res.cloudinary.com/dremo/image/upload/v1634903273/IMG_0107_1_a80rgw.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backdroundRepeat: "no-repeat",
          position: "relative",
        }}
        >
        <Box sx={{width:"100%", padding: "8% 4.6%", position: "absolute", bottom: {md: "0.5rem", xs: "2.5rem"}, left: 0, zIndex: 1}}>
          <Stack spacing={1} sx={{maxWidth: {md: "400px", xs: "300px"}, marginBottom:  {md: "0.2rem", xs: "1rem"},}}>
            <Typography variant="h1" color="secondary" sx={{fontStyle: "normal", fontWeight: 700, lineHeight: "120%"}}>
                Stories From The <br /> Best Curators
            </Typography>
            <Typography variant="h4" color="secondary" sx={{fontStyle: "normal", fontWeight: "normal", lineHeight: "150%"}}>
                Read well-crafted articles from happenings around the globe
            </Typography>
          </Stack>
         </Box>
      </Box>
      <BlogSection data={blogs} />
    </DefaultLayout>
  )
}

export async function getStaticProps(){
    const filesInBlogs = fs.readdirSync('./content/blogs')
  
    const blogs = filesInBlogs.map(filename => {
      const file = fs.readFileSync(`./content/blogs/${filename}`, 'utf8')
      const matterData = matter(file)
  
      return {
        ...matterData.data,
        slug: filename.slice(0, filename.indexOf('.'))
      }
    })
  
    return {
      props: {
        blogs
      }
    }
  }