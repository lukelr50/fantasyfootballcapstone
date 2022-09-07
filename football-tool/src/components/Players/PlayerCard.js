import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Players.css"


export const PlayerDisplay = ({ singleObj, setCompare, playerUpdateState }) => {

  const [player, update] = useState({

  })
  const navigate = useNavigate()
  const localToolUser = localStorage.getItem("FootballTool_user")
  const toolUserObject = JSON.parse(localToolUser)



  const avoidButtonClick = () => {

    const avoidStatusAPI = {
      userId: toolUserObject.id,
      playerId: singleObj.id,
      want: false

    }
    fetch(`http://localhost:8088/potentialList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(avoidStatusAPI)
    })
      .then(response => response.json())
      .then(() => {
        fetch(`http://localhost:8088/potentialList?_expand=player`)
          .then(response => response.json())
          .then((avoid) => {
            playerUpdateState(avoid)
          })
        })
  }



  const targetButtonClick = () => {

    const targetStatusAPI = {
      userId: toolUserObject.id,
      playerId: singleObj.id,
      want: true
    }
    fetch(`http://localhost:8088/potentialList`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(targetStatusAPI)
    })
      .then(response => response.json())   
      .then(() => {
        fetch(`http://localhost:8088/potentialList?_expand=player`)
          .then(response => response.json())
      .then((target) => {
        playerUpdateState(target)
  })
})
}


const saveComparison = (player) => {
  setCompare(player)
}

return (
  <>
    <section>
      <div className="grid-container">
        {/* // Add player picture */}
        <div className="horizontal">
          <h3>{singleObj.name}</h3>
          {/* <div>
            <img>
           {singleObj.imageURL}
           </img>
           </div> */}

          <button
            onClick={() => saveComparison(singleObj)}
            className="btn btn-primary">
            Choose for comparison
          </button>

          {/* <button
            onClick={() => avoidButtonClick(singleObj)}
            className="btn btn-primary">
              Send to Avoid List
            </button> */}

          <h3 id="team">{singleObj.team}</h3>
          <h4>Passing Yards Per Game</h4>
          <div>{singleObj.PassingYPG}</div>

          <h4> Passing Touchdowns</h4>
          <div>{singleObj.PassingTDs}</div>

          <h4> Interceptions</h4>
          <div>{singleObj.Interceptions}</div>

          <h4> Pass Attempts</h4>
          <div>{singleObj.PassAttempts}</div>

          <h4>Completions</h4>
          <div>{singleObj.Completions}</div>

          <h4>QB Rating</h4>
          <div>{singleObj.QbRating}</div>

          <h4>Yards Per Carry</h4>
          <div>{singleObj.YardsPerCarry}</div>

          <h4> Rushing Touchdowns</h4>
          <div>{singleObj.RushingTDs}</div>

          <h4> Reception Touchdowns</h4>
          <div>{singleObj.RecTDs}</div>

          <h4> Rushing Attempts</h4>
          <div>{singleObj.RushingAttempts}</div>

          <h4> Reception Yards</h4>
          <div>{singleObj.TotalRecYards}</div>

          <h4> Rushing Yards</h4>
          <div>{singleObj.TotalRushingYards}</div>

          <h4>Reception Yards Per Game</h4>
          <div>{singleObj.RecYPG}</div>

          <h4>Total Targets</h4>
          <div>{singleObj.Targets}</div>

          <h4>Receptions</h4>
          <div>{singleObj.TotalReceptions}</div>

          <h4>Average Yards Per Reception</h4>
          <div>{singleObj.AvgYardsPerRec}</div>

          <h4>Total Routes Run</h4>
          <div>{singleObj.RoutesRun}</div>

        </div>
      </div>
    </section>

    <section>
      <div className="avoid-list">
        <label
          type="text"
          onChange={
            (evt) => {
              const copy = { ...player }
              copy.player.name = evt.target.value
              update(copy)

            }

          }

        />
      </div>

      <div className="target-list">
        <label type="text" onChange={
          (evt) => {
            const copy = { ...player }
            copy.player.name = evt.target.value
            update(copy)
          }
        }
        />
      </div>







      <div>
        <button
          onClick={() => avoidButtonClick(singleObj)}
          className="btn btn-primary">
          Send to Avoid List
        </button>
      </div>

      <div>
        <button
          onClick={() => targetButtonClick(singleObj)}
          className="btn btn-primary">
          Send to Target List
        </button>
      </div>
    </section>

  </>

)
}
