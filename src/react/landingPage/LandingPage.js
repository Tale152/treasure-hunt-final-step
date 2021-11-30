import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useAlert } from 'react-alert'

import Header from '../common/Header'
import KeyInput from '../common/KeyInput'
import MyRow from '../common/MyRow'
import ContinueButton from '../common/ContinueButton'

export default function LandingPage(props){

    const alert = useAlert()
    const [firstKey, setFirstKey] = useState("")
    const [secondKey, setSecondKey] = useState("")
    const [thirdKey, setThirdKey] = useState("")
    const [fourthKey, setFourthKey] = useState("")
    const [proceed, setProceed] = useState(false)
    var fade = require('fade')

    return (
        <div id="LandingPage">
            <Header />
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
                    if(firstKey === "a" && secondKey === "b" && thirdKey === "c" && fourthKey === "d"){
                        setProceed(true)
                        alert.success("Chiavi corrette")
                        fade.out(document.querySelector('#LandingPage', 2800))
                        setTimeout(function(){
                            props.onUnlock()
                        },3000)
                    } else {
                        alert.error("Chiavi errate")
                    }
                }} />
            </MyRow>
        </div>
    )
}
