import {
  Box,
  Grid,
  Stack,
  useMediaQuery,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useTheme } from "@emotion/react";

export default function Blog({ data }) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        component="section"
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "4% 4.6%",
        }}
      >
        <Typography
          variant="large"
          sx={{ textAlign: "center", fontWeight: 700, marginBottom: {md: "1.5rem", xs: "2.5rem"} }}
        >
          Latest Stories
        </Typography>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {data.map((item, index) => (
                <>
                {
                  mobile ? (
                    <Grid item key={item.slug} xs={12} my={3}>
                      <Link href={`/blog/${item.slug}`}>
                        <Typography variant="h2">
                          {item.title}
                        </Typography>
                      </Link>
                      <Typography variant="subtitle2" color="secondary.gray">
                        by Futurelabs
                      </Typography>
                      <hr />
                    </Grid>
                   ):(
                    <Grid
                  item
                  key={item.slug}
                  xs={12}
                  sm={6}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Card
                    sx={{
                      width: 300,
                      my: 3,
                      color: "white",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundImage: `url("https://res.cloudinary.com/usenmfon/image/upload/v1657896137/q7jtmxthhvhev8qxclop.jpg")`,
                    }}
                  >
                    <Link href={`/blog/${item.slug}`}>
                      <CardContent
                        sx={{
                          height: "200px",
                          backgroundColor: "rgba(17, 16, 16, 0.6)",
                        }}
                      >
                        <Stack
                          sx={{
                            mb: 6,
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{ fontSize: 14 }}
                            color="white"
                            gutterBottom
                          >
                            {new Date(item.date).toLocaleDateString("en-us", {
                              year: "numeric",
                              day: "numeric",
                              month: "short",
                            })}
                          </Typography>
                        </Stack>
                        <Typography
                          sx={{ fontSize: 23 }}
                          color="white"
                          gutterBottom
                          className="raleway__font"
                        >
                          {item.title}
                        </Typography>

                        <Typography
                          variant="body2"
                          sx={{
                            mt: 3,
                            cursor: "pointer",
                            width: { md: "100%" },
                            textAlign: { md: "center" },
                          }}
                          className="raleway__font"
                        >
                          Read more &rarr;
                        </Typography>
                      </CardContent>
                    </Link>
                  </Card>
                </Grid>
                   )
                }
                </>
              ))}
        </Grid>
      </Box>
    </>
  );
}
