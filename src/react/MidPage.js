import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useAlert } from 'react-alert'

import KeyInput from './common/KeyInput'
import MyRow from './common/MyRow'
import ContinueButton from './common/ContinueButton'

export default function MidPage(props){

    const alert = useAlert()
    const [key, setKey] = useState("")
    const [entering, setEntering] = useState(true)
    const [proceed, setProceed] = useState(false)
    var fade = require('fade')

    if(entering){
        fade.in(document.querySelector('#content', 1500))
        setEntering(false)
    }

    return (
        <div>
            <MyRow>
                <Form>
                    <KeyInput id={"form.key"} onChange={setKey}/>
                </Form>
            </MyRow>
            <MyRow>
                <ContinueButton disabled={proceed} onClick={() => {
                    if(key === "x"){
                        setProceed(true)
                        alert.success("Chiave corretta")
                        fade.out(document.querySelector('#MidPage', 2800))
                        setTimeout(function(){
                            props.onUnlock()
                        },3000)
                    } else {
                        alert.error("Chiave errata")
                    }
                }} />
            </MyRow>
        </div>
    )
}
