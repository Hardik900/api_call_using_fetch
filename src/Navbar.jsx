import { NavLink } from "react-router-dom"

function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><NavLink to="/jpholder" className="linkNav">Jsonplaceholder</NavLink></li>
                    <li><NavLink to="/breads" className="linkNav">Bread Imamge</NavLink></li>
                    <li><NavLink to="/universitydata" className="linkNav">University</NavLink></li>
                    <li><NavLink to="/predictage" className="linkNav">Age Predicter</NavLink></li>
                    <li><NavLink to="/publicapi" className="linkNav">Public Api</NavLink></li>
                    <li><NavLink to="/pokemonapi" className="linkNav">Pokemon Api</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar