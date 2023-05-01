"use client";
import PlantList from "../components/PlantList/PlantList";
import { plants } from "../data";

const IndoorsPage = () => {
  const indoorPlants = plants.filter((plant) => plant.type === "Indoor");

  return <PlantList plants={indoorPlants} />;
};

export default IndoorsPage;
