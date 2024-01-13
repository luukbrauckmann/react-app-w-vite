import { Link } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import './Nav.css';

function Nav() {
  const { authenticated } = useAuth();

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {authenticated ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Nav