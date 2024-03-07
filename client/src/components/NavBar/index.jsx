import { Link } from 'react-router-dom';
import { logout } from '../../utilities/users-service';

export function NavBar({ user, setUser }) {
    function handleLogOut() {
        logout()
        setUser(null)
    }
    
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <h1 className="navbar-brand mb-0 h1">Quick Notes</h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            { user ? (
                <div className="collapse navbar-collapse w-75 d-flex nav-justified" id="navbarNavAltMarkup">
                    <Link className="nav-item w-100" to="" onClick={handleLogOut}>Log Out</Link>
                    <p className="nav-item w-100 m-0">Welcome, {user.name}</p>
                </div>
            ) : (
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Link className="nav-item w-100" to="/signup">Sign Up</Link>
                    <Link className="nav-item w-100" to="/login">Log In</Link>
                </div>
            )}
        </nav>
    )
}