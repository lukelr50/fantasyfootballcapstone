import React from "react"
import {  useState } from "react"
import { AvoidCard } from "./AvoidCard"
import "./Lists.css"



export const AvoidList = ({playerState, update}) => {
// const addToList = (player) => {


 const [playerList, updateList] = useState([])



   

    return (
        <>
    <section className="avoid-list">
            
    <h1>Avoid List</h1>
                {playerState?.filter(x=> x.want===false).map(x => <AvoidCard key={x.id} playerState={playerState} singleObj={x} update={update} />)}
                {playerState?.player?.name}
                
            </section>
            </>


        
        
    )
}
// useEffect(
//     () => {
//         getAllPlayers()
          
//             fetch(`http://localhost:8088/players`)
//             .then(response => response.json())
//             .then((playerArray) => {
//                 setCompare(playerArray)
//             })   
        
       
//     },
//     [] // When this array is empty, you are observing initial component state
// )
 


  

    //  fetch (`http://localhost:8088/potentialList`, {
    //         method: "POST" ,
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(statusToSendToAPI)
    // })
    // .then(response => response.json())
    // .then(() => {
    //     console.log("we reached the .then()")
    //   navigate("/")
    // })
    

    // <div>
    //  <button
    //         onClick={() => handleSaveButtonClick(singleObj)}
    //         className="btn btn-primary">
    //           Send to Avoid List
    //         </button> 
    //     </div>
    // <div className="container">
    //         <button
    //         onClick={() => AvoidList(singleObj)}
    //         className="btn btn-primary">
    //           Send to Avoid List
    //         </button>
    //         </div>

