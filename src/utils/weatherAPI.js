import axios from 'axios'

export default {
    searchTerms: function(query) {
        return axios.get(
            "https://api.openweathermap.org/data/2.5/weather?q=" + query + 
            ",us&units=imperial&APPID=654c88e2f3602b7e34cbe1a0f99b9ef0"
        )
    }
}