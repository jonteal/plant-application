import PlantList from "../components/PlantList/PlantList";
import { plants } from "../data"

const OutdoorsPage = () => {

  const outdoorPlants = plants.filter((plant) => plant.type === 'Outdoor');
  return (
    <PlantList plants={outdoorPlants} />
  )
}

export default OutdoorsPage