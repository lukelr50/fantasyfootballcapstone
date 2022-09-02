import { Route, Routes, Outlet } from "react-router-dom"
import {PlayerSearch} from "../Players/PlayerSearch"
import {PlayerContainer} from "../Players/PlayerContainer"
import { AvoidCard } from "../userLists/AvoidCard"

import "./Views.css"
import { AvoidList } from "../userLists/AvoidList"
import { TargetList } from "../userLists/TargetList"

export const ApplicationViews = () => {
    
    const localToolUser = localStorage.getItem("FootballTool_user")
    const toolUserObject = JSON.parse(localToolUser)



    return (
        <Routes>
        <Route path="/" element={
            <>
                <h1 className="heading">Fantasy Football Tool</h1>
                <div className="search">Enter a player in the search below</div>
                <div>{<PlayerContainer/>}</div>
                
                {/* <div className="avoid-list">{<AvoidList/>}</div>
                <div>{<TargetList/>}</div> */}
                
               

                <Outlet />
            </>
        }/>
        
        <Route path="/PlayerSearch" element={<PlayerSearch />} />
        </Routes>
        
        
    )



}