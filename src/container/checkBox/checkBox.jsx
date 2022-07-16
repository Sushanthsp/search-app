import React,{useState} from 'react'
import './checkBoxStyle.scss'

function CheckBox({brand}) {
  const [value, setValue] = useState();

  return (
 <div>
       <div className='check'>
        <input
                        type="checkbox"
                        value={value ?? ""}
                        readOnly
                        className="checkBox"
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <div
                        className="accordion__text">{brand}
                    </div>
                 
    </div>
 </div>
  )
}

export default CheckBox