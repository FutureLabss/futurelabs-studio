import DefaultToolbar from "./toolbar";
import { useState } from "react";
import DefaultDrawer from "./drawer";
import Container from "@mui/material/Container"

export default function DefaultLayout({ children, ...props }) {
  const [drawer, setDrawer] = useState(false)

  return (
        <>
            <DefaultToolbar toggleDrawer={() => setDrawer(!drawer)} />
            <DefaultDrawer open={drawer} close={() => setDrawer(false)}  />
            <Container maxWidth={false} disableGutters>
              {children}
            </Container>
        </>
  )
}