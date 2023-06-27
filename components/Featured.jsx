import styles from "../src/pages/styles/featured.module.css"
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);
  const images = [
    "/../public/img/featured.jpg",
    "/../public/img/featured2.jpg",
    "/../public/img/featured3.jpg",
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
        //condition ? true : false 1234
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/../public/img/arrowl.png" alt="leftarrow" layout="fill" objectFit="contain"/>
      </div>
      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="featured" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/../public/img/arrowr.png" layout="fill" alt="rightarrow" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;