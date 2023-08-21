import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.about}</Link>
                        </li>
                    </ul>
                </div>
                <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                    <input class="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="form-switch"/>
                        <label class="form-check-label" for="form-switch">Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}
Navbar.prototype = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "TextUtils",
    about: "About us"
}