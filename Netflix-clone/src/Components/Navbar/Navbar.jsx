import { useState} from 'react';
// import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from "react-router-dom"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {auth} from "../../firebase"
import {signOut} from "firebase/auth"
 import "./navbar.scss";

const Navbar = (props) => {
  const navigate = useNavigate();

  const handleLogout = ()=>{
signOut(auth).then(()=>{
  navigate("/")
 
})
  }
 
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (

   <div  className={isScrolled ? "navbar scrolled" : "navbar"}>
     <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <span>{props.name ? ` ${props.name}` : "Login please"}</span>
          <SearchIcon className="icon" />
          <NotificationsIcon className="icon" />
          <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <div className="profile">
            <ArrowDropDownIcon className="icon" />
            <div className="options">
             
              <span onClick={handleLogout}>  Logout</span>
            </div>
          </div>
        </div>
      </div>
   </div>
  )
}

export default Navbar
