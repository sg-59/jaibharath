import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import Cart from "./Pages/Cart"
import Home from "./Pages/Home"
import Test from "./Pages/Test"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Welcome from "./Pages/Welcome"

 
function App(){

 const Loginstatus=JSON.parse(localStorage.getItem('jaiBharath'))

 console.log(Loginstatus,"******************");

  const abc=createBrowserRouter([{
    path:'/',
    element:Loginstatus && Loginstatus.message ? <Welcome/> : <Login/>
  },
{
  path:"/cart",
  element:<Cart/>
},
{
  path:"/test",
  element:<Test/>
},
{
  path:'/signup',
  element:<Signup/>
}
])


  return (
    <>
<RouterProvider router={abc}></RouterProvider>
    </>
  )
}

export default App
