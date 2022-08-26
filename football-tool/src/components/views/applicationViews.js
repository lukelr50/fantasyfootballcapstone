import { Route, Routes, Outlet } from "react-router-dom"
import {PlayerSearch} from "../Players/PlayerSearch"
import {PlayerContainer} from "../Players/PlayerContainer"

import "./Views.css"
import { AvoidList } from "../userLists/AvoidList"

export const ApplicationViews = () => {
    
    const localToolUser = localStorage.getItem("FootballTool_user")
    const toolUserObject = JSON.parse(localToolUser)

    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1 id="heading">Fantasy Football Tool</h1>
                <div>Enter a player in the field below</div>
                <div>{<PlayerContainer/>}</div>
                
                {/* <div>{<AvoidList/>}</div> */}

                <Outlet />
            </>
        }/>
        <Route path="/PlayerSearch" element={<PlayerSearch />} />
        </Routes>
    )



}