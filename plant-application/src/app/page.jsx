import PlantList from "./components/PlantList/PlantList";
import { plants } from "./data";

const HomePage = () => {
  return (
    <div>
      <PlantList plants={plants} />
    </div>
  );
};

export default HomePage;
