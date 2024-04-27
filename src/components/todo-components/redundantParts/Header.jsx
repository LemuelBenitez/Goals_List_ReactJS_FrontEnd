import { Link } from "react-router-dom";
import { useAuth } from "../security/AuthContext";import { useContext } from "react";


export default function Header() {
    // const authContext = useContext(AuthContext);
    // console.log(authContext.number) Confirm state is shared across components

    const authContext = useAuth()
    const isAuthenticated = authContext.isAuthenticated;

  return (
    <header className="border-bottom border-light border-5 mb-5 p-2">
    <div className="container">
        <div className="row">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand ms-2 fs-2 fw-bold text-black" href="https://github.com/LemuelBenitez">GitHub</a>
                <div className="collapse navbar-collapse">
               { isAuthenticated &&
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5"><Link className="nav-link" to="/welcome/:username">Home</Link></li>
                        <li className="nav-item fs-5"><Link className="nav-link" to="/users/{username}/list">Todos</Link></li>
                    </ul>
                }
                </div>
                <ul className="navbar-nav">
                    <li className="nav-item fs-5"><Link className="nav-link" to="/">Login</Link></li>
                    <li className="nav-item fs-5"><Link className="nav-link" to="/logout" onClick={authContext.LogingOut}>Logout</Link></li>
                </ul>
            </nav>
        </div>
    </div>
</header> 

  );
}
