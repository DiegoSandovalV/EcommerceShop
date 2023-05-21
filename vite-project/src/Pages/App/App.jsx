import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount/Index'
import MyOrder from '../MyOrder/Index'
import MyOrders from '../MyOrders/Index'
import NotFound from '../NotFound/Index'
import SignIn from '../SignIn/Index'
import Navbar from '../../Components/Navbar'


import '../App.css'


//Routing Function
const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/myaccount',
      element: <MyAccount/>
    },
    {
      path: '/myorder',
      element: <MyOrder/>
    },
    {
      path: '/myorders',
      element: <MyOrders/>
    },
    {
      path: '/*',
      element: <NotFound/>
    },
    {
      path: '/signin',
      element: <SignIn/>
    },
  ])
  return routes
}


const App = () => {

  return (

    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  
  )
}

export default App
