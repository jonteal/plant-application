import PlantList from "../components/PlantList/PlantList"
import { plants } from "../data"
const OrganicPage = () => {
  const organicPlants = plants.filter((plant) => plant.type === 'Organic')
  return (
    <PlantList plants={organicPlants} />
  )
}

export default OrganicPage