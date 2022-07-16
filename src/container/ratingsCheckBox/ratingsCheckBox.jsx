import React from 'react'
import { AiFillStar } from 'react-icons/ai';

function RatingsCheckBox({brand}) {
    return (
        <div>
            <div className='check'>
                <input
                    type="checkbox"
                    readOnly
                    className="checkBox"
                />
                {Array.from(Array(brand), (e, i) => {
                    return <AiFillStar key={i} className="r"/>
                })}
                <div
                    className="accordion__text">{brand}
                </div>

            </div>
        </div>
    )
}

export default RatingsCheckBox