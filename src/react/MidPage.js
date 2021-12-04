import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { useAlert } from 'react-alert'

import VictorySound from '../res/Victory.mp3'
import WrongSound from '../res/Wrong.mp3'

import sendMail from './common/MailSeder'
import Exposition from './common/Exposition'
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
            <Exposition text={"La vittoria va conquistata in battaglia"} />
            <MyRow>
                <Form id={"midPageForm"} onSubmit={(e) => e.preventDefault()}>
                    <KeyInput id={"form.key"} onChange={setKey}/>
                </Form>
            </MyRow>
            <MyRow>
                <ContinueButton disabled={proceed} onClick={() => {
                    if(key === process.env.REACT_APP_FINAL_KEY){
                        setProceed(true)
                        new Audio(VictorySound).play().then(/* does nothing */)
                        alert.success("Chiave corretta")
                        fade.out(document.querySelector('#content', 1500))
                        sendMail(REACT_APP_FINAL_MAIL_TEMPLATE)
                        setTimeout(function(){
                            props.onUnlock()
                        }, 1600)
                    } else {
                        new Audio(WrongSound).play().then(/* does nothing */)
                        alert.error("Chiave errata")
                    }
                }} />
            </MyRow>
        </div>
    )
}
