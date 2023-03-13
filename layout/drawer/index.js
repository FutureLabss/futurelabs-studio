import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled, } from '@mui/material/styles';
import { Button, Divider, Drawer, Box, ListItemIcon } from '@mui/material';
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'

const routes = [
  { path: '/about', title: 'About Us' },
  { path: '/services', title: 'Services' },
  { path: '/websites', title: 'Websites' },
  { path: '/products', title: 'Products' },
  { path: '/modelling', title: 'Modelling' },
  { path: '/strategy', title: 'Strategy' },
  { path: '/branding', title: 'Branding' },
  { path: '/digitalart', title: 'Digital Arts & NFTs' },
  { path: '#contact', title: 'Contact Us' },
  // { path: '/', title: 'Blog' },
]

const MuiListItem = styled(ListItem)({
      "&:hover": {
        backgroundColor: "transparent",
        color: "#FF9000"
      },
})

function DisplayDrawer({close}) {

  return (
    <>      
      <List sx={{ p: 1 , display: "flex", flexDirection: "column", alignItems: "center", height: "100%", width: {xs:240, md: 400 }}} >
        <Box sx={{ display: "flex", width: "inherit"}}>
          <Link passHref href='/' alt="futurelabs_logo">
            <ListItem>
              <ListItemIcon> 
              <Image src='/images/futurelabs_icon.png' height="25" width="25" alt="futurelabs_logo" />
              </ListItemIcon>
            </ListItem>
          </Link>
          <MuiListItem sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end"}} onClick={close}>
              <CloseIcon sx={{cursor: "pointer"}}/>
          </MuiListItem>
        </Box>
        {/* <Divider sx={{my:2}} /> */}
        {routes.map((item, index) => (
          <Link passHref href={item.path} key={index} alt={item.title}>
            <MuiListItem key={index} button>
              <ListItemText primary={item.title} />
            </MuiListItem>
          </Link>
        ))}
      </List>
    </>

  )
}

export default function DefaultDrawer(props) {
  return (
    <Drawer variant="temporary" anchor="right" open={props.open} onClose={props.close}>
      <DisplayDrawer close={props.close}/>
    </Drawer>
  );
}
