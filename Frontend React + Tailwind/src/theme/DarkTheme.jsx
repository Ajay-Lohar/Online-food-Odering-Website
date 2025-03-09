import { createTheme } from "@mui/material";

export const darkTheme = createTheme ({
    palette:{
        mode: "dark",
        primary: {
            main: "#e43746",
        },
        secondary: {
            main: "#5A20CB",
            contrastText: "#000"
        },
        black:{
            main: "#0d0d0d"
        },
        background: {
            main: "#fff",
            default: "#0d0d0d",
            paper: "#333333"
        },
        textColor: {
            main: "#fff",
            primary: "#fff",
            secondary: "#fff"
        }

    }
     
})