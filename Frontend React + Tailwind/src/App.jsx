import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { darkTheme } from './theme/DarkTheme'
import Home from './component/home/Home'
import RestaurantDetails from './component/restaurant/RestaurantDetails'
import Cart from './component/cart/Cart'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <h1>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      <Cart/>
    </h1>
    </ThemeProvider> 
  )
}

export default App
