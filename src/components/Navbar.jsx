import { Link, NavLink } from "react-router-dom"


export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
          <Link
              className="navbar-brand" 
              to="/">
                Mapas
          </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
        <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`} 
            to="/honduras">
            Honduras
        </NavLink>
        <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`} 
            to="/salvador">
            El Salvador
        </NavLink>
        <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive ? 'active':''}`} 
            to="/guatemala">
            Guatemala
        </NavLink>
        </div>
    </div>
  </div>
</nav>
  )
}
