import { useState } from 'react'
import Form from 'react-bootstrap/Form'

import Header from '../common/Header'
import KeyInput from '../common/KeyInput'
import MyRow from '../common/MyRow'
import ContinueButton from '../common/ContinueButton'

export default function LandingPage(props){

    const [firstKey, setFirstKey] = useState("")
    const [secondKey, setSecondKey] = useState("")
    const [thirdKey, setThirdKey] = useState("")
    const [fourthKey, setFourthKey] = useState("")

    return (
        <div>
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
                <ContinueButton onClick={() => console.log(firstKey)} />
            </MyRow>
        </div>
    )
}
