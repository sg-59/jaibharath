import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar(){
    return(
        <div className="main">
<Link to={'/'}><button>Home</button></Link> 
<Link to={'/cart'}><button>Cart</button></Link>
<a href="/">Home page</a>
<a href="/cart">cart page</a>
        </div>
    )
}

export default Navbar