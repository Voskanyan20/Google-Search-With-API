import axios from "axios";



class Api{
   static autoComplete =(q)=>{
       return axios.get("https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search", {
           params: {
               client: 'firefox',
               q
           }
       })
   }
}

export default Api;