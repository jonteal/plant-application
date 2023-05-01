import styles from "./plantCard.module.css";

const PlantCard = ({ plant }) => {
  return (
    <div className={`${styles.cardContainer} grid-item`}>
      <div className={styles.cardRowOne}>
        <div className={styles.cardPlantNameContainer}>
          <h4 className={styles.cardPlantName}>{plant.name}</h4>
        </div>
        <img
          alt="plant"
          className={styles.cardPlantPic}
          src="/images/plant1.jpg"
        />
      </div>

      <div className={styles.cardRowTwo}>
        <div className={styles.cardPlantInfo}>
          <p className={styles.cardPlantType}>{plant.type}</p>
          <p className={styles.cardPlantPrice}><span className={styles.cardDollarSign}>$</span>{plant.price}.00</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.cardAddPlantBtn}>+</button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
