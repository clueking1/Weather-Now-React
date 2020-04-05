import React from 'react'

function Display() {

    return (
        <div className='displayWrapper'>
            <div className='displayFormWrapper'>
                <form>
                    <div className='displayCity'>
                        <input 
                            className='form-control'
                            type='text'
                            placeholder='City'
                            name="city"
                            //onChange={}
                        />
                    </div>
                    <div className='displayState'>
                        <input 
                            className='form-control'
                            type='text'
                            placeholder='State'
                            name="state"
                            //onChange={}
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

export default Display