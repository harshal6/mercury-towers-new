import React, { useState } from "react"
import Header from "./Header"
import Footer from "./Footer"

import FooterMenusWidgets from "./FooterMenusWidgets"
import MenuModal from "./MenuModal"
import Primaryhead from "./primaryhead"
import Banner from "./banner"
import Categorycard from "./categorycard"
import Eventscard from './eventscard'
import SecondaryBanner from './secondarybanner'
import Headingcontent from './headingcontent'
import Callaction from './callaction'
import SocialIcon from './SocialMenu'
import Insta from './instagram'
import Contact from './contact'

const backdropClasses = " backdrop"

const Layout = ({ children, bodyClass }) => {
  const [backdropActive, setBackdropActive] = useState(false)

  const toggleBackdrop = (e, active) => {
    e.preventDefault()
    setBackdropActive(active)
  }

  return (
    <div
      id={"GatsbyBody"}
      className={
        bodyClass +
        " showing-menu-modal showing-modal" +
        (backdropActive ? backdropClasses : "")
      }
    >
      <Header toggleBackdrop={toggleBackdrop} />

      <MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

      <main id="site-content" role="main">
        <Banner/>
        <div className="container">
        <Primaryhead/>
        <Headingcontent heading="Explore our world" 
    description="With over 520 stores, there’s something for everyone at MOA®. From fashion and food to tech and toys, we have what you’re looking for — and then some. If you need help finding anything, check out the directory or chat with us 24/7."/>
        <Categorycard />
        
        </div>
        <SecondaryBanner />
        <div className="container">
         <Headingcontent heading="Explore our Events" />
          <Eventscard />
        </div>
        <Callaction/>
        <div className="container-fluid socio-contact">
        <div className="container ">
        <SocialIcon/>
        <Insta/>
        <Contact/>
        </div>
      </div>
         {/* {children}  */}
      </main>
       
      <FooterMenusWidgets />

      <Footer />
    </div>
  )
}

export default Layout
