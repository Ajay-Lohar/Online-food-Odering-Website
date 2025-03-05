import { createTheme } from "@mui/material";

export const darkTheme = createTheme ({
    palette:{
        mode: "dark",
        primary: {
            main: "#e91e63",
        },
        secondary: {
            main: "#5A20CB",
            contrastText: "#000"
        },
        black:{
            main: "#242B2E"
        },
        background: {
            main: "#fff",
            default: "#121212",
            paper: "#333333"
        },
        textColor: {
            main: "#fff",
            primary: "#fff",
            secondary: "#fff"
        }

    }
     
})