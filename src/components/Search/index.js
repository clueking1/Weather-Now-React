import React, { useState } from 'react'
import API from '../../utils/weatherAPI'

function Search() {
    const [city, setCity] = useState('')
    const [usstate, setUsState] = useState('')


    function handleSubmit(e) {
        e.preventDefault()
        searchAPI()
    }

    function searchAPI() {
        API.searchTerms(`${city},${usstate}`)
            .then(res => {
                console.log(res.data)
            })
            
    }



    return (
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
    )
}

export default Search