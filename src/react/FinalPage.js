import { useState } from 'react'

import Exposition from './common/Exposition'

export default function MidPage(props){

    const [entering, setEntering] = useState(true)
    var fade = require('fade')

    if(entering){
        fade.in(document.querySelector('#content', 1500))
        setEntering(false)
    }

    return (
        <div>
            <Exposition text={"Vittoria TODO"} />
        </div>
    )
}
