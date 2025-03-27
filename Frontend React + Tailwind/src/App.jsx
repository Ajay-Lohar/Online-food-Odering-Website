import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import Navbar from './component/Navbar/Navbar'
import { darkTheme } from './theme/DarkTheme'
import Home from './component/home/Home'
import RestaurantDetails from './component/restaurant/RestaurantDetails'
import Cart from './component/cart/Cart'
import Profile from './component/profile/Profile'
import CustomerRoute from './Routers/CustomerRoute'

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <h1>
      <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRoute/> {/* Page routes */}

    
    </h1>
    </ThemeProvider> 
  )
}

export default App
