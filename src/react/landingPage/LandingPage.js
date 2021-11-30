import Form from 'react-bootstrap/Form'

import Header from '../common/Header'
import KeyInput from '../common/KeyInput'
import MyRow from '../common/MyRow'
import ContinueButton from '../common/ContinueButton'

export default function LandingPage(props){
    return (
        <div>
            <Header />
            <MyRow>
                <Form>
                    <KeyInput id={"form.firstKey"} />
                    <KeyInput id={"form.secondKey"} />
                    <KeyInput id={"form.thirdKey"} />
                    <KeyInput id={"form.fourthKey"} />
                </Form>
            </MyRow>
            <MyRow>
                <ContinueButton onClick={() => console.log("click")} />
            </MyRow>
        </div>
    )
}