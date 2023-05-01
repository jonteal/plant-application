import PlantList from "../components/PlantList/PlantList";
import { plants } from "../data"

const GardenPage = () => {
  const gardenPlants = plants.filter((plant) => plant.type === 'Garden');
  return (
    <PlantList plants={gardenPlants} />
  )
}

export default GardenPage