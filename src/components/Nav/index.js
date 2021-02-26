import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Fan Faves</Link>
            <Link>Build A Pie</Link>
        </nav>
    )
}

export default Nav;