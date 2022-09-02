import { useEffect, useState } from "react";
import { PlayerDisplay } from "./PlayerCard";
import "./Players.css"


export const PlayerList = ({searchTermState, playerUpdateState}) => {
    const [players, setPlayers] = useState([])
const [filteredPlayers, setFiltered] = useState([])
const [compare, setCompare] = useState({})

  // 
const localToolUser = localStorage.getItem("FootballTool_user")
const toolUserObject = JSON.parse(localToolUser)

useEffect(
  () => {
    
    fetch(`http://localhost:8088/players`)
        .then(response => response.json())
        .then((playerArray) => {
            setPlayers(playerArray)

        } )

  },
[]

)



useEffect(
    () => {
       const searchedPlayer = players.filter(player => {
        return player.name.toLowerCase().startsWith(searchTermState.toLowerCase())
    })
    setFiltered(searchedPlayer)
},       
    [searchTermState]
)
return(<>


            <div className="grid-container">
                <div>
                
                {filteredPlayers.map
                (singlePlayer => <PlayerDisplay setCompare={setCompare} playerUpdateState={playerUpdateState} key={players.id} singleObj={singlePlayer} />)}
                </div>
              <div> 
                 <PlayerDisplay setCompare={setCompare} playerUpdateState={playerUpdateState}  key={players.id} singleObj={compare} />
               
              </div>
                {/* <button onClick={()=> navigate("/stuffs/create")}>add stuff</button> */}
            </div>

</>)

}