import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useAlert } from 'react-alert'

import Exposition from './common/Exposition'
import KeyInput from './common/KeyInput'
import MyRow from './common/MyRow'
import ContinueButton from './common/ContinueButton'

export default function LandingPage(props){

    const alert = useAlert()
    const [firstKey, setFirstKey] = useState("")
    const [secondKey, setSecondKey] = useState("")
    const [thirdKey, setThirdKey] = useState("")
    const [fourthKey, setFourthKey] = useState("")
    const [proceed, setProceed] = useState(false)
    var fade = require('fade')

    return (
        <div>
            <Exposition text={"Quattro chiavi per quattro profeti"} />
            <MyRow>
                <Form>
                    <KeyInput id={"form.firstKey"} onChange={setFirstKey}/>
                    <KeyInput id={"form.secondKey"} onChange={setSecondKey}/>
                    <KeyInput id={"form.thirdKey"} onChange={setThirdKey}/>
                    <KeyInput id={"form.fourthKey"} onChange={setFourthKey}/>
                </Form>
            </MyRow>
            <MyRow>
                <ContinueButton disabled={proceed} onClick={() => {
                    if(firstKey === process.env.REACT_APP_FIRST_KEY && 
                        secondKey === process.env.REACT_APP_SECOND_KEY && 
                        thirdKey === process.env.REACT_APP_THIRD_KEY && 
                        fourthKey === process.env.REACT_APP_FOURTH_KEY){
                        setProceed(true)
                        alert.success("Chiavi corrette")
                        fade.out(document.querySelector('#content', 1500))
                        setTimeout(function(){
                            props.onUnlock()
                        }, 1600)
                    } else {
                        alert.error("Chiavi errate")
                    }
                }} />
            </MyRow>
        </div>
    )
}
