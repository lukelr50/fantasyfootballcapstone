import { useState, useEffect } from "react"
import {PlayerList} from "./PlayerList"
import { PlayerSearch } from "./PlayerSearch"
// import { PlayerDisplay } from "./Players"
import { AvoidList } from "../userLists/AvoidList"
import { useNavigate } from "react-router-dom"
import { TargetList } from "../userLists/TargetList"
import "./Players.css"


export const PlayerContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")


    const localToolUser = localStorage.getItem("FootballTool_user")
    const toolUserObject = JSON.parse(localToolUser)

    const [playerList, updateList] = useState([])
    
    useEffect (() => {
        fetch (`http://localhost:8088/potentialList?_expand=player`)
            .then(response => response.json())
            .then((data) => {

                const renderList = data.filter(player => 
                    player.userId == toolUserObject.id
               )
                    updateList(renderList)
            
            })
        },
        []
    )


    return (
        <>
    <PlayerSearch setterFunction={setSearchTerms} />

    <div className="taco">
        <PlayerList searchTermState={searchTerms} playerUpdateState={updateList} />

        <>
        <AvoidList playerState={playerList}  update={updateList}/>
        <TargetList playerState={playerList}/>
        </>
        {/* <PlayerDisplay searchTermState={searchTerms} /> */}
    </div>
        </>
    )
}