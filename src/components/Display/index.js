import React from 'react'

function Display(props) {

    const { info } = props

    let date = new Date()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let iconurl = "http://openweathermap.org/img/w/" + info.icon + ".png";
    return (
        <div className="displayWrapper">
           <div className='dateDiv'>
               <h3>{month}/{day}</h3>
           </div>
           <div className='iconDiv'>
               <img src= {iconurl} alt= 'icon'/>
           </div>
           <div className='tempDiv'>
               <p className='tempP'>{info.temp}<span>&#8457;</span></p>
           </div>
           <div className='feelsTempDiv'>
               <p className='feelsTempP'>{info.tempFeels}<span>&#8457;</span></p>
           </div>
           <div className='maxTempDiv'>
               <p className='maxTempP'>{info.tempMax}<span>&#8457;</span></p>
           </div>
           <div className='minTempDiv'>
               <p className='minTempP'>{info.tempMin}<span>&#8457;</span></p>
           </div>
           <div className='humidDiv'>
               <p className='humidP'>{info.humid}%</p>
           </div>
           <div className='windDiv'>
               <p className='windP'>{info.wind}mph</p>
           </div>

        </div>
    )
}

export default Display