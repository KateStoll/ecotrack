import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditPlant({ onPlantUpdated }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const [plant, setPlant] = useState(null);
    
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/plants/${id}/`)
            .then((response) => response.json())
            .then((date) => {
                setPlant(date);
            })
            .catch((error) => console.error('API error:', error));
    }, [id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`http://127.0.0.1:8000/api/plants/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(plant),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('Updated plant:', data);
            navigate(`/plants`);
        })
        .catch((error) => {
            console.error('Update error:', error);
        });
    }

    return (
        <main>
            <h1>Edit Plant {id}</h1>
            {plant && (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={plant.name}
                            onChange={(event) => {
                            setPlant({
                                ...plant,
                                name: event.target.value,
                            })
                            }}
                        />
                    </label>

                    <label>
                        Species:
                        <input
                            type="text"
                            value={plant.species}
                            onChange={(event) => {
                            setPlant({
                                ...plant,
                                species: event.target.value,
                            })
                            }}
                        />
                    </label>

                    <label>
                        Location:
                        <input
                            type="text"
                            value={plant.location}
                            onChange={(event) => {
                            setPlant({
                                ...plant,
                                location: event.target.value,
                            })
                            }}
                        />
                    </label>

                    <label>
                        Sunlight:
                        <input
                            type="text"
                            value={plant.sunlight}
                            onChange={(event) => {
                            setPlant({
                                ...plant,
                                sunlight: event.target.value,
                            })
                            }}
                        />
                    </label>

                    <label>
                    Notes:
                    <textarea 
                        value={plant.notes} 
                        onChange={(event) => {
                            setPlant({
                                ...plant,
                                notes: event.target.value,
                            })
                        }} 
                    />
                    </label>

                    <button type="submit">Save Changes</button>

                </form>
            )}
        </main>
    )
}

export default EditPlant