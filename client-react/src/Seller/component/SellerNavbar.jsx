import "./cssFiles/Navbar.css"
import {Link} from 'react-router-dom'


const SellerNavbar=()=>{
    return(
        <div>
<header> 
        <nav>
          <h1>Tunisia Camping</h1>
        <ul>
              <li>
                <Link to="/Seller">Home</Link>
              </li>
              <li>
                <Link to="/SellerProfile/:id">Profile</Link>
              </li>
              <li>
                <Link to="/addProduct">Create Product</Link>
              </li>
              <li>
                <Link to="/">Log Out</Link>
              </li>
            </ul>
        </nav>
        </header>
        </div>
    )
        
}

export default SellerNavbar