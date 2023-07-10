import React from 'react'
import "./Home.scss"
import Navbar from "../../Components/Navbar/Navbar";
import Featured from "../../Components/featured/Featured";
import List from "../../Components/list/List"
import {useEffect, useState} from "react"
import {auth} from "../../firebase"
import Footer from "../../Components/Footer"

const home = () => {
  const [userName, setUserName] = useState("");


  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="home">
    <Navbar name={userName} />
   <Featured type="series"/>
   <List/>
      <List/>
    
      <Footer/>
  </div>
  )
}

export default home
