import { useEffect, useState } from 'react'
import PlantForm from './components/PlantForm'

function App() {
  const [plants, setPlants] = useState([])
 

  useEffect(() => {
    console.log('Fetching plants...')

    fetch('http://127.0.0.1:8000/api/plants/')
      .then((response) => {
        console.log('Response:', response)
        return response.json()
      })
      .then((data) => {
        console.log('Plants:', data)
        setPlants(data)
      })
      .catch((error) => {
        console.error('API error:', error)
      })
  }, [])

  const handlePlantCreated = (newPlant) => {
    setPlants((currentPlants) => [...currentPlants, newPlant])
  }

  return (
    <main>
      <h1>EcoTrack</h1>

      <PlantForm onPlantCreated={handlePlantCreated} />
     
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

export default App