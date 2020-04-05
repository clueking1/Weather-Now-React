import React, { useState } from 'react'
import API from '../../utils/weatherAPI'
import Display from '../Display'

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


    function handleSubmit(e) {
        e.preventDefault()
        searchAPI()
    }

    function searchAPI() {
        API.searchTerms(`${city},${usstate}`)
            .then(res => {

                setDisplayInfo({
                    temp : res.data.main.temp,
                    tempFeels : res.data.main.feels_like,
                    tempMin : res.data.main.temp_min,
                    tempMax : res.data.main.temp_max,
                    humid : res.data.main.humidity,
                    wind : res.data.wind.speed,
                    icon : res.data.weather[0].icon,
                    descrip : res.data.weather[0].description
                  })
            })
            
    }



    return (
        <div>
            <div className='displayWrapper'>
                <div className='displayFormWrapper'>
                    <form onSubmit={handleSubmit}>
                        <div className='displayCity'>
                            <input 
                                className='form-control'
                                type='text'
                                placeholder='City'
                                name="city"
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                        <div className='displayState'>
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
            <div>
                <Display info = {displayInfo}/>
            </div>
        </div>    
    )
}

export default Search