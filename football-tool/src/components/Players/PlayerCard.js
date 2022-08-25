import React from "react";
import "./Players.css"


// CREATE FUNCTION THAT SAVES STATE ^^^? IN PLACE OF PLAYERDISPLAY
export const PlayerDisplay = ({singleObj, setCompare}) => {
 
 
  const saveComparison = (player) => {
  setCompare(player)
  }
return(
    <div className="grid-container">
        
        <div className="horizontal">
        <h3>{singleObj.name}</h3>
          
            <button
            onClick={() => saveComparison(singleObj)}
            className="btn btn-primary">
              Choose for comparison
            </button>


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


        {/* <div id="block2" style={"float:left;"}>{singleObj.PassingYPG}</div> */}

    </div>


)}