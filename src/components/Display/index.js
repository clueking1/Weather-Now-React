import React from 'react'
import './style.css'

function Display(props) {

    const { info } = props

    let date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let iconurl = "http://openweathermap.org/img/w/" + info.icon + ".png";
    return (
        <div className="displayWrapper">
            <div className='citStateDiv'>
               <h3 className='stateHead'>Cleveland, Ohio</h3>
           </div>
           <div className='dateDiv'>
               <h3 className='dateText'>4/5</h3>
           </div>
           <div className='iconDiv'>
               <img src= {iconurl} alt= 'icon'/>
           </div>
 
           <div className='tempDiv'>
               <p className='tempP'>60<span>&#8457;</span></p>
           </div>
           <div className='feelsTempDiv'>
               <p className='feelsTempP'><span className='feelText'><i>Feels like </i> </span>70<span>&#8457;</span></p>
           </div>
           <div className='maxTempDiv'>
               <p className='maxTempP'><span className='maxText'><i>Max: </i> </span> 80<span>&#8457;</span></p>
           </div>
           <div className='minTempDiv'>
               <p className='minTempP'><span className='feelText'><i>Min: </i></span> 50<span>&#8457;</span></p>
           </div>
           <div className='humidHeadDiv'>
               <p className='humidHeadP'>Humidity</p>
           </div>
           <div className='humidDiv'>
               <p className='humidP'>60%</p>
           </div>
           <div className='windHeadDiv'>
               <p className='windHeadP'>Wind</p>
           </div>
           <div className='windDiv'>
               <p className='windP'>5mph</p>
           </div>

        </div>
    )
}

export default Display