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
                <Link to="/notes"><div className="navbar-brand mb-0 h1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-card-list" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                </svg></div></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            { user ? (
                <div className="collapse navbar-collapse d-flex nav-justified" id="navbarNavAltMarkup">
                    <Link className="nav-item w-100" to="" onClick={handleLogOut}>Log Out</Link>
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