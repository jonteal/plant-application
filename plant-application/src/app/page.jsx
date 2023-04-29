import Link from "next/link"

const HomePage = () => {
  return (
    <div>
    <ul className="homepage-nav">
      <li className="homepage-nav-item">
        <Link href="/">All Flowers</Link>
      </li>
      <li className="homepage-nav-item">
        <Link href="/indoors">Indoors</Link>
      </li>
      <li className="homepage-nav-item">
        <Link href="/outdoors">Outdoors</Link>
      </li>
      <li className="homepage-nav-item">
        <Link href="/organic">Organic</Link>
      </li>
      <li className="homepage-nav-item">
        <Link href="/garden">Garden</Link>
      </li>
    </ul>
  </div>
  )
}

export default HomePage
