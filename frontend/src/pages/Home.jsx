import { Link } from 'react-router-dom'

function Home() {
    return (
        <main>

            <h1>EcoTrack</h1>

            <h2>What would you like to do?</h2>

           <Link to="/add-plant">
            <button> Add a Plant </button>
           </Link>

           <Link to="/plants">
            <button>View Plants</button>
           </Link>

        </main>
    )
}

export default Home;