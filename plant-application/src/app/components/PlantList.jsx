import React from 'react'
import PlantCard from './PlantCard';

const PlantList = ({plants}) => {
  console.log('plants: ', plants);
  const plantData = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ))
  return (
    <ul>
      {plantData}
    </ul>
  )
}

export default PlantList