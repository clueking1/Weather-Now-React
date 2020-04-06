import React, { useState, useEffect } from 'react'
import API from '../../utils/weatherAPI'
import Display from '../Display'
import './style.css'

function Search() {
    const [city, setCity] = useState('')
    const [usstate, setUsState] = useState('')
    const [displayInfo, setDisplayInfo] = useState({
      temp : '',
      tempFeels : '',
      tempMin : '',
      tempMax : '',
      humid : '',
      wind : '',
      icon : '',
      descrip : ''
    })

    useEffect(() => {
        searchAPI()
    })


    function handleSubmit(e) {
        e.preventDefault()
        searchAPI()
    }

    function searchAPI() {
        API.searchTerms(`${city},${usstate}`)
            .then(res => {
               
                setDisplayInfo({
                    temp : Math.floor(res.data.main.temp),
                    tempFeels : Math.floor(res.data.main.feels_like),
                    tempMin : Math.floor(res.data.main.temp_min),
                    tempMax : Math.floor(res.data.main.temp_max),
                    humid : Math.floor(res.data.main.humidity),
                    wind : Math.floor(res.data.wind.speed),
                    icon : res.data.weather[0].icon,
                    descrip : res.data.weather[0].description,
                    stateCity : `${city}, ${usstate}`
                  })
            })
            
    }



    return (
        <div>
            <div className='searchWrapper'>
                <div className='bgImg'>
                <div className='searchFormWrapper'>
                    <form onSubmit={handleSubmit}>
                        <div className='searchCity'>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='City'
                                name="city"
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                        <div className='searchState'>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='State'
                                name="state"
                                onChange={e => setUsState(e.target.value)}
                            />
                        </div>
                        <button className="subBtn" type="submit">
                            Get Weather!
                        </button>
                    </form>
                </div>
                </div>
            </div>
            <div>
                <Display info = {displayInfo}/>
            </div>
        </div>    
    )
}

export default Search