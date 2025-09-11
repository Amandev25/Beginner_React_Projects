import React from 'react'
import { useState } from 'react'
import "./style.css"
const Toggle = () => {
    const [background , setBackground] = useState("white")
    const [textColor , setTextColor] = useState("#1b1b1b")
    const [buttonStyle , setButtonStyle] = useState("white")

     const handleClick = () => {
        
        
            setBackground(background === 'white' ? '#1b1b1b' : 'white')

            setTextColor( textColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b' )

            setButtonStyle( background === 'white' ? '#1b1b1b' : 'white')
        
     }

   

  return (
    <div style={{background , color: textColor}}>
     <button onClick={handleClick} style={{ buttonStyle, color : textColor ,border : `2px solid ${textColor}` }}>
       {background == '#1b1b1b' ? "Black Theme" : "White Theme"}
     </button>
     <section className='content'>
        <h1>Welcome to Color toggler </h1>
     </section>
    </div>
  )
}

export default Toggle