import axios from "axios"
let endpoint = "http://localhost:9090"
const ServiceComponent = function(){
    //Laget serviceklasse for apikall get list getter liste med profiler hvis modifier er null og henter person dersom modifier er id
    this.getList = modifier =>{
        let profileEndpoint = `${endpoint}/profile`
        if(modifier){
            return axios.get(profileEndpoint + `/${modifier}`)
        }
        return axios.get(profileEndpoint) 
    }
    // getter kommentar (ikke brukt men laget i tilfelle den skulle være nødvendig)
    this.getComments = modifier =>{
        return axios.get(`${endpoint}/comments/${modifier}`)
    }
}
export default new ServiceComponent();