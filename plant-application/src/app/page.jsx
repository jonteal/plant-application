import Link from "next/link";
import PlantList from "./components/PlantList/PlantList";

const plants = [
  {
    id: 1,
    name: "Monstera",
    picture: "",
    type: "Indoor",
    price: 55,
  },
  {
    id: 2,
    name: "Aloe Vera",
    picture: "",
    type: "Indoor",
    price: 37,
  },
  {
    id: 3,
    name: "Snake Plant",
    picture: "",
    type: "Indoor",
    price: 45,
  },
  {
    id: 4,
    name: "Dracaena",
    picture: "",
    type: "Outdoor",
    price: 127,
  },
];

const HomePage = () => {
  return (
    <div>
      <PlantList plants={plants} />
    </div>
  );
};

export default HomePage;
