import 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'

import Header from '../common/Header'
import KeyInput from '../common/KeyInput'
import MyRow from '../common/MyRow'

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
            <div className="d-grid gap-2">
              <Button variant="dark" className="mx-4">Continua</Button>
            </div>
          </MyRow>
        </div>
    )
}