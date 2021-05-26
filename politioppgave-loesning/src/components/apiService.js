import axios from "axios"
const endpoint = "http://localhost:9090"
/*Jeg har laget endpointstrenger på denne måten for å akkomandere flere eventuelle endpoints på 9090 som foreksempel comments
da er det bare å legge til en funksjon til*/
export const getList = modifier => {
    const profileEndpoint = `${endpoint}/profile`

    if(modifier){
        return axios.get(profileEndpoint + `/${modifier}`)
    }
    
    return axios.get(profileEndpoint) 
}
