import React from "react"

const ProfilesDatabase = props => {
    
  //Sjekker om profiler er hentet inn dersom de er det rendres dem, bruker custom-atributt personid som identifier for on-click
    return(
        <div className = "database">
            <div className = "dbWrapper">
                <p className = "dbHeader">Profiles</p>
                {props.profiles && (
                    <div className = "dbElementer">
                    {
                        props.profiles.map(element => {
                            return (<div key={element.id} className= "dbElement" onClick = {props.clickedHandler} personid = {element.id}>{element.name}</div>)
                    })
                }
                </div>
                )
                }
            </div>
        </div>
    )
}

export default ProfilesDatabase