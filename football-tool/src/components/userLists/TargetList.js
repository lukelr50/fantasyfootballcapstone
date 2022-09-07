import React from "react"
import {  useState } from "react"
import { TargetCard } from "./TargetCard"




export const TargetList = ({playerState,update}) => {

// const addToList = (player) => {


 const [playerList, updateList] = useState([])



   

    return (
        <>
    <section className="target-list">
    <h1>Target List</h1>
                {playerState?.filter(x=> x.want===true).map(x => <TargetCard key={x.id} singleObj={x} update={update}  /> )}
                {playerState?.player?.name}
                
            </section>



       
        </>
    )
}