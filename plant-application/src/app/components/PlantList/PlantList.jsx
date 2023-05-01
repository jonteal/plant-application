"use client";
import PlantCard from "../PlantCard/PlantCard";
import styles from "./plantList.module.css";

const PlantList = ({ plants }) => {
  return (
      <div className={styles.gridContainer}>
        {plants.map((plant) => (
          <PlantCard
            className={styles.gridItem}
            key={plant.id}
            plant={plant}
          />
        ))}
      </div>
  );
};

export default PlantList;
