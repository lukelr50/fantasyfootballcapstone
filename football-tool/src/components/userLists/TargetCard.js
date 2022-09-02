import React from "react";

export const TargetCard = ({singleObj, playerState, update}) => {

    const localToolUser = localStorage.getItem("FootballTool_user")
    const toolUserObject = JSON.parse(localToolUser)
    const handleSaveButtonClick = (event) => {
        event.preventDefault();

        const sendFalseToApi = 
            {want: false}
        // TODO: Perform the fetch() to PUT the object
        return fetch(`http://localhost:8088/potentialList/${singleObj.id}?_expand=player`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sendFalseToApi),
        })
          .then((response) => response.json())
          .then(() => {
            fetch (`http://localhost:8088/potentialList?_expand=player`)
            .then(response => response.json())
            .then((data) => {

                const renderList = data.filter(player => 
                    player.userId == toolUserObject.id
               )
                    update(renderList)
            
            })
          });
      };






return(
    <>
 
    <div className="target-card">
        <h3 onDoubleClick={(clickEvent) => handleSaveButtonClick(clickEvent)}>{singleObj.player.name}</h3>              


    </div>

    </>
)
}

export const DeleteButton = () => {
    
        return <button onClick={() => {
            fetch(`http://localhost:8088/potentialList` , {
                method: "DELETE"
            })
            .then (() => {
                  //don't know if I need this part for football tool
            })
        }} className="player__delete">Delete</button>

    
    }
