import React from 'react'
import Image from "next/image"
import styles from "../src/pages/styles/Navbar.module.css"
function Navbar(){
  return (
    <div className= {styles.container}>
     <div className= {styles.item}>
     <div className= {styles.callButton}>
     <Image src = "/img/telephone.png" alt="Telephone" width="42" height = "42" />
  </div>
    <div className={styles.texts}> 
    <div className={styles.text}>ORDER NOW!</div>
    <div className={styles.text}>012 234 456</div>
    </div>
    </div>
  <div className={styles.item}>
  <ul className={styles.list}>
    <li className= {styles.listItem}>Homepage</li>
    <li className= {styles.listItem}>Menu</li>
   <Image src="/img/logo.jpg" alt="logo" width="60" height="60"/>
    <li className= {styles.listItem}>Blogs</li>
    <li className= {styles.listItem}>Contact</li>
</ul>
</div>
    <div className= {styles.item}>
    <div className={styles.cart}>
    <Image src="/../public/img/cart.jpg" alt="logo" width="40" height="40"/>
    <div className={styles.counter}>0</div>
    </div>
    </div>
    </div>
  )
}

export default Navbar;
