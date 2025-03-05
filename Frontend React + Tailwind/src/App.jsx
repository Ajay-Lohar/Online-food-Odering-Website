import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { darkTheme } from './theme/DarkTheme'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <h1>
      <CssBaseline/>
      <Navbar/>
    </h1>
    </ThemeProvider> 
  )
}

export default App
