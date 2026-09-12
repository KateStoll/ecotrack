import PlantForm from "../components/PlantForm";

function AddPlant() {
    return (
        <main>
            <h1>Add A Plant</h1>

            <PlantForm onPlantCreated={onPlantCreated} />            
        </main>
    )
    
}

export default AddPlant