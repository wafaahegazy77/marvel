import React, { useContext, useState } from 'react'
import { IsMobileContext } from '../../utilis/isMobContext'
import { delay, motion } from "framer-motion";

const Navbar = () => {
    const [activeMenu , setActiveMenu] = useState(false)
    const {isMobile} = useContext(IsMobileContext)
    const links = [
        { id: 1 , link : "Home" , isActive: true },
        { id: 2 , link : "about" },
        { id: 3 , link : "movies" },
        { id: 4 , link : "contact us" },
    ]
    return (
        <nav>
            <motion.div className='logo_box' initial={{y:50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: 0 , duration : 1} }>
                <img src='src\assets\images\logo.png' className='logo' alt=''/>
            </motion.div>

            {!isMobile && (
                <>
                    <motion.div className='menu' initial={{y:-50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: 0 , duration : 1} }>
                        <ul>
                            { links.map((link , index ) => (
                                <a key={index} href='#' className={link.isActive ? "active" : ""}> 
                                    { link.link } 
                                </a>
                            )) }
                        </ul>
                    </motion.div>

                    <motion.a href='#' className='btn' initial={{y:50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: 0 , duration : 1} }>
                        Get started
                    </motion.a>
                </>

            ) }

            {isMobile && (
                <>
                    <motion.div className="bar_icon" onClick={ () => setActiveMenu(!activeMenu)} initial={{y:50 , opacity : 0}} whileInView={{y:0 , opacity : 1}} transition={{delay: 0 , duration : 1} }>
                        <div></div>
                        <div></div>
                    </motion.div>

                    <div className={`mob_menu menu ${activeMenu? "active" : ""}`}>
                        <ul> 
                            { links.map((link , index ) => (
                                <a key={index} href='#' className={link.isActive ? "active" : ""}> 
                                    { link.link } 
                                </a>
                            )) }
                        </ul>
                    </div>
                </>
            )}
        </nav>
    )
}

export default Navbar
