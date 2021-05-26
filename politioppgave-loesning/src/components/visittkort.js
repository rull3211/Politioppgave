import React from "react"

let Visittkort = props => {

    // Visittkort opprettes med informasjon fra apiet detailer profile er jsonobjektet fra kallet
    const detailedProfile = props.detailedProfile

    // Hvis person er ond forblir bakgrunnsfargen rød ellers settes den til blaa
    let backgroundColor = {backgroundColor : "rgb(255 120 126)"}
    if(!detailedProfile.evil) backgroundColor.backgroundColor = "rgb(76, 175, 255)"
    
    // assigner de forskjellige feltene sine data med hjelp av jsonobjektet, setter bakgrunnsfarge til korrekt farge med inline css og setter blide lik bilde fra apikall
    return(
        <div className = "visittkort">
            <div className = "background"  style = {backgroundColor}>
                <div className = "nav">
                   <div className = "closeButton" onClick = {props.close}>X</div> 
                </div>
                <div className = "visittkortContent">
                    <div className = "foersteRad">
                        <div style = {{backgroundImage : `url(http://localhost:9090/${detailedProfile.imageUrl})`}} className = "picture">
                        </div>
                        <div className = "detaljer">
                            <p>Name: {detailedProfile.name} </p>
                            <p>Age: {detailedProfile.age} Years</p>
                            <p>Occupation: {detailedProfile.title} </p>
                        </div>
                    </div>
                    <div className = "andreRad">
                        <p>
                            {detailedProfile.description}
                        </p>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Visittkort