import { useState } from "react"
import {PlayerList} from "./PlayerList"
import { PlayerSearch } from "./PlayerSearch"
// import { PlayerDisplay } from "./Players"


export const PlayerContainer = () => {
    const [searchTerms, setSearchTerms] = useState("")

    return <>
        <PlayerSearch setterFunction={setSearchTerms} />
        <PlayerList searchTermState={searchTerms} />
        {/* <PlayerDisplay searchTermState={searchTerms} /> */}
    </>
}