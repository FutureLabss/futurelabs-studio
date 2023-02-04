import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button, Divider, Drawer, ListItemIcon } from '@mui/material';
import Link from 'next/link'
import Image from 'next/image'

const routes = [
  { path: '/about', title: 'About Us' },
  { path: '/services', title: 'Services' },
  { path: '/projects', title: 'Projects' },
  { path: '/contact', title: 'Contact Us' },
]


function DisplayDrawer(props) {

  return (
    <>      
      <List sx={{ p: 1 , width: {xs:240, md: 400 }}} >
        <Link passHref href='/' >
          <ListItem button>
            <ListItemIcon> 
            {/* <Image src='/images/logo.png' height="40" width="40" alt="temp" /> */}
            </ListItemIcon>
          </ListItem>
        </Link>
        <Divider sx={{my:2}} />
        {routes.map((item, index) => (
          <Link passHref href={item.path} key={index}>
            <ListItem key={index} button>
              <ListItemText primary={item.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>

  )
}

export default function DefaultDrawer(props) {
  return (
    <Drawer variant="temporary" anchor="right" open={props.open} onClose={props.close}>
      <DisplayDrawer />
    </Drawer>
  );
}
