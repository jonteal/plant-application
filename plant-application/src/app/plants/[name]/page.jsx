import Link from "next/link"

const PlantPage = ({ params: { name }}) => {
  return (
    <div>
      <Link href='/'>Back</Link>
    </div>
  )
}

export default PlantPage