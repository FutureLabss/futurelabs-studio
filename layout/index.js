import { useState,} from "react";
import DefaultToolbar from "./toolbar";
import DefaultDrawer from "./drawer";
import Contact from "./contact";
import DefaultFooter from "./footer";
import Container from "@mui/material/Container";

export default function DefaultLayout({ children, ...props }) {
  const [drawer, setDrawer] = useState(false)

  return (
        <>
            <DefaultToolbar toggleDrawer={() => setDrawer(!drawer)} />
            <DefaultDrawer open={drawer} close={() => setDrawer(false)}  />
            <Container className="scroller" maxWidth={false} disableGutters>
              {children}
            <Contact />
            <DefaultFooter />
            </Container>
        </>
  )
}