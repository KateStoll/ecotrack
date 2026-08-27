import { useState } from 'react'

function PlantForm({ onPlantCreated }) {
  const [formData, setFormData] = useState({
    name: '',
    species: '',
    location: '',
    date_observed: '',
    notes: '',
    sunlight: '',
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch('http://127.0.0.1:8000/api/plants/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPlant) => {
        onPlantCreated(newPlant)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Plant</h2>

      <div>
        <label>
          Plant Name:
          <input
            type="text"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Species:
          <input
            type="text"
            value={formData.species}
            onChange={(event) =>
              setFormData({
                ...formData,
                species: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Location:
          <input
            type="text"
            value={formData.location}
            onChange={(event) =>
              setFormData({
                ...formData,
                location: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Date Observed:
          <input
            type="date"
            value={formData.date_observed}
            onChange={(event) =>
              setFormData({
                ...formData,
                date_observed: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Notes:
          <textarea
            value={formData.notes}
            onChange={(event) =>
              setFormData({
                ...formData,
                notes: event.target.value,
              })
            }
          />
        </label>
      </div>

      <div>
        <label>
          Sunlight:
          <input
            type="text"
            value={formData.sunlight}
            onChange={(event) =>
              setFormData({
                ...formData,
                sunlight: event.target.value,
              })
            }
          />
        </label>
      </div>
      <button type="submit">Add Plant</button>
    </form>
  )
}

export default PlantForm