import { useNavigate } from "react-router-dom";
import PlantForm from "../components/PlantForm";

function AddPlant({ onPlantCreated }) {

    const navigate = useNavigate();

    const handlePlantCreated = (newPlant) => {
        onPlantCreated(newPlant);
        navigate('/plants');
    }

    return (
        <main>
            <h1>Add A Plant</h1>

            <PlantForm onPlantCreated={handlePlantCreated} />            
        </main>
    )
    
}

export default AddPlant