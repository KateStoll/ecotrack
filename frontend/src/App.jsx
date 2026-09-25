import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PlantList from './pages/PlantList'
import AddPlant from './pages/AddPlant'
import EditPlant from './pages/EditPlant'

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

  const handlePlantUpdated = (updatedPlant) => {
    setPlants((currentPlants) =>
      currentPlants.map((plant) =>
        plant.id === updatedPlant.id ? updatedPlant : plant
      )
    )
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/plants"
        element={<PlantList plants={plants} />}
      />
      <Route
        path="/add-plant"
        element={<AddPlant onPlantCreated={handlePlantCreated} />}
      />

      <Route
        path="/edit-plant/:id"
        element={<EditPlant onPlantUpdated={handlePlantUpdated} />}
      />
    
    </Routes>
   </BrowserRouter> 
  )
}

export default App