import React from "react"

export const AvoidList = ({singleObj, avoid}) => {

const addToList = (player) => {
    avoid(player)
}
return(
    <div className="container">


            <button
            onClick={() => addToList(singleObj)}
            className="btn btn-primary">
              Send to Avoid List
            </button>


            </div>
)}