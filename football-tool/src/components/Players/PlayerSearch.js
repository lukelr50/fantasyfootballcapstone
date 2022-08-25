import {useState} from "react"
export const PlayerSearch = ({setterFunction}) => {
    const [searchTermAsWeType, setSearchTermAsWeType] = useState("")
   
//    const filter
   
    return (
        <div>
       <input
                onChange={
                    (changeEvent) => {
                        setSearchTermAsWeType(changeEvent.target.value)
                    }
                }
            type="text" placeholder="Enter search terms" />
            <button onClick={
                    (changeEvent) => {
                        setterFunction(searchTermAsWeType)
                    }
                }>Search</button>
        </div>
    


         
    
    
    )
}