const PlantCard = ({ plant }) => {
  return (
    <div className="card-container">
      <div className="card-row-1">
        <div className="card-plant-name">{plant.name}</div>
        <div className="card-plant-pic">{plant.picture}</div>
      </div>

      <div className="card-row-2">
        <div>
          <p className="card-plant-type">{plant.type}</p>
          <p className="card-plant-price">${plant.price}</p>
        </div>
        <button className="card-add-plant-btn">( + )</button>
      </div>
    </div>
  );
};

export default PlantCard;
