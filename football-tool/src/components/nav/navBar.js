import { userNav } from "./userNav";

export const NavBar = () => {
    const localToolUser = localStorage.getItem("FootballTool_user")
    const toolUserObject = JSON.parse(localToolUser)

    return <userNav/>


}