import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'
import Head from 'next/head'
import {Box, Typography} from "@mui/material"

export default function Blog({ frontmatter, markdown}){
    return (
        <>
            {/* <Head>
                <title>Futurelabs Blog | {frontmatter.title}</title>
            </Head> */}
            <Box sx={{ padding: "4% 4.6%"}}>
                <Typography>{frontmatter.title}</Typography>
                <Typography>{frontmatter.date}</Typography>
                <hr />
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>
            </Box>
        </>
    )
}

export async function getStaticProps({ params: { slug }}) {
    const fileContent = matter(fs.readFileSync(`./content/blogs/${slug}.md`, 'utf8'))
    let frontmatter = fileContent.data
    const markdown = fileContent.content

    return {
        props: { frontmatter, markdown }
    }
}

export async function getStaticPaths(){
    const filesInProjects = fs.readdirSync('./content/blogs')

    const paths = filesInProjects.map(file => {
        const filename = file.slice(0, file.indexOf('.'))
        return { params: { slug : filename} }
    } )

    return {
        paths,
        fallback: false
    }
}