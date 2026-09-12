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
        </article>
      ))}
    </main>
  )
}

export default PlantList