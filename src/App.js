import React from 'react'
import './index.css'


function StartPage(){
    return(
        <div className='startPage'>
            <div className='textAndButton'>
                <h1 className='mainText'>Посмотреть события</h1>
                <button onClick={visibleToInvisible} className='button'></button>
            </div>
        </div>
    )
}

function visibleToInvisible(){
    console.log('Я доделаю это приложение')
}

export default StartPage
