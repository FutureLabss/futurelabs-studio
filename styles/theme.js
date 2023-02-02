import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette:{
        primary:{
            main: "#FF9000",
        },
        secondary:{
            main: "#fff",
        },
        custom:{
            light: '#ffa726',
            main: '#f57c00',
            dark: '#ef6c00',
            contrastText: 'rgba(0, 0, 0, 0.87)',
        },
        
    },
    typography:{
        fontFamily: "Inter"
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
                background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));',
            }
          }
        }
     },
})