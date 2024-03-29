import './App.css'
import { Component } from "react"
import {getList} from "./components/apiService"
import ProfilesDatabase from "./components/profilesDatabase"
import Visittkort from "./components/visittkort"

class App extends Component {

  state = {
    profiles : null,
    visittkort : null,
    cover: null
  }

  componentDidMount(){ // sjekker om komponent er mountet og kaller api for profiler for display på forsiden
    getList(null).then(Response => {
      this.setState({profiles : Response.data})
    })
  }

  closeHandler = () => {//Dismounter visittkort og coverdiv med hjelp av state
    this.setState({visittkort : null, cover : null})
  }

  openCardHandler = event => {//bruker custom-attributten som modfier for apikallet
    let id = event.target.getAttribute("personid")
    getList(id).then(Response => {//kaller på korrekt endepunkt og lager jsx for visittkort og mounter cover med hver sin closehandler
      this.setState({
          visittkort : <Visittkort close = {this.closeHandler} detailedProfile = {Response.data}/>, 
          cover : <div className = "cover" onClick = {this.closeHandler}></div>})
    })
  }

 render(){
  //Profiles db er hovedsiden og alltid åpen men dekkes av cover og visittkort når visittkortet er åpent (cover og visittkortene har absolute posisjon)  
  return (
    <div className="App">
        <ProfilesDatabase clickedHandler = {this.openCardHandler} profiles = {this.state.profiles}/>
        {this.state.visittkort}
        {this.state.cover}
    </div>
  )
 }
}

export default App
