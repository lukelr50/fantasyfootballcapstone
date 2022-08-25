import { Link, useNavigate } from "react-router-dom"

export const userNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            {/* <li className="navbar__item active">
                <Link className="navbar__link" to="/players">Players</Link>
            </li> */}

            {
                localStorage.getItem("FootballTool_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("FootballTool_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
        }