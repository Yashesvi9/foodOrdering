import Image from "next/image";
import styles from "../src/pages/styles/PizzaCard.module.css"

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/../public/img/featured2.jpg" alt="" width="100" height="100" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;