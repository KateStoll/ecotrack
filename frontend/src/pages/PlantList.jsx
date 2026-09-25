import { Link } from 'react-router-dom'

function PlantList({ plants }) {
  return (
    <main>
      <h1>EcoTrack</h1>

      <h2>Plants</h2>

      {plants.map((plant) => (
        <article key={plant.id}>
          <h3>{plant.name}</h3>
          <p>{plant.species}</p>
          <p>{plant.location}</p>
          <p>{plant.sunlight}</p>
          <p>{plant.notes}</p>
          <Link to={`/edit-plant/${plant.id}`}>
            <button> Edit </button>
          </Link>
        </article>
      ))}
    </main>
  )
}

export default PlantList